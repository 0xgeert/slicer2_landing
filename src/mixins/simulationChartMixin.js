import Plotly from 'plotly.js-dist-min'

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
      const container = this.$refs.simulationChart
      if (container) {
        Plotly.purge(container)
      }
    }
  },
  methods: {
    // Symlog transformation for smooth zero-crossing
    symlog(x, linthresh = 100) {
      return Math.sign(x) * Math.log10(1 + Math.abs(x / linthresh))
    },
    
    inverseSymlog(y, linthresh = 100) {
      return Math.sign(y) * linthresh * (Math.pow(10, Math.abs(y)) - 1)
    },
    
    generateSymlogTicks(minVal, maxVal, linthresh = 100) {
      // Generate tick values in symlog space and their corresponding real values
      const ticks = []
      
      // Generate ticks around zero and at exponential intervals
      const realValues = [-10000, -1000, -100, 0, 100, 1000, 10000]
      
      realValues.forEach(realVal => {
        if (realVal >= minVal && realVal <= maxVal) {
          ticks.push({
            transformed: this.symlog(realVal, linthresh),
            real: realVal
          })
        }
      })
      
      return {
        tickvals: ticks.map(t => t.transformed),
        ticktext: ticks.map(t => '$' + (t.real >= 0 ? '' : '-') + Math.abs(t.real).toLocaleString())
      }
    },
    
    // Chart configuration methods
    getChartLayout(tickvals = null, ticktext = null) {
      return {
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        autosize: true,
        margin: { l: 0, r: 0,t: 0, b: 0},
        showlegend: false,
        hovermode: 'x unified',
        xaxis: {
          gridcolor: 'rgba(255, 255, 255, 0.05)',
          showgrid: false,
          color: 'rgba(255, 255, 255, 0.4)',
          tickfont: {
            size: 10,
            color: 'rgba(255, 255, 255, 0.4)'
          },
          automargin: true
        },
        yaxis: {
          type: 'linear',
          gridcolor: 'rgba(255, 255, 255, 0.05)',
          showgrid: true,
          color: 'rgba(255, 255, 255, 0.4)',
          tickfont: {
            size: 10,
            color: 'rgba(255, 255, 255, 0.4)'
          },
          automargin: true,
          fixedrange: false,
          // Custom tick labels for symlog scale
          ...(tickvals && ticktext ? {
            tickmode: 'array',
            tickvals: tickvals,
            ticktext: ticktext
          } : {})
        },
        hoverlabel: {
          bgcolor: 'rgba(0, 0, 0, 0.9)',
          bordercolor: 'rgba(255, 255, 255, 0.1)',
          font: {
            color: 'rgb(229, 231, 235)',
            size: 12
          }
        }
      }
    },
    
    getChartConfig() {
      return {
        responsive: true,
        displayModeBar: false
      }
    },
    
    createTraces(labels = [], pointPnLs = [], cumulativePnLs = [], barColors = [], barCustomData = [], lineCustomData = []) {
      return [
        {
          type: 'bar',
          name: 'Delta P&L',
          x: labels,
          y: pointPnLs,
          marker: {
            color: barColors,
            line: {
              width: 0
            }
          },
          hovertemplate: '<b>Delta P&L:</b> %{customdata[0]}<br><b>Delta Trades:</b> %{customdata[1]}<extra></extra>',
          customdata: barCustomData
        },
        {
          type: 'scatter',
          name: 'Cumulative P&L',
          x: labels,
          y: cumulativePnLs,
          mode: 'lines',
          line: {
            color: 'rgb(147, 197, 253)',
            width: 3
          },
          hovertemplate: '<b>Cumulative P&L:</b> %{customdata[0]}<br><b>Cumulative ROI:</b> %{customdata[1]}<br><b>Cumulative Spend:</b> %{customdata[2]}<br><b>Total Trades:</b> %{customdata[3]}<extra></extra>',
          customdata: lineCustomData
        }
      ]
    },
    
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
      const container = this.$refs.simulationChart
      if (!container) return
      
      if (this._chartInstance) {
        Plotly.purge(container)
      }
      
      // Initialize with empty traces
      const traces = this.createTraces()
      
      Plotly.newPlot(container, traces, this.getChartLayout(), this.getChartConfig())
      this._chartInstance = true
    },
    
    updateChart() {
      if (!this._chartInstance) {
        this.initChart()
        if (!this._chartInstance) return
      }
      
      const container = this.$refs.simulationChart
      if (!container) return
      
      // Prepare data from simulation
      const data = this.simulation.pointsData
      const labels = []
      const pointPnLs = []
      const cumulativePnLs = []
      const barColors = []
      const barCustomData = []
      const lineCustomData = []
      
      for (let i = 0; i < data.length; i++) {
        const p = data[i]
        labels.push(p.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
        
        // Apply symlog transformation to y-values for smooth zero-crossing
        pointPnLs.push(this.symlog(p.pointPnL))
        cumulativePnLs.push(this.symlog(p.cumulativePnL))
        
        barColors.push(p.pointPnL >= 0 ? 'rgba(52, 211, 153, 0.8)' : 'rgba(248, 113, 113, 0.8)')
        
        // Custom data for hover tooltips (use original values, not transformed)
        barCustomData.push([
          this.formatCurrency(p.pointPnL),
          p.numTrades
        ])
        lineCustomData.push([
          this.formatCurrency(p.cumulativePnL),
          this.formatPercent(p.roi),
          this.formatCurrency(p.totalInvestment),
          this.simulation.metrics.totalTrades
        ])
      }
      
      // Create traces with symlog-transformed data
      const traces = this.createTraces(labels, pointPnLs, cumulativePnLs, barColors, barCustomData, lineCustomData)
      
      // Generate custom tick labels for symlog scale
      const allRealValues = data.map(p => [p.pointPnL, p.cumulativePnL]).flat()
      const minVal = Math.min(...allRealValues)
      const maxVal = Math.max(...allRealValues)
      const { tickvals, ticktext } = this.generateSymlogTicks(minVal, maxVal)
      
      // Use Plotly.react for efficient updates without animation
      Plotly.react(container, traces, this.getChartLayout(tickvals, ticktext))
    }
  },

}
