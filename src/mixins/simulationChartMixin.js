import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data() {
    return {
      // Simulation data
      simulation: {
        isRunning: false,
        hasRun: false,
        progress: 0,
        currentPoint: 0,
        totalPoints: 30,
        pointsData: [],
        metrics: {
          roi: 0,
          winRate: 0,
          maxDrawdown: 0,
          bestTrade: 0,
          worstTrade: 0,
          avgHold: 0,
          totalTrades: 0,
          cumulativePnL: 0,
          currentEquity: 0,
          peakEquity: 0
        },
        config: {
          totalPoints: 30, // M
          tradesPerPointRange: [3, 8], // K range
          winProbabilityRange: [0.30, 0.60],
          maxDrawdownCap: 0.30,
          animationDuration: 6000, // 6 seconds
          betSize: 100 // Fixed bet size per trade
        }
      },
      updateChartQueued: false
    }
  },
  created() {
    // Store chart instance as non-reactive property
    this._chartInstance = null
  },
  mounted() {
    // Initialize simulation chart
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeUnmount() {
    // Clean up chart
    if (this._chartInstance) {
      this._chartInstance.destroy()
    }
  },
  methods: {
    // Simulation methods
    randomBetween(min, max) {
      return Math.random() * (max - min) + min
    },
    
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    
    // Sample from return distribution buckets
    sampleReturn(isWin) {
      if (isWin) {
        // Win buckets with fat upside tail for crypto
        const buckets = [
          { weight: 40, min: 0.02, max: 0.15 },     
          { weight: 25, min: 0.15, max: 0.40 },     
          { weight: 10, min: 0.40, max: 1.20 },     
          { weight: 5, min: 1.20, max: 5.00 },        
          { weight: 2, min: 5, max: 25.00 },
        ]
        
        const totalWeight = buckets.reduce((sum, b) => sum + b.weight, 0)
        let rand = Math.random() * totalWeight
        
        for (const bucket of buckets) {
          rand -= bucket.weight
          if (rand <= 0) {
            // For the rare tail bucket, use log-uniform distribution
            if (bucket.min === 1.20) {
              const logMin = Math.log(bucket.min)
              const logMax = Math.log(bucket.max)
              return Math.exp(this.randomBetween(logMin, logMax))
            }
            return this.randomBetween(bucket.min, bucket.max)
          }
        }
        return this.randomBetween(0.02, 0.15) // fallback
      } else {
        // Loss buckets with occasional wipeout for crypto
        const buckets = [
          { weight: 55, min: -0.05, max: -0.01 },    // Small losses (55%)
          { weight: 30, min: -0.15, max: -0.05 },    // Medium losses (30%)
          { weight: 12, min: -0.50, max: -0.15 },    // Large losses (12%)
          { weight: 3, min: -1.00, max: -0.50 }      // Rare wipeout (3%)
        ]
        
        const totalWeight = buckets.reduce((sum, b) => sum + b.weight, 0)
        let rand = Math.random() * totalWeight
        
        for (const bucket of buckets) {
          rand -= bucket.weight
          if (rand <= 0) {
            return this.randomBetween(bucket.min, bucket.max)
          }
        }
        return this.randomBetween(-0.05, -0.01) // fallback
      }
    },
    
    generateDates(numPoints) {
      // Generate dates going back from today, evenly spaced
      const today = new Date()
      const monthsBack = 6
      const daysBack = monthsBack * 30
      const daysPerPoint = daysBack / numPoints
      
      const dates = []
      for (let i = 0; i < numPoints; i++) {
        const date = new Date(today)
        date.setDate(date.getDate() - Math.round(daysBack - (i * daysPerPoint)))
        dates.push(date)
      }
      return dates
    },
    
    formatCurrency(value) {
      const sign = value >= 0 ? '+' : ''
      return sign + '$' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    
    formatPercent(value) {
      const sign = value >= 0 ? '+' : ''
      return sign + value.toFixed(2) + '%'
    },
    
    async runSimulation() {
      if (this.simulation.isRunning) return
      
      // Reset simulation state
      this.simulation.isRunning = true
      this.simulation.hasRun = true
      this.simulation.progress = 0
      this.simulation.currentPoint = 0
      this.simulation.pointsData = []
      
      // Reset metrics
      const metrics = this.simulation.metrics
      metrics.roi = 0
      metrics.winRate = 0
      metrics.maxDrawdown = 0
      metrics.bestTrade = 0
      metrics.worstTrade = 0
      metrics.avgHold = 0
      metrics.totalTrades = 0
      metrics.cumulativePnL = 0
      metrics.currentEquity = 0
      metrics.peakEquity = 0
      
      // Initialize run parameters
      const config = this.simulation.config
      const winProbability = this.randomBetween(
        config.winProbabilityRange[0],
        config.winProbabilityRange[1]
      )
      
      // Generate dates for all points
      const dates = this.generateDates(config.totalPoints)
      
      // Running totals for the entire run
      let totalWins = 0
      let totalHoldTime = 0
      let runningPnL = 0
      let peakPnL = 0
      
      // Calculate time per point for animation
      const timePerPoint = config.animationDuration / config.totalPoints
      
      // Generate and emit points one at a time
      for (let pointIdx = 0; pointIdx < config.totalPoints; pointIdx++) {
        await new Promise(resolve => setTimeout(resolve, timePerPoint))
        
        // Generate K trades for this point
        const numTrades = this.randomInt(
          config.tradesPerPointRange[0],
          config.tradesPerPointRange[1]
        )
        
        let pointPnL = 0
        
        for (let tradeIdx = 0; tradeIdx < numTrades; tradeIdx++) {
          // Determine win/loss
          let isWin = Math.random() < winProbability
          
          // Sample return with risk guard
          let returnPct = this.sampleReturn(isWin)
          let retryCount = 0
          const maxRetries = 10
          
          // Risk guard: check drawdown cap - more aggressive enforcement
          while (retryCount < maxRetries) {
            const tradePnL = config.betSize * returnPct
            const projectedPnL = runningPnL + tradePnL
            const currentDrawdown = peakPnL > 0 ? (peakPnL - runningPnL) / peakPnL : 0
            const projectedDrawdown = peakPnL > 0 ? (peakPnL - projectedPnL) / peakPnL : 0
            
            // If we're approaching the cap (90% of max) or would exceed it, resample more conservatively
            const drawdownThreshold = config.maxDrawdownCap * 0.9
            
            if ((projectedDrawdown > config.maxDrawdownCap || currentDrawdown > drawdownThreshold) && peakPnL > 0) {
              // If already tried multiple times, force a win to recover
              if (retryCount > 5) {
                isWin = true
              }
              // Resample - if we're in deep drawdown, bias toward wins
              returnPct = this.sampleReturn(isWin)
              retryCount++
            } else {
              break
            }
          }
          
          // Apply trade (fixed bet size * return percentage)
          const tradePnL = config.betSize * returnPct
          runningPnL += tradePnL
          pointPnL += tradePnL
          
          // Update peak
          if (runningPnL > peakPnL) {
            peakPnL = runningPnL
          }
          
          // Update metrics
          metrics.totalTrades++
          if (isWin) totalWins++
          
          // Update best/worst
          const returnPctValue = returnPct * 100
          if (returnPctValue > metrics.bestTrade) metrics.bestTrade = returnPctValue
          if (returnPctValue < metrics.worstTrade) metrics.worstTrade = returnPctValue
          
          // Update average hold (random between 1-10 days)
          const holdTime = this.randomBetween(1, 10)
          totalHoldTime += holdTime
        }
        
        // Update cumulative metrics
        metrics.cumulativePnL = runningPnL
        metrics.winRate = metrics.totalTrades > 0 ? (totalWins / metrics.totalTrades) * 100 : 0
        metrics.avgHold = metrics.totalTrades > 0 ? totalHoldTime / metrics.totalTrades : 0
        
        // Calculate drawdown
        const currentDrawdown = peakPnL > 0 ? ((peakPnL - runningPnL) / peakPnL) * 100 : 0
        if (currentDrawdown > metrics.maxDrawdown) {
          metrics.maxDrawdown = currentDrawdown
        }
        
        // ROI: return on total capital deployed (betSize * total trades)
        const totalCapitalDeployed = config.betSize * metrics.totalTrades
        metrics.roi = totalCapitalDeployed > 0 ? (runningPnL / totalCapitalDeployed) * 100 : 0
        
        // Store point data
        this.simulation.pointsData.push({
          date: dates[pointIdx],
          pointPnL: pointPnL,
          cumulativePnL: runningPnL,
          numTrades: numTrades,
          roi: metrics.roi,
          totalInvestment: totalCapitalDeployed
        })
        
        // Update progress
        this.simulation.currentPoint = pointIdx + 1
        this.simulation.progress = ((pointIdx + 1) / config.totalPoints) * 100
        
        // Update chart (throttled to avoid stack overflow)
        if (!this.updateChartQueued) {
          this.updateChartQueued = true
          this.$nextTick(() => {
            this.updateChart()
            this.updateChartQueued = false
          })
        }
      }
      
      this.simulation.isRunning = false
    },
    
    initChart() {
      const canvas = this.$refs.simulationChart
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      
      if (this._chartInstance) {
        this._chartInstance.destroy()
      }
      
      this._chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [],
          datasets: [
            {
              type: 'bar',
              label: 'Point P&L',
              data: [],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 0,
              yAxisID: 'y',
              order: 2
            },
            {
              type: 'line',
              label: 'ROI %',
              data: [],
              borderColor: [],
              backgroundColor: 'transparent',
              borderWidth: 3,
              pointRadius: 0,
              pointHoverRadius: 5,
              tension: 0.3,
              yAxisID: 'y1',
              order: 1,
              segment: {
                borderColor: (ctx) => {
                  const value = ctx.p1.parsed.y
                  return value >= 0 ? 'rgb(52, 211, 153)' : 'rgb(248, 113, 113)'
                }
              }
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          interaction: {
            mode: 'index',
            intersect: false
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              padding: 12,
              titleColor: 'rgb(255, 255, 255)',
              bodyColor: 'rgb(229, 231, 235)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
              displayColors: false,
              callbacks: {
                title: (items) => {
                  if (items[0]) {
                    const index = items[0].dataIndex
                    const point = this.simulation.pointsData[index]
                    if (point) {
                      return point.date.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })
                    }
                  }
                  return ''
                },
                label: (context) => {
                  const index = context.dataIndex
                  const point = this.simulation.pointsData[index]
                  if (!point) return ''
                  
                  if (context.dataset.label === 'Point P&L') {
                    return [
                      `Delta P&L: ${this.formatCurrency(point.pointPnL)}`,
                      `Delta Trades: ${point.numTrades}`
                    ]
                  } else {
                    return [
                      `ROI: ${this.formatPercent(point.roi)}`,
                      `Cumulative P&L: ${this.formatCurrency(point.cumulativePnL)}`,
                      `Total Investment: ${this.formatCurrency(point.totalInvestment)}`,
                      `Total Trades: ${this.simulation.metrics.totalTrades}`
                    ]
                  }
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
                color: 'rgba(255, 255, 255, 0.05)'
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.4)',
                font: {
                  size: 10
                },
                maxRotation: 0,
                autoSkip: true,
                maxTicksLimit: 6
              }
            },
            y: {
              type: 'linear',
              position: 'left',
              title: {
                display: false
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.05)'
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.4)',
                font: {
                  size: 10
                },
                callback: (value) => {
                  return '$' + value.toFixed(0)
                }
              }
            },
            y1: {
              type: 'linear',
              position: 'right',
              title: {
                display: false
              },
              grid: {
                display: false
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.4)',
                font: {
                  size: 10
                },
                callback: (value) => {
                  return value.toFixed(0) + '%'
                }
              }
            }
          }
        }
      })
    },
    
    updateChart() {
      if (!this._chartInstance) {
        this.initChart()
        if (!this._chartInstance) return
      }
      
      // Create new arrays to avoid reactivity issues
      const data = this.simulation.pointsData
      const labels = []
      const pointPnLs = []
      const roiValues = []
      const barColors = []
      
      for (let i = 0; i < data.length; i++) {
        const p = data[i]
        labels.push(p.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
        pointPnLs.push(p.pointPnL)
        roiValues.push(p.roi)
        barColors.push(p.pointPnL >= 0 ? 'rgba(52, 211, 153, 0.8)' : 'rgba(248, 113, 113, 0.8)')
      }
      
      // Update chart data directly
      this._chartInstance.data.labels = labels
      this._chartInstance.data.datasets[0].data = pointPnLs
      this._chartInstance.data.datasets[0].backgroundColor = barColors
      this._chartInstance.data.datasets[1].data = roiValues
      
      // Use 'none' mode to skip animation during updates
      this._chartInstance.update('none')
    }
  },

}
