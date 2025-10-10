<template>
  <header id="header" class="bg-neutral-900/90 backdrop-blur-sm text-white py-6 px-8 border-b border-white/5 fixed top-0 w-full z-50 transition-all duration-300">
    <div class="max-w-8xl mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <img src="/src/assets/logo.png" alt="Slicer" class="h-8 w-auto">
      </div>
      <nav class="hidden md:flex items-center space-x-12">
        <span class="text-neutral-300 hover:text-white transition-colors cursor-pointer font-medium">Express</span>
        <span class="text-neutral-300 hover:text-white transition-colors cursor-pointer font-medium">Simulate</span>
        <span class="text-neutral-300 hover:text-white transition-colors cursor-pointer font-medium">Deploy</span>
      </nav>
      <button class="bg-transparent border-2 border-accent-500/40 text-accent-500 hover:border-accent-500 hover:bg-accent-500/10 px-6 py-3 rounded-xl transition-all duration-200 font-medium">
        Join Waitlist
      </button>
    </div>
  </header>

<div class="relative">  
  <div class="section-linear-bg">&nbsp;</div>

  <main id="hero" class=" text-white pt-40 lg:pt-64 pb-24 px-4 sm:px-6 lg:px-8 flex items-center relative">

    <div class="max-w-6xl mx-auto text-center relative z-10">

      <div class="mb-16 relative">
        <div class="absolute inset-0 -inset-x-16 sm:-inset-x-32 -inset-y-16 sm:-inset-y-32 bg-gradient-radial from-white/20 via-apple-500/15 to-transparent blur-3xl pointer-events-none"></div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 font-black tracking-tight leading-tighter">
          NO MORE BAGHOLDING<br>
          <span class="text-accent-500">NO MORE WAITING</span>
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-300 mb-16 italic font-light leading-relaxed max-w-4xl mx-auto px-4 text-balance">
          Express. Simulate. Deploy. Repeat — until profit feels inevitable.
        </p>
      </div>
      
      <div class="backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 max-w-2xl mx-4 sm:mx-auto mb-12">
        <!-- Mobile: Separate input and button -->
        <div class="flex flex-col space-y-3 sm:hidden">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="w-full bg-white/10 backdrop-blur-sm px-4 py-4 text-white placeholder-white/80 focus:outline-none text-base rounded-2xl border-2 border-transparent focus:border-accent-500 transition-all duration-200"
          >
          <button class="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-4 transition-colors duration-200 font-semibold text-base rounded-2xl">
            Join Waitlist
          </button>
        </div>
        
        <!-- Desktop: Integrated input and button -->
        <div class="hidden sm:flex rounded-2xl overflow-hidden border-2 border-neutral-700/30 transition-all duration-200">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="flex-1 bg-white/10 backdrop-blur-sm px-6 py-5 text-white placeholder-white/80 focus:outline-none text-lg border-0"
          >
          <button class="bg-accent-500 hover:bg-accent-600 text-white px-8 py-5 transition-colors duration-200 font-semibold text-lg border-0">
            Join Waitlist
          </button>
        </div>
        
        <p class="text-neutral-300 text-balance text-sm mt-4">Get early access when Slicer 2.0 opens private beta.</p>
      </div>
      
      <!-- <div class="mb-16">
        <p class="text-neutral-400 text-sm mb-8">Why join?</p>
        <p class="text-neutral-300 lg:text-balance text-lg leading-relaxed max-w-4xl mx-auto">
          Early members get priority invites, private feedback sessions, and access to the first strategy builder release.
        </p>
      </div> -->
      
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto px-4">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
          <div class="h-40  rounded-xl mb-6 flex items-center justify-center border border-neutral-700/50  transition-all duration-300">
            <div class="text-center">
              <div class="text-accent-500 mb-2">
                <i-fa-solid-brain class="w-8 h-8" />
              </div>
              <span class="text-neutral-300 text-sm font-medium">English idea → Filter blocks</span>
            </div>
          </div>
          <h3 class="text-xl mb-1 font-semibold">Express Trade Strategy</h3>
          <p class="text-neutral-400 text-sm leading-relaxed">Natural language to precision filters</p>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 group">
          <div class="h-40  rounded-xl mb-6 flex items-center justify-center border border-neutral-700/50  transition-all duration-300">
            <div class="text-center">
              <div class="text-accent-500 mb-2">
                <i-fa-solid-chart-line class="w-8 h-8" />
              </div>
              <span class="text-neutral-300 text-sm font-medium">Performance chart rising</span>
            </div>
          </div>
          <h3 class="text-xl mb-1 font-semibold">Simulate Results</h3>
          <p class="text-neutral-400 text-sm leading-relaxed">6 months compressed to 6 seconds</p>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
          <div class="h-40  rounded-xl mb-6 flex items-center justify-center border border-neutral-700/50 transition-all duration-300">
            <div class="text-center">
              <div class="text-accent-500 mb-2">
                <i-fa-solid-rocket class="w-8 h-8" />
              </div>
              <span class="text-neutral-300 text-sm font-medium">Trade execution UI</span>
            </div>
          </div>
          <h3 class="text-xl mb-1 font-semibold">Deploy & Execute</h3>
          <p class="text-neutral-400 text-sm leading-relaxed">Auto-trading with full transparency</p>
        </div>
      </div>
      
      <p class="text-neutral-500 text-lg font-light">For humans and AI agents alike</p>
      
      <!-- <div class="bg-neutral-900/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/30 max-w-md mx-auto mb-12">
        <p class="text-neutral-300 lg:text-balance text-sm italic">
          "If this existed six months ago, I wouldn't have missed that trade."
        </p>
        <p class="text-neutral-500 text-xs mt-2">— Beta tester</p>
      </div> -->
      

    </div>
  </main>
</div>
<div class="relative">  
  <div class="section-linear-bg">&nbsp;</div>
  <section id="express" class=" text-white py-16 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div class="max-w-8xl mx-auto">
    
      
      <div class="grid lg:grid-cols-2 gap-20 items-start mb-24">
        <div class="space-y-12">
          <div>
            <h2 class="text-4xl lg:text-6xl mb-10 leading-tighter font-black tracking-tight xl:-ml-8">
              BUILD VISUALLY OR 
              <span class="text-accent-500 ">SPEAK YOUR STRATEGY</span> 
              INTO EXISTENCE
            </h2>
            <p class="text-xl text-neutral-300 mb-16 italic font-light leading-relaxed lg:text-balance">
              10,000+ on-chain and off-chain filters. Pure creative freedom. Compose by hand, describe in English, or mix both. Total control either way.
            </p>
          </div>
          
          <!-- EVERY SIGNAL, EVERY SLICE section - desktop only -->
          <div class="hidden lg:block space-y-10">
            <div>
              <h3 class="text-2xl lg:text-3xl mb-6 font-bold text-accent-500 xl:-ml-8 lg:text-balance">EVERY SIGNAL, EVERY SLICE, AT YOUR FINGERTIPS</h3>
              <div class="space-y-6 text-lg leading-relaxed">
                <p class="text-neutral-300 lg:text-balance">
                  Stack curated slices from external sources—insider calls, ML models, KOL picks—then layer your own filters on top. Or build from scratch with 10,000+ metrics spanning social, market, holders, and safety.
                </p>
                <p class="text-neutral-300 lg:text-balance">
                  Every entry and exit condition you can imagine — tokens, behavior, performance, risk — all addressable in plain English or precision filters you refine by hand.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="-mt-20 lg:mt-12 xl:-mr-8">
          <div class="mb-8">
            <div class="flex space-x-3 justify-center">
              <div class="w-3 h-3 bg-accent-500 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
            </div>
          </div>

            <div class="lg:mb-8">
              <div class="flex flex-col items-center space-y-4">
                <!-- Speech bubble container -->
                <div class="relative inline-block">
                  <div class="bg-white rounded-3xl px-8 py-6 shadow-xl max-w-xl relative">
                    <p class="text-gray-800 text-xl lg:text-2xl lg:leading-relaxed font-medium italic text-center text-balance">
                      Buy when smart money accumulates for 48h while retail is exiting.<br>
                      Sell when price doubles or after 72h.
                    </p>
                    <!-- Speech bubble tail - top right -->
                    <div class="absolute -top-3 right-8">
                      <div class="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-white"></div>
                    </div>
                  </div>
                </div>
                
                <div class="text-center text-accent-400/80 text-sm font-medium mt-8">
                  <i-fa-solid-arrow-down class="w-6 h-6 inline" />
                </div>
                
                <!-- Large radial glow surrounding the card -->
                
          

                <div class="bg-zinc-950/80 rounded-2xl p-6 border border-white/10 w-full max-w-2xl shadow-2xl relative z-10">
                  <div class="absolute inset-0 -inset-x-32 -inset-y-32 bg-gradient-radial from-white/20 via-apple-500/10 to-transparent blur-3xl pointer-events-none"></div>
                  <h4 class="font-semibold text-accent-500 text-sm mb-3">Entry Conditions:</h4>
                  <div class="space-y-3">
                    <div class="bg-white/5 rounded-xl px-5 py-3 flex items-center justify-between ">
                      <span class="text-blue-300 text-sm font-medium">Smart money net flow</span>
                      <span class="text-accent-500 font-bold text-sm">> 0 for 48h</span>
                    </div>
                    
                    <div class="bg-white/5 rounded-xl px-5 py-3 flex items-center justify-between ">
                      <span class="text-blue-300 text-sm font-medium">Retail money net flow</span>
                      <span class="text-accent-500 font-bold text-sm">< 0 for 48h</span>
                    </div>
                  </div>
                </div>
                
                <div class="text-center text-accent-400/80 text-sm font-medium mt-6">
                  <i-fa-solid-arrow-down class="w-6 h-6 inline" />
                </div>
                
                <div class="bg-zinc-950/80 rounded-2xl p-6 border border-white/10 w-full max-w-2xl shadow-2xl relative z-10">
                  <div class="absolute inset-0 -inset-x-32 -inset-y-32 bg-gradient-radial from-white/20 via-apple-500/10 to-transparent blur-3xl pointer-events-none"></div>

                  <h4 class="font-semibold text-accent-500 text-sm mb-3">Exit Conditions:</h4>
                  <div class="space-y-3">
                    <div class="bg-white/5  rounded-xl px-5 py-3 flex items-center justify-between ">
                      <span class="text-blue-300 text-sm font-medium">Price change</span>
                      <span class="text-accent-500 font-bold text-sm">≥ 100%</span>
                    </div>
                    
                    <div class="bg-white/5  rounded-xl px-5 py-3 flex items-center justify-between ">
                      <span class="text-blue-300 text-sm font-medium">Time held</span>
                      <span class="text-accent-500 font-bold text-sm">≥ 72h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        </div>
      </div>
      
      <!-- EVERY SIGNAL, EVERY SLICE section - moved below right column for mobile -->
      <div class="lg:hidden mb-12">
        <h3 class="text-2xl lg:text-3xl mb-6 font-bold text-accent-500 text-center lg:text-balance">EVERY SIGNAL, EVERY SLICE, AT YOUR FINGERTIPS</h3>
        <div class="space-y-6 text-lg leading-relaxed">
          <p class="text-neutral-300 lg:text-balance">
            Stack curated slices from external sources—insider calls, ML models, KOL picks—then layer your own filters on top. Or build from scratch with 10,000+ metrics spanning social, market, holders, and safety.
          </p>
          <p class="text-neutral-300 lg:text-balance">
            Every entry and exit condition you can imagine — tokens, behavior, performance, risk — all addressable in plain English or precision filters you refine by hand.
          </p>
        </div>
      </div>
      
      <h3 class="lg:hidden text-2xl log:text-4xl text-center mb-4  font-bold">Advanced Expression Features</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 group">
          <div class="text-center">
            <div class="flex items-center justify-center mx-auto mb-4">
              <i-heroicons-solid-light-bulb class="w-10 h-10 text-accent-600" />
            </div>
            <h4 class="mb-2 font-semibold text-lg leading-tight">Natural Language</h4>
            <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Describe strategies in plain English</p>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
          <div class="text-center">
            <div class="flex items-center justify-center mx-auto mb-4">
              <i-heroicons-solid-funnel class="w-10 h-10 text-accent-600" />
            </div>
            <h4 class="mb-2 font-semibold text-lg leading-tight">Precision Filtering</h4>
            <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Hand-craft with 10,000+ metrics</p>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
          <div class="text-center">
            <div class="flex items-center justify-center mx-auto mb-4">
              <i-heroicons-solid-square-2-stack class="w-10 h-10 text-accent-600" />
            </div>
            <h4 class="mb-2 font-semibold text-lg leading-tight">Stacked Sources</h4>
            <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Combine external signals with your filters</p>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 group">
          <div class="text-center">
            <div class="flex items-center justify-center mx-auto mb-4">
              <i-heroicons-solid-chart-bar class="w-10 h-10 text-accent-600" />
            </div>
            <h4 class="mb-2 font-semibold text-lg leading-tight">Behavioral Signals</h4>
            <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Track wallet patterns and holder dynamics</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="relative">  
  <div class="section-linear-bg">&nbsp;</div>
  <section id="simulate" class=" text-white py-16 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-8xl mx-auto">
      
      
      <!-- Mobile-first text section -->
      <div class="lg:hidden mb-12">
        <h2 class="text-4xl lg:text-6xl mb-6 leading-tighter font-black tracking-tight ">
          KNOW IF IT WINS 
          <span class="text-accent-500">BEFORE YOU TRADE IT</span>
        </h2>
        <p class="text-lg text-neutral-300 mb-8 italic font-light leading-relaxed ">
          Replay six months in six seconds. See ROI, win rate, drawdown. No weeks of uncertainty. Just optimize → test → repeat.
        </p>
        <p class="text-neutral-300 ">
          Every trade size tested. Every parameter validated. See your edge before deploying capital. Iterate in seconds, not weeks.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-20 items-start mb-24">
        <div class="relative">
          <!-- Large radial glow surrounding the card -->
          <div class="absolute inset-0 -inset-x-32 -inset-y-32 bg-gradient-radial from-white/50 via-white-50 lg:from-white/20 lg:via-apple-500/10 to-transparent blur-3xl pointer-events-none"></div>
          
          <div class="relative bg-zinc-950/80 rounded-3xl p-8 border border-white/10 shadow-3xl">
            
            <div class="mb-6">
              <h3 class="text-lg mb-1 font-semibold ">Strategy: "Buy when smart money accumulates + sell at 2x or after 72h"</h3>
              <p class="text-neutral-400 text-xs">(Example results for demo)</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white/10 rounded-xl p-4 border border-neutral-700/30">
                <div class="text-3xl font-bold mb-1 bg-gradient-to-r from-accent-500 via-green-400 to-accent-500 bg-clip-text text-transparent">+247%</div>
                <div class="text-neutral-400 text-xs font-medium">ROI</div>
              </div>
              <div class="bg-white/10 rounded-xl p-4 border border-neutral-700/30">
                <div class="text-3xl font-bold mb-1">68%</div>
                <div class="text-neutral-400 text-xs font-medium">Win Rate</div>
              </div>
              <div class="bg-white/10 rounded-xl p-4 border border-neutral-700/30">
                <div class="text-3xl text-red-400 font-bold mb-1">-18%</div>
                <div class="text-neutral-400 text-xs font-medium">Max DD</div>
              </div>
              <div class="bg-white/10 rounded-xl p-4 border border-neutral-700/30">
                <div class="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">2.4</div>
                <div class="text-neutral-400 text-xs font-medium">Sharpe</div>
              </div>
              <div class="bg-white/10 rounded-xl p-4 border border-neutral-700/30">
                <div class="text-3xl font-bold mb-1">4.2d</div>
                <div class="text-neutral-400 text-xs font-medium">Avg Hold</div>
              </div>
              <div class="bg-white/10 rounded-xl p-4 border border-neutral-700/30">
                <div class="text-3xl font-bold mb-1">43</div>
                <div class="text-neutral-400 text-xs font-medium">Total Trades</div>
              </div>
            </div>
            
            <div class="mb-6">
              <div class="flex justify-between text-xs text-neutral-400 mb-2">
                <span>6 months → 6 seconds animation</span>
                <span>Progress: 100%</span>
              </div>
              <div class="w-full bg-neutral-700 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-accent-500 to-accent-hover h-2 rounded-full w-full transition-all duration-300"></div>
              </div>
            </div>
            
            <div class="h-48 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl mb-6 flex items-center justify-center border border-neutral-700/30">
              <div class="text-center">
                <div class="text-accent-500 mb-3">
                  <i-fa-solid-chart-area class="w-8 h-8" />
                </div>
                <span class="text-neutral-400 text-sm font-medium">Equity curve visualization</span>
              </div>
            </div>
            
            <div class="space-y-5">
              <div>
                <h4 class="mb-3 font-semibold text-accent-500 text-sm">Exit Breakdown:</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between items-center bg-white/10 rounded-lg p-2.5">
                    <span class="text-sm">TP 100%: 18 trades</span>
                    <span class="text-accent-500 font-semibold bg-gradient-to-r from-accent-500 to-green-400 bg-clip-text text-transparent">+284%</span>
                  </div>
                  <div class="flex justify-between items-center bg-white/10 rounded-lg p-2.5">
                    <span class="text-sm">Time 72h: 25 trades</span>
                    <span class="text-accent-500 font-semibold">+76%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="mb-3 font-semibold text-accent-500 text-sm">Trade Size Impact:</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between items-center bg-white/10 rounded-lg p-2.5">
                    <span class="text-sm">$100:</span>
                    <span class="text-sm">+247% (0.3% slip)</span>
                  </div>
                  <div class="flex justify-between items-center bg-white/10 rounded-lg p-2.5">
                    <span class="text-sm">$1,000:</span>
                    <span class="text-sm">+213% (2.1%)</span>
                  </div>
                  <div class="flex justify-between items-center bg-white/10 rounded-lg p-2.5">
                    <span class="text-sm">$10,000:</span>
                    <span class="text-sm">+156% (8.7%)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button class="w-full bg-accent-500 hover:bg-accent-600 text-black py-4 rounded-xl mt-6 transition-colors duration-200 font-semibold text-lg">
              Run Simulation
            </button>
          </div>
        </div>
        
        <div class="lg:text-right space-y-12 mt-32">
          <!-- Desktop-only text section -->
          <div class="hidden lg:block">
            <h2 class="text-6xl mb-10 leading-tighter font-black tracking-tight xl:-mr-8">
              KNOW IF IT WINS 
              <span class="text-accent-500  ">BEFORE YOU TRADE IT</span>
            </h2>
            <p class="text-xl text-neutral-300 mb-16 italic font-light leading-relaxed lg:text-balance text-balnce">
              Replay six months in six seconds. See ROI, win rate, drawdown. No weeks of uncertainty. Just optimize → test → repeat.
            </p>
          </div>
          
          <div>
            <div class="space-y-8 text-lg -mt-36 lg:mt-0">
              <p class="text-neutral-300 lg:text-balance leading-relaxed hidden lg:block">
                Every trade size tested. Every parameter validated. See your edge before deploying capital. Iterate in seconds, not weeks.
              </p>
              
              <h3 class="text-2xl lg:text-3xl mb-6 font-bold text-accent-500 lg:text-balance xl:-mr-8">FLEXIBLE EXITS MATCH YOUR STRATEGY</h3>
              <p class="text-neutral-300 lg:text-balance leading-relaxed">
                Entry-based (TP/SL/time), behavior-based (liquidity drops, sentiment shifts), or combined. Your exit conditions are part of your expressed idea—simulated with complete accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-2xl log:text-4xl text-center mb-4 lg:mb-16 font-bold">Advanced Simulation Features</h3>
        <div class="grid md:grid-cols-3 gap-4 lg:gap-10">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 flex">
            <div class="flex items-center space-x-4">
              <div class="flex items-center justify-center flex-shrink-0">
                <i-heroicons-solid-clock class="w-10 h-10 text-accent-600" />
              </div>
              <div class="flex-1">
                <h4 class="mb-1 font-semibold text-lg leading-tight">Real-Time Backtesting</h4>
                <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Historical data with live market conditions simulation</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 flex">
            <div class="flex items-center space-x-4">
              <div class="flex items-center justify-center flex-shrink-0">
                <i-heroicons-solid-chart-bar-square class="w-10 h-10 text-accent-600" />
              </div>
              <div class="flex-1">
                <h4 class="mb-1 font-semibold text-lg leading-tight">Slippage Analysis</h4>
                <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Accurate trade size impact modeling</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 flex">
            <div class="flex items-center space-x-4">
              <div class="flex items-center justify-center flex-shrink-0">
                <i-heroicons-solid-shield-check class="w-10 h-10 text-accent-600" />
              </div>
              <div class="flex-1">
                <h4 class="mb-1 font-semibold text-lg leading-tight">Risk Metrics</h4>
                <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Comprehensive drawdown and volatility analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="relative">  
  <div class="section-linear-bg">&nbsp;</div>
  <section id="deploy" class=" text-white py-16 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-8xl mx-auto">
      
      <div class="lg:text-center mb-12 lg:mb-20">
        <h2 class="text-4xl lg:text-6xl mb-10 font-black tracking-tight">
          <span class="text-accent-500 ">DEPLOY ON YOUR TERMS</span>
        </h2>
        <p class="text-xl text-neutral-300 italic font-light leading-relaxed max-w-4xl mx-auto">
          Hands-free or hands-on — either way, you're in charge. Full automation with complete transparency, or human-in-the-loop for final calls.
        </p>
      </div>
      
      <!-- Horizontal Tabs -->
      <div class="max-w-6xl mx-auto">
        <!-- Tab Navigation -->
        <div class="flex space-x-1 mb-16 bg-white/10 rounded-2xl p-2 border border-white/5">
          <button 
            @click="activeTab = 'hands-off'"
            :class="[
              'flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-200',
              activeTab === 'hands-off' 
                ? 'bg-accent-500 text-black' 
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            ]"
          >
            Hands-Off Auto-Trading
          </button>
          <button 
            @click="activeTab = 'human-loop'"
            :class="[
              'flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-200',
              activeTab === 'human-loop' 
                ? 'bg-accent-500 text-black' 
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            ]"
          >
            Human-in-the-Loop
          </button>
        </div>

        <!-- Tab Content -->
        <div class="min-h-[600px]">
          <!-- Hands-Off Auto-Trading Tab -->
          <div v-if="activeTab === 'hands-off'" class="space-y-8">
            <div class="lg:text-center mb-12">
              <h3 class="text-2xl lg:text-4xl mb-4 font-bold text-accent-500">HANDS-OFF AUTO-TRADING</h3>
              <p class="text-xl text-neutral-300 italic">Set it. Forget it. Smile.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-12">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5 max-w-md w-full mx-auto ">
                <div class="flex items-center mb-4">
                  <i-heroicons-solid-cog-6-tooth class="w-5 h-5 text-accent-500 mr-3" />
                  <h4 class="font-semibold text-xl">Trade Configuration</h4>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="flex items-center text-sm text-neutral-400 mb-2 font-medium">
                      <i-heroicons-solid-currency-dollar class="w-4 h-4 mr-2" />
                      Trade Size
                    </label>
                    <div class="relative">
                      <input type="text" value="$1,000" disabled class="w-full bg-white/10 border border-neutral-700/30 rounded-xl pl-12 pr-4 py-3 text-neutral-500 cursor-not-allowed">
                      <i-heroicons-solid-currency-dollar class="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    </div>
                  </div>
                  <div>
                    <label class="flex items-center text-sm text-neutral-400 mb-2 font-medium">
                      <i-heroicons-solid-chart-bar class="w-4 h-4 mr-2" />
                      Max Slippage
                    </label>
                    <div class="relative">
                      <input type="text" value="2%" disabled class="w-full bg-white/10 border border-neutral-700/30 rounded-xl pl-12 pr-4 py-3 text-neutral-500 cursor-not-allowed">
                      <i-heroicons-solid-chart-bar class="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    </div>
                  </div>
                  <div>
                    <label class="flex items-center text-sm text-neutral-400 mb-2 font-medium">
                      <i-heroicons-solid-bolt class="w-4 h-4 mr-2" />
                      Gas Priority
                    </label>
                    <div class="relative">
                      <select disabled class="w-full bg-white/10 border border-neutral-700/30 rounded-xl pl-12 pr-10 py-3 text-neutral-500 cursor-not-allowed appearance-none">
                        <option>Medium</option>
                        <option>High</option>
                        <option>Low</option>
                      </select>
                      <i-heroicons-solid-bolt class="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <i-heroicons-solid-chevron-down class="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label class="flex items-center text-sm text-neutral-400 mb-2 font-medium">
                      <i-heroicons-solid-bell class="w-4 h-4 mr-2" />
                      Notifications
                    </label>
                    <div class="relative">
                      <select disabled class="w-full bg-white/10 border border-neutral-700/30 rounded-xl pl-12 pr-10 py-3 text-neutral-500 cursor-not-allowed appearance-none">
                        <option>Telegram</option>
                        <option>Email</option>
                        <option>Both</option>
                      </select>
                      <i-heroicons-solid-bell class="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <i-heroicons-solid-chevron-down class="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <button disabled class="w-full bg-neutral-600 text-neutral-400 py-3 rounded-xl mt-6 cursor-not-allowed font-semibold text-lg flex items-center justify-center">
                  <i-heroicons-solid-play class="w-5 h-5 mr-2" />
                  Deploy Strategy
                </button>
              </div>
              
              <div class="space-y-8 flex flex-col items-center justify-center gap-8">
                <div class="lg:grid gap-4 text-lg  items-center justify-center">
                  <p class="text-neutral-300 lg:text-balance">✓ Trades executed 24/7.</p>
                  <p class="text-neutral-300 lg:text-balance">✓ Every entry logged.</p>
                  <p class="text-neutral-300 lg:text-balance">✓ Every exit transparent.</p>
                  <p class="text-neutral-300 lg:text-balance">✓ Full P&L tracking.</p>
                  <p class="text-accent-500 font-medium col-span-2">✓ Switch modes anytime.</p>
                </div>
                
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 w-full max-w-md">
                  <h5 class="mb-4 font-semibold text-accent-500">Security Features</h5>
                  <ul class="text-sm text-neutral-400 space-y-2 leading-relaxed">
                    <li>• Non-custodial wallet integration</li>
                    <li>• Configurable position limits</li>
                    <li>• Emergency stop functionality</li>
                    <li>• Real-time monitoring dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Human-in-the-Loop Tab -->
          <div v-if="activeTab === 'human-loop'" class="space-y-8">
            <div class="lg:text-center mb-12">
              <h3 class="text-2xl lg:text-4xl mb-4 font-bold text-accent-500">HUMAN-IN-THE-LOOP</h3>
              <p class="text-xl text-neutral-300 italic">Get notified. Approve trades. Stay in control.</p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div class="space-y-8 max-w-md w-full mx-auto lg:mx-0 lg:max-w-none">
                <!-- Trade Alert Mockup -->
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                  <h4 class="mb-4 font-semibold text-accent-500">Trade Alert Example</h4>
                  <div class="bg-neutral-900/50 rounded-xl p-4 border border-neutral-700/30">
                    <div class="mb-3">
                      <h5 class="text-lg font-semibold text-white">New Match: $TOKEN</h5>
                    </div>
                    <div class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <span class="text-neutral-400">Breakout Score:</span>
                        <span class="text-accent-500 font-semibold">82</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-neutral-400">Smart Money:</span>
                        <span class="text-green-400 font-semibold">+$47k (6h)</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-neutral-400">Entry:</span>
                        <span class="text-white font-semibold">$0.02334</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-neutral-400">Exit:</span>
                        <span class="text-white font-semibold">TP 10x or SL 20%</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-neutral-400">Backtest ROI:</span>
                        <span class="text-green-400 font-semibold">+156%</span>
                      </div>
                    </div>
                    <div class="flex space-x-2 mt-4">
                      <button class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                        Approve
                      </button>
                      <button class="flex-1 bg-neutral-600 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                        Skip
                      </button>
                      <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                        Info
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Notification Channels -->
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                  <h5 class="mb-4 font-semibold text-accent-500">Notification Channels</h5>
                  <div class="space-y-3 text-sm">
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span class="text-neutral-300">Email</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span class="text-neutral-300">In-browser push</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span class="text-neutral-300">Telegram</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span class="text-neutral-300">Webhooks</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="lg:space-y-8 flex flex-col items-center justify-center gap-4 lg:gap-8">
                <div class="lg:grid gap-4 text-lg items-center justify-center mb-4 lg:mb-0">
                  <p class="text-neutral-300 lg:text-balance">✓ Trade alerts sent instantly.</p>
                  <p class="text-neutral-300 lg:text-balance">✓ One-click approve/decline.</p>
                  <p class="text-neutral-300 lg:text-balance">✓ Full trade context provided.</p>
                  <p class="text-neutral-300 lg:text-balance">✓ Complete audit trail.</p>
                  <p class="text-accent-500 font-medium col-span-2">✓ Switch modes anytime.</p>
                </div>
                
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 w-full max-w-md">
                  <h5 class="mb-4 font-semibold text-accent-500">Control Features</h5>
                  <ul class="text-sm text-neutral-400 space-y-2 leading-relaxed">
                    <li>• Real-time trade notifications</li>
                    <li>• Detailed trade reasoning</li>
                    <li>• Emergency stop override</li>
                    <li>• Approval history tracking</li>
                  </ul>
                </div>

                <!-- Usage Philosophy -->
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 w-full max-w-md">
                  <h5 class="mb-4 font-semibold text-accent-500">Usage Philosophy</h5>
                  <p class="text-sm text-neutral-300 leading-relaxed">
                    Use as pure analytics, approve high-conviction setups only, or pipe signals to your own trading infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 g:mt-20 grid md:grid-cols-3 gap-4 lg:gap-10">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 flex">
          <div class="flex items-center space-x-4">
            <div class="flex items-center justify-center flex-shrink-0">
              <i-heroicons-solid-cpu-chip class="w-10 h-10 text-accent-600" />
            </div>
            <div class="flex-1">
              <h4 class="mb-1 font-semibold text-lg leading-tight">Full Automation</h4>
              <p class="text-neutral-400 text-sm leading-tight lg:text-balance">24/7 execution with complete transparency</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 flex">
          <div class="flex items-center space-x-4">
            <div class="flex items-center justify-center flex-shrink-0">
              <i-heroicons-solid-user-circle class="w-10 h-10 text-accent-600" />
            </div>
            <div class="flex-1">
              <h4 class="mb-1 font-semibold text-lg leading-tight">Human Oversight</h4>
              <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Optionally review or approve trades before execution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 flex">
          <div class="flex items-center space-x-4">
            <div class="flex items-center justify-center flex-shrink-0">
              <i-heroicons-solid-cog-6-tooth class="w-10 h-10 text-accent-600" />
            </div>
            <div class="flex-1">
              <h4 class="mb-1 font-semibold text-lg leading-tight">Custom Integration</h4>
              <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Webhook support for external systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="relative">  
  <div class="section-linear-bg">&nbsp;</div>
  <section id="cta" class="text-white pt-32 pb-12 lg:pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto text-center">
      <div class="mb-16">
        <h2 class="text-5xl lg:text-7xl md:text-8xl mb-12 leading-[0.9] font-black tracking-tight">
          STOP GUESSING<br>
          <span class="text-accent-500">START SLICING</span>
        </h2>
        <h3 class="text-2xl lg:text-4xl mb-8 font-bold text-balance">JOIN THE WAITLIST FOR EARLY ACCESS</h3>
      </div>
      
      <div class="max-w-lg mx-auto mb-12">
        <!-- Mobile: Separate input and button -->
        <div class="flex flex-col space-y-3 sm:hidden">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="w-full bg-white/10 backdrop-blur-sm px-4 py-4 text-white placeholder-white/80 focus:outline-none text-base rounded-2xl border-2 border-transparent focus:border-accent-500 transition-all duration-200"
          >
          <button class="w-full bg-accent-500 hover:bg-accent-600 text-black px-6 py-4 transition-colors duration-200 font-semibold text-base rounded-2xl">
            Claim Your Spot
          </button>
        </div>
        
        <!-- Desktop: Integrated input and button -->
        <div class="hidden sm:flex rounded-2xl overflow-hidden border-2 border-accent-500/20 focus-within:border-accent-500 transition-all duration-200">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="flex-1 bg-white/10 backdrop-blur-sm px-6 py-5 text-white placeholder-white/80 focus:outline-none text-lg border-0"
          >
          <button class="bg-accent-500 hover:bg-accent-600 text-black px-8 py-5 transition-colors duration-200 font-semibold text-lg border-0">
            Claim Your Spot
          </button>
        </div>
      </div>
      
      <div class="space-y-1 mb-8">
        <p class="text-neutral-400 font-medium">Be first to access the private beta.</p>
        <p class="text-neutral-500 text-sm">No spam. Unsubscribe anytime.</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-2 lg:gap-0 max-w-4xl mx-auto">
        <div class="flex items-center justify-center space-x-3 text-neutral-400">
          <i-heroicons-solid-user-group class="w-5 h-5 text-accent-600" />
          <span class="text-sm">First 500 users</span>
        </div>
        <div class="flex items-center justify-center space-x-3 text-neutral-400">
          <i-heroicons-solid-chat-bubble-bottom-center-text class="w-5 h-5 text-accent-600" />
          <span class="text-sm">Private feedback sessions</span>
        </div>
        <div class="flex items-center justify-center space-x-3 text-neutral-400">
          <i-heroicons-solid-star class="w-5 h-5 text-accent-600" />
          <span class="text-sm">Priority access</span>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="relative">  
  <footer id="footer" class="bg-black text-neutral-400 py-16 border-t border-white/5 px-4 sm:px-6 lg:px-8">
    <div class="max-w-8xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div class="mb-6 md:mb-0">
          <img src="/src/assets/logo.png" alt="Slicer" class="h-8 w-auto mb-3">
          <p class="text-sm text-neutral-500">Express. Simulate. Deploy. Repeat — until profit feels inevitable.</p>
        </div>
        
        <div class="flex items-center space-x-6">
          <span class="text-sm hover:text-accent-500 transition-colors cursor-pointer">Terms</span>
          <span class="text-sm hover:text-accent-500 transition-colors cursor-pointer">Privacy</span>
        </div>
      </div>
    </div>
  </footer>
</div>

</template>

<script>

export default {
  name: "App",
  data() {
    return {
      activeTab: 'hands-off'
    }
  }
}
</script>

<style scoped>

.section-linear-bg{
  @apply bg-gradient-to-b from-zinc-800 to-transparent absolute h-[300px] w-full -z-10;
}
</style>
