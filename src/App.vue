<template>
<div class="">
  <header id="header" :class="['bg-neutral-900/90 backdrop-blur-sm text-white py-6 px-8 border-b border-white/5 fixed w-full z-50 transition-all duration-300', { 'opacity-0 pointer-events-none -translate-y-full': !isHeaderVisible, 'opacity-100 translate-y-0': isHeaderVisible }]">
    <div class="max-w-8xl mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <img src="/src/assets/logo.png" alt="Slicer" class="h-8 w-auto">
      </div>
      <nav class="hidden md:flex items-center space-x-12">
        <button @click="scrollToSection('express', 100)" class="text-neutral-300 hover:text-white transition-colors cursor-pointer font-medium bg-transparent border-none outline-none">Express</button>
        <button @click="scrollToSection('simulate', 100)" class="text-neutral-300 hover:text-white transition-colors cursor-pointer font-medium bg-transparent border-none outline-none">Simulate</button>
        <button @click="scrollToSection('deploy', 100)" class="text-neutral-300 hover:text-white transition-colors cursor-pointer font-medium bg-transparent border-none outline-none">Deploy</button>
      </nav>
      <button class="cta-ghost font-medium flex items-center justify-center gap-2">
        Join Waitlist <i-fa-solid-arrow-right class="w-4 h-4 arrow" />
      </button>
    </div>
  </header>

<div class="relative overflow-hidden">  
  <div class="section-linear-bg">&nbsp;</div>

  <main id="hero" class="hero hero-glow text-white pt-28 lg:pt-52 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 flex items-center relative">

    <div class="max-w-6xl mx-auto text-center relative z-10">

      <div class="mb-16 relative">
        <h1 class="text-[3.3rem] leading-[1] text-5xl lg:text-7xl xl:text-8xl mb-4 font-black tracking-tight leading-tighter">
          <span class="gradient-text-yellow">NO MORE <span class="gradient-text-yellow2">BAGHOLDING</span></span><br>
          <span class="gradient-text-yellow">NO MORE <span class="gradient-text-yellow2">WAITING</span></span>
        </h1>
        <p class="sub text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-300 mb-16 italic font-light leading-relaxed max-w-4xl mx-auto px-4 text-balance">
          <span class="font-semibold text-white">Express. Simulate. Deploy. Repeat</span> — until profit feels inevitable.
        </p>
      </div>
      
      <div id='cta-container' class="cta-container backdrop-blur-sm rounded-2xl px-4 pt-4 sm:px-5 sm:pt-5 lg:px-6 lg:pt-6 max-w-2xl mx-4 sm:mx-auto -mt-10 lg:mt-0">
        <!-- Mobile: Separate input and button -->
        <div class="flex flex-col space-y-3 sm:hidden">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="w-full bg-white/15 backdrop-blur-sm px-4 py-4 text-white placeholder-white/80 focus:outline-none text-base rounded-2xl border-2 border-transparent focus:border-lime-500 transition-all duration-200"
          >
          <button class="w-full bg-lime-500 hover:bg-lime-600 text-black px-6 py-4 transition-all duration-200 font-semibold text-base rounded-2xl flex items-center justify-center gap-2 relative neon-glow">
            Join Waitlist <i-fa-solid-arrow-right class="w-4 h-4 arrow" />
          </button>
        </div>
        
        <!-- Desktop: Separate input and button -->
        <div class="hidden sm:flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="flex-1 bg-white/15 backdrop-blur-sm px-6 py-5 text-white placeholder-white/80 focus:outline-none text-lg rounded-2xl border-2 border-neutral-700/30 focus:border-lime-500 transition-all duration-200"
          >
          <button class="bg-lime-500 hover:bg-lime-600 text-black px-10 py-5 transition-all duration-300 ease-out font-semibold text-lg rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 relative neon-glow">
            Join Waitlist <i-fa-solid-arrow-right class="w-4 h-4 arrow" />
          </button>
        </div>
      </div>

      <div class="text-center mt-4 text-neutral-300 text-balance text-xs lg:text-sm hero-text">
        <p class="hero-text-line">Get early access when Slicer 2.0 opens private beta.</p>
        <p class="hero-text-line"> No spam. Unsubscribe anytime.</p>
         <div class="mt-4 hidden sm:block hero-link">
           <button @click="scrollToSection('simulate', 100)" class="hover:underline  text-lime-300/80 transition-all duration-200 bg-transparent border-none outline-none cursor-pointer">Watch a 6-second sim <span class="arrow">→</span></button>
         </div>
      </div>
      
       <!-- Scroll cue arrow -->
       <div class="my-20 flex justify-center flex-col items-center gap-8 hero-scroll">
        <button 
            @click="scrollToSection('express', 100)"
            aria-label="Scroll to next section"
            class="group inline-flex p-4 rounded-full 
                  text-neutral-200/80 outline-none transition-all duration-200
                  border-4 border-neutral-200/20
                  bg-transparent
                  hover:bg-neutral-200/10
                  motion-safe:animate-[nudge_3s_ease-in-out_infinite]
                  cursor-pointer"
        >
          <i-heroicons-solid-arrow-down class="w-8 h-8" />
        </button>
       </div>


      <!-- <div class="mb-16">
        <p class="text-neutral-400 text-sm mb-8">Why join?</p>
        <p class="text-neutral-300 lg:text-balance text-lg leading-relaxed max-w-4xl mx-auto">
          Early members get priority invites, private feedback sessions, and access to the first strategy builder release.
        </p>
      </div> -->
      
      <div class="hero-steps grid md:grid-cols-3 gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto px-4">
        <div class="step bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
          <div class="h-40 rounded-xl mb-6 flex items-center justify-center border border-neutral-700/50 transition-all duration-300">
            <div class="text-center">
              <div class="text-lime-500 mb-2">
                <i-fa-solid-brain class="w-8 h-8" />
              </div>
              <span class="text-neutral-300 text-sm font-medium">English idea → Filter blocks</span>
            </div>
          </div>
          <h3 class="text-xl mb-1 font-semibold">Express Trade Strategy</h3>
          <p class="text-neutral-400 text-sm leading-relaxed">Natural language to precision filters</p>
        </div>
        
        <div class="step bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
          <div class="h-40 rounded-xl mb-6 flex items-center justify-center border border-neutral-700/50 transition-all duration-300">
            <div class="text-center">
              <div class="text-lime-500 mb-2">
                <i-fa-solid-chart-line class="w-8 h-8" />
              </div>
              <span class="text-neutral-300 text-sm font-medium">Performance chart rising</span>
            </div>
          </div>
          <h3 class="text-xl mb-1 font-semibold">Simulate Results</h3>
          <p class="text-neutral-400 text-sm leading-relaxed">6 months compressed to 6 seconds</p>
        </div>
        
        <div class="step bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
          <div class="h-40 rounded-xl mb-6 flex items-center justify-center border border-neutral-700/50 transition-all duration-300">
            <div class="text-center">
              <div class="text-lime-500 mb-2">
                <i-fa-solid-rocket class="w-8 h-8" />
              </div>
              <span class="text-neutral-300 text-sm font-medium">Trade execution UI</span>
            </div>
          </div>
          <h3 class="text-xl mb-1 font-semibold">Deploy & Execute</h3>
          <p class="text-neutral-400 text-sm leading-relaxed">Auto-trading with full transparency</p>
        </div>
      </div>
      
      <!-- <div class="bg-neutral-900/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/30 max-w-md mx-auto mb-12">
        <p class="text-neutral-300 lg:text-balance text-sm italic">
          "If this existed six months ago, I wouldn't have missed that trade."
        </p>
        <p class="text-neutral-500 text-xs mt-2">— Beta tester</p>
      </div> -->
      

      <!-- Whisper text -->
      <div class="text-center mb-8 hero-whisper">
        <p class="text-white/80 text-lg font-light italic">For humans and AI agents alike</p>
      </div>

    </div>
  </main>
</div>

<div class="relative overflow-hidden">  
  <div class="section-linear-bg">&nbsp;</div>
  <section id="express" class="text-white py-20 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-8xl mx-auto">

      <!-- 2-col narrative: Copy (L) → Example (R) -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-28 items-start mb-6 lg:mb-16">
        <!-- LEFT: Headline + paragraph -->
        <div class="space-y-10">
          <div class="text-center lg:text-left pt-6 lg:pt-16">
            <h2 class="text-4xl lg:text-6xl mb-6 leading-tighter font-black tracking-[-0.015em] gradient-text-yellow text-balance">
              BUILD VISUALLY OR
              <span class="gradient-text-yellow2">SPEAK YOUR STRATEGY</span>
              INTO EXISTENCE
            </h2>
            <p class="text-xl text-neutral-300 mb-0 italic font-light leading-relaxed text-balance  lg:ml-6">
              <span class="text-white font-semibold">10,000+ on-chain and off-chain filters.</span> Pure creative freedom.
              <span class="text-white font-semibold">Compose by hand, describe in English, or mix both.</span> Total control either way.
            </p>
          </div>
        </div>

        <!-- RIGHT: Speech → Filter demo (scaled/uncrowded) -->
        <div class="mt-4 lg:mt-6 xl:pl-8 xl:-mr-8">
          <div class="mb-6">
            <div class="flex space-x-3 justify-center">
              <div class="w-3 h-3 bg-lime-500 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
            </div>
          </div>

          <div class="lg:mb-6">
            <div class="flex flex-col items-center ">
              <!-- Speech bubble -->
              <div class="relative inline-block">
                <div class="bg-white rounded-3xl px-8 py-6 shadow-white/10 shadow-xl max-w-lg lg:max-w-xl relative ">
                  <p class="text-gray-800 text-lg lg:text-2xl lg:leading-relaxed font-medium italic text-center text-balance">
                    Buy when smart money accumulates for 48h while retail is exiting.<br>
                    Sell when price goes up 5x or after 72h.
                  </p>
                  <!-- Tail -->
                  <div class="absolute -top-3 right-8">
                    <div class="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-white"></div>
                  </div>
                </div>
              </div>


              <span class="data-flow-line "></span>


              <!-- Filter blocks -->
              <div class="bg-zinc-950/80 rounded-2xl border border-white/5 w-full max-w-2xl shadow-2xl relative z-10">
                <div class="absolute inset-0 -inset-x-24 -inset-y-24 bg-gradient-radial from-white/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none"></div>

                <div class="p-2">
                  <!-- Buy -->
                  <div class="inline-block rounded-lg p-2">
                    <div class="inline-block bg-lime-500/20 rounded-lg px-3 py-2 mr-2 mb-2">
                      <span class="text-lime-400 text-sm font-semibold">Buy at</span>
                      <i-heroicons-solid-chevron-down class="w-3 h-3 text-lime-400 ml-1 inline" />
                    </div>
                    <div class="inline-block bg-white/5 rounded-lg px-3 py-2 mr-2 mb-2">
                      <span class="text-amber-100 text-sm font-medium">Smart money net flow</span>
                      <span class="text-blue-400 font-medium text-sm ml-2">&gt; 0 for 48h</span>
                    </div>
                    <div class="inline-block bg-white/5 rounded-lg px-3 py-2">
                      <span class="text-amber-100 text-sm font-medium">Retail money net flow</span>
                      <span class="text-blue-400 font-medium text-sm ml-2">&lt; 0 for 48h</span>
                    </div>
                  </div>

                  <!-- Sell -->
                  <div class="inline-block rounded-lg p-2">
                    <div class="inline-block bg-red-500/20 rounded-lg px-3 py-2 mr-2 mb-2">
                      <span class="text-red-400 text-sm font-semibold">Sell at</span>
                      <i-heroicons-solid-chevron-down class="w-3 h-3 text-red-400 ml-1 inline" />
                    </div>
                    <div class="inline-block bg-white/5 rounded-lg px-3 py-2 mr-2 mb-2">
                      <span class="text-amber-100 text-sm font-medium">Price change</span>
                      <span class="text-blue-400 font-medium text-sm ml-2">≥ 500%</span>
                    </div>
                    <div class="inline-block px-1 py-2 mr-2 mb-2 italic text-xs text-neutral-400">OR</div>
                    <div class="inline-block bg-white/5 rounded-lg px-3 py-2 mr-2 mb-2">
                      <span class="text-amber-100 text-sm font-medium">Time held</span>
                      <span class="text-blue-400 font-medium text-sm ml-2">≥ 72h</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Filter blocks -->
            </div>
          </div>
        </div>
        <!-- /RIGHT -->
      </div>
      <!-- /grid -->

      <!-- BRIDGE: “Every signal…” now centered under both columns on desktop -->
      <div class="hidden lg:block  mb-2 max-w-[44rem] mx-auto">
        <button
          @click="toggleSignalSection"
          class="group w-full text-left focus:outline-none transition-all duration-200 bg-white/5 hover:bg-white/10 rounded-xl py-4 px-6"
        >
          <div class="flex items-center justify-between gap-2">
            <h3 class="w-full text-xl font-bold text-lime-500/85 text-balance">EVERY SIGNAL, EVERY SLICE, AT YOUR FINGERTIPS</h3>
            <i-heroicons-solid-chevron-down
              :class="[
                'w-6 h-6 text-lime-500 group-hover:text-lime-400 transition-all duration-300',
                isSignalSectionExpanded ? 'rotate-180' : 'rotate-0'
              ]"
            />
          </div>
        </button>

        <div
          :class="[
            'overflow-hidden transition-all duration-500 ease-in-out mt-3 will-change-transform',
            isSignalSectionExpanded ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          ]"
          :style="{ transform: 'translateZ(0)' }"
        >
          <div class="space-y-5 text-lg leading-relaxed pt-3 px-6">
            <p class="text-neutral-300 ">
              Stack curated slices from external sources—insider calls, ML models, KOL picks—then layer your own filters on top. Or build from scratch with 10,000+ metrics spanning social, market, holders, and safety.
            </p>
            <p class="text-neutral-300">
              Every entry and exit condition you can imagine — tokens, behavior, performance, risk — all addressable in plain English or precision filters you refine by hand.
            </p>
          </div>
        </div>
      </div>

      <!-- Subtle divider gradient before features -->
      <div class="pointer-events-none mt-16 mb-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <!-- FEATURES -->
      <div class="mt-14 lg:mt-28">
        <h3 class="lg:hidden text-2xl log:text-4xl text-center mb-6 font-bold text-white/80">Advanced Expression Features</h3>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
            <div class="text-center">
              <div class="flex items-center justify-center mx-auto mb-4">
                <i-heroicons-solid-light-bulb class="w-10 h-10 text-lime-600" />
              </div>
              <h4 class="mb-2 font-semibold text-lg leading-tight">Natural Language</h4>
              <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Describe strategies in plain English</p>
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
            <div class="text-center">
              <div class="flex items-center justify-center mx-auto mb-4">
                <i-heroicons-solid-funnel class="w-10 h-10 text-lime-600" />
              </div>
              <h4 class="mb-2 font-semibold text-lg leading-tight">Precision Filtering</h4>
              <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Hand-craft with 10,000+ metrics</p>
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
            <div class="text-center">
              <div class="flex items-center justify-center mx-auto mb-4">
                <i-heroicons-solid-square-2-stack class="w-10 h-10 text-lime-600" />
              </div>
              <h4 class="mb-2 font-semibold text-lg leading-tight">Stacked Sources</h4>
              <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Combine external signals with your filters</p>
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
            <div class="text-center">
              <div class="flex items-center justify-center mx-auto mb-4">
                <i-heroicons-solid-chart-bar class="w-10 h-10 text-lime-600" />
              </div>
              <h4 class="mb-2 font-semibold text-lg leading-tight">Behavioral Signals</h4>
              <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Track wallet patterns and holder dynamics</p>
            </div>
          </div>
        </div>
      </div>

      <!-- MOBILE: “More on expressing your strategy” (unchanged) -->
      <div class="lg:hidden max-w-2xl mx-auto mt-6">
        <button
          @click="toggleSignalSection"
          class="text-neutral-200 mx-auto w-full flex gap-2 items-center text-md font-semibold justify-center rounded-lg p-3 transition-all duration-300 bg-white/10 hover:bg-white/15"
        >
          More on expressing your strategy
          <i-heroicons-solid-chevron-down :class="['w-6 h-6 text-lime-500 group-hover:text-lime-400 transition-all duration-300',isSignalSectionExpanded ? 'rotate-180' : 'rotate-0']" />
        </button>

        <div
          :class="[
            'overflow-hidden transition-all duration-500 ease-in-out mt-4 will-change-transform',
            isSignalSectionExpanded ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          ]"
          :style="{ transform: 'translateZ(0)' }"
        >
          <div class="space-y-4 text-lg leading-relaxed pt-4">
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
  </section>
</div>

<div class="relative overflow-hidden">  
  <div class="section-linear-bg">&nbsp;</div>
  <section id="simulate" class=" text-white py-20 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-8xl mx-auto">
      
      
      <!-- Mobile-first text section -->
      <div class="lg:hidden mb-12 text-center lg:text-left pt-8 lg:pt-16">
        <h2 class="text-4xl lg:text-6xl mb-4 leading-tighter font-black tracking-tight gradient-text-yellow text-balance">
          KNOW IF IT WINS 
          <span class="gradient-text-yellow2">BEFORE YOU TRADE IT</span>
        </h2>
        <p class="text-lg text-neutral-300 mb-8 italic font-light leading-relaxed ">
          <span class="font-semibold text-white">Replay six months in six seconds.</span> See ROI, win rate, drawdown. No weeks of uncertainty. <br/><span class="font-semibold text-white">Just optimize → test → repeat.</span>
        </p>
        <p class="text-neutral-300 text-left">
          Every trade size tested. Every parameter validated. See your edge before deploying capital. Iterate in seconds, not weeks.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-28 items-start mb-24">
        <div class="relative ">
          <!-- Large radial glow surrounding the card -->
          <div class="absolute inset-0 -inset-x-32 -inset-y-32 bg-gradient-radial from-white/30  lg:from-white/20 lg:via-amber-500/10 to-transparent blur-3xl pointer-events-none"></div>
          
          <div class="relative bg-zinc-950/80 rounded-3xl p-8 border border-white/10 shadow-3xl">
            
            <div class="mb-6">
              <h3 class="text-lg mb-1 font-semibold ">Strategy: "Buy when smart money accumulates + sell at 5x or after 72h"</h3>
              <p class="text-neutral-400 text-xs">(Example results for demo)</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white/10 rounded-xl p-4 border border-neutral-700/30">
                <div class="text-3xl font-bold mb-1 bg-gradient-to-r from-lime-500 via-green-400 to-lime-500 bg-clip-text text-transparent">+247%</div>
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
                <div class="text-3xl font-bold mb-1">32</div>
                <div class="text-neutral-400 text-xs font-medium">Total Trades</div>
              </div>
            </div>
            
            <div class="h-48 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl mb-6 flex items-center justify-center border border-neutral-700/30">
              <div class="text-center">
                <div class="text-lime-500 mb-3">
                  <i-fa-solid-chart-area class="w-8 h-8" />
                </div>
                <span class="text-neutral-400 text-sm font-medium">Equity curve visualization</span>
              </div>
            </div>
            
            <div class="space-y-8">
              <div>
                <button 
                  @click="toggleExitBreakdown"
                  class="group w-full text-left focus:outline-none transition-all duration-200 hover:bg-white/10 bg-white/5 rounded-lg py-3 px-4 -my-3 cursor-pointer"
                >
                  <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-white/80 text-sm">Exit Breakdown</h4>
                    <div class="flex items-center justify-center">
                      <i-heroicons-solid-chevron-down 
                        :class="[
                          'w-4 h-4 text-lime-500 group-hover:text-lime-400 transition-all duration-300',
                          isExitBreakdownExpanded ? 'rotate-180' : 'rotate-0'
                        ]"
                      />
                    </div>
                  </div>
                </button>
                <div 
                  :class="[
                    'overflow-hidden transition-all duration-500 ease-in-out will-change-transform',
                    isExitBreakdownExpanded ? 'max-h-32 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                  ]"
                  :style="{ transform: 'translateZ(0)' }"
                >
                  <div class="space-y-2 text-sm pt-6">
                    <div class="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                      <span class="text-sm text-amber-100">TP 500%</span>
                      <span class=" text-blue-400">7 trades</span>
                    </div>
                    <div class="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                      <span class="text-sm text-amber-100">Time 72h</span>
                      <span class=" text-blue-400">25 trades</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <button 
                  @click="toggleTradeSizeImpact"
                  class="group w-full text-left focus:outline-none transition-all duration-200 hover:bg-white/10 bg-white/5 rounded-lg py-3 px-4 -my-3 cursor-pointer"
                >
                  <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-white/80 text-sm">Trade Size Impact</h4>
                    <div class="flex items-center justify-center">
                      <i-heroicons-solid-chevron-down 
                        :class="[
                          'w-4 h-4 text-lime-500 group-hover:text-lime-400 transition-all duration-300',
                          isTradeSizeImpactExpanded ? 'rotate-180' : 'rotate-0'
                        ]"
                      />
                    </div>
                  </div>
                </button>
                <div 
                  :class="[
                    'overflow-hidden transition-all duration-500 ease-in-out will-change-transform',
                    isTradeSizeImpactExpanded ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                  ]"
                  :style="{ transform: 'translateZ(0)' }"
                >
                  <div class="space-y-2 text-sm pt-6">
                    <div class="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                      <span class="text-sm text-amber-100">$100</span>
                      <span class="text-sm text-lime-400">+247% <span class=" text-blue-400">(0.3% slip)</span></span>
                    </div>
                    <div class="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                      <span class="text-sm text-amber-100">$1,000</span>
                      <span class="text-sm text-lime-400">+213% <span class=" text-blue-400">(2.1%)</span></span>
                    </div>
                    <div class="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                      <span class="text-sm text-amber-100">$10,000</span>
                      <span class="text-sm text-lime-400">+156% <span class=" text-blue-400">(8.7%)</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-6">
              <div class="flex justify-between text-xs text-neutral-400 mb-2">
                <span>6 months → 6 seconds animation</span>
                <span>Progress: 100%</span>
              </div>
              <div class="w-full bg-neutral-700 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-lime-500 to-lime-hover h-2 rounded-full w-full transition-all duration-300"></div>
              </div>
            </div>
            
            <button class="w-full bg-lime-500 hover:bg-lime-600 text-black py-4 rounded-xl mt-6 transition-colors duration-200 font-semibold text-lg">
              Run Simulation
            </button>
          </div>
        </div>
        
        <div class="lg:text-right space-y-12 mt-8 lg:mt-44">
          <!-- Desktop-only text section -->
          <div class="hidden lg:block">
            <h2 class="text-6xl mb-10 leading-tighter font-black tracking-tight gradient-text-yellow">
              KNOW IF IT WINS 
              <span class="gradient-text-yellow2">BEFORE YOU TRADE IT</span>
            </h2>
            <p class="text-xl text-neutral-300 mb-16 italic font-light leading-relaxed lg:text-balance text-balnce">
              <span class="font-semibold text-white">Replay six months in six seconds.</span> <br/>See ROI, win rate, drawdown. <br/>No weeks of uncertainty. <br/><span class="font-semibold text-white">Just optimize → test → repeat.</span>
            </p>
          </div>
          
          <div class="hidden lg:block">
            <div class="space-y-8 text-lg -mt-36 lg:mt-0">
              <p class="text-neutral-300 lg:text-balance leading-relaxed">
                Every trade size tested. Every parameter validated. See your edge before deploying capital. Iterate in seconds, not weeks.
              </p>
              
              <button 
                @click="toggleExitsSection"
                class="group w-full text-left focus:outline-none transition-all duration-200 bg-white/5 hover:bg-white/10 rounded-lg py-4 px-6 -my-4"
              >
                <div class="flex items-center justify-between gap-2">
                  <h3 class="w-full text-xl font-bold text-lime-500/80 text-balance transition-all lg:text-right">Flexible exits match your strategy</h3>
                  <div class="flex items-center justify-center">
                    <i-heroicons-solid-chevron-down 
                      :class="[
                        'w-6 h-6 text-lime-500 group-hover:text-lime-400 transition-all duration-300',
                        isExitsSectionExpanded ? 'rotate-180' : 'rotate-0'
                      ]"
                    />
                  </div>
                </div>
              </button>
              <div 
                :class="[
                  'overflow-hidden transition-all duration-500 ease-in-out mt-4 will-change-transform',
                  isExitsSectionExpanded ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                ]"
                :style="{ transform: 'translateZ(0)' }"
              >
                <div class="space-y-6 text-lg leading-relaxed pt-4">
                  <p class="text-neutral-300 lg:text-balance">
                    Entry-based (TP/SL/time), behavior-based (liquidity drops, sentiment shifts), or combined. Your exit conditions are part of your expressed idea—simulated with complete accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="-mt-36 lg:mt-0">
        <h3 class="text-2xl log:text-4xl text-center mb-6 font-bold lg:hidden text-white/80  lg:mt-0">Advanced Simulation Features</h3>
        <div class="grid md:grid-cols-3 gap-4 lg:gap-10">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 flex">
            <div class="flex items-center space-x-4">
              <div class="flex items-center justify-center flex-shrink-0">
                <i-heroicons-solid-clock class="w-10 h-10 text-lime-600" />
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
                <i-heroicons-solid-chart-bar-square class="w-10 h-10 text-lime-600" />
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
                <i-heroicons-solid-shield-check class="w-10 h-10 text-lime-600" />
              </div>
              <div class="flex-1">
                <h4 class="mb-1 font-semibold text-lg leading-tight">Risk Metrics</h4>
                <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Comprehensive drawdown and volatility analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Flexible exits section - moved below Advanced Simulation Features for mobile -->
      <div class="lg:hidden max-w-2xl mx-auto mt-4">
        <button 
          @click="toggleExitsSection"
          class="text-neutral-200 mx-auto w-full flex gap-2 items-center text-md font-semibold justify-center rounded-lg p-3 transition-all duration-300 bg-white/10 hover:bg-white/15"
        > Exits match your strategy
          <i-heroicons-solid-chevron-down :class="['w-6 h-6 text-lime-500 group-hover:text-lime-400 transition-all duration-300',isExitsSectionExpanded ? 'rotate-180' : 'rotate-0']" />
        </button>
        <div 
          :class="[
            'overflow-hidden transition-all duration-500 ease-in-out mt-4 will-change-transform',
            isExitsSectionExpanded ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          ]"
          :style="{ transform: 'translateZ(0)' }"
        >
          <div class="space-y-4 text-lg leading-relaxed pt-4">
            <p class="text-neutral-300 lg:text-balance">
              Entry-based (TP/SL/time), behavior-based (liquidity drops, sentiment shifts), or combined. Your exit conditions are part of your expressed idea—simulated with complete accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="relative">  
  <div class="section-linear-bg">&nbsp;</div>
  <section id="deploy" class=" text-white py-20 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-8xl mx-auto">
      
      <div class="text-center mb-12 lg:mb-20 pt-8 lg:pt-16">
        <h2 class="text-4xl lg:text-6xl mb-4 font-black tracking-tight text-balance">
          <span class="gradient-text-yellow">DEPLOY <span class="gradient-text-yellow2">ON YOUR TERMS</span></span>
        </h2>
        <p class="text-xl text-neutral-300 italic font-light leading-relaxed max-w-4xl mx-auto text-balance">
          Hands-free or hands-on — either way, you're in charge. <span class="font-semibold text-white">Full automation with complete transparency</span>, or human-in-the-loop for final calls.
        </p>
      </div>
      
      <!-- Horizontal Tabs -->
      <div class="max-w-5xl mx-auto">
        <!-- Tab Navigation -->
        <div class="flex space-x-1 mb-16 bg-white/10 rounded-2xl p-2 border border-white/5">
          <button 
            @click="activeTab = 'hands-off'"
            :class="[
              'flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-200',
              activeTab === 'hands-off' 
                ? 'bg-lime-500 text-black' 
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
                ? 'bg-lime-500 text-black' 
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
            <div class="text-center mb-12">
              <h3 class="text-2xl lg:text-4xl mb-4 font-bold text-lime-400/80">HANDS-OFF AUTO-TRADING</h3>
              <p class="text-xl text-neutral-300 italic">Set it. Forget it. Smile.</p>
            </div>
            
            <div class="grid md:grid-cols-2 max-w-lg md:max-w-4xl mx-auto gap-8">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5 w-full">
                <div class="flex items-center mb-4">
                  <i-heroicons-solid-cog-6-tooth class="w-5 h-5 text-lime-500 mr-3" />
                  <h4 class="font-semibold text-xl">Trade Configuration</h4>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="flex items-center text-sm text-neutral-400 mb-2 font-medium">
                      <i-heroicons-solid-currency-dollar class="w-4 h-4 mr-2" />
                      Trade Size
                    </label>
                    <div class="relative">
                      <input type="text" value="$1,000" disabled class="w-full bg-white/10 border border-neutral-700/30 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-neutral-200 cursor-not-allowed text-xs md:text-sm">
                    </div>
                  </div>
                  <div>
                    <label class="flex items-center text-sm text-neutral-400 mb-2 font-medium">
                      <i-heroicons-solid-chart-bar class="w-4 h-4 mr-2" />
                      Max Slippage
                    </label>
                    <div class="relative">
                      <input type="text" value="2%" disabled class="w-full bg-white/10 border border-neutral-700/30 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-neutral-200text-xs md:text-sm">
                    </div>
                  </div>
                  <div>
                    <label class="flex items-center text-sm text-neutral-200 mb-2 font-medium ">
                      <i-heroicons-solid-bolt class="w-4 h-4 mr-2" />
                      Gas Priority
                    </label>
                    <div class="relative">
                      <select disabled class="w-full bg-white/10 border border-neutral-700/30 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-neutral-200  appearance-none text-xs md:text-sm">
                        <option>Medium</option>
                        <option>High</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label class="flex items-center text-sm text-neutral-200 mb-2 font-medium">
                      <i-heroicons-solid-bell class="w-4 h-4 mr-2" />
                      Notifications
                    </label>
                    <div class="relative">
                      <select disabled class="w-full bg-white/10 border border-neutral-700/30 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-neutral-200 appearance-none text-xs md:text-sm">
                        <option>Telegram</option>
                        <option>Email</option>
                        <option>Both</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <button disabled class="w-full bg-neutral-600 text-neutral-400 py-3 rounded-xl mt-6 font-semibold text-lg flex items-center justify-center">
                  <i-heroicons-solid-play class="w-5 h-5 mr-2" />
                  Deploy Strategy
                </button>
              </div>
              
              <div class="flex flex-col items-center justify-center gap-8 ">
                <div class="space-y-3 text-xl py-6 text-neutral-300">
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-clock class="w-5 h-5 text-lime-500" />
                    <span>Trades executed 24/7</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-document-text class="w-5 h-5 text-lime-500" />
                    <span>Every entry logged</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-eye class="w-5 h-5 text-lime-500" />
                    <span>Every exit transparent</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-chart-bar class="w-5 h-5 text-lime-500" />
                    <span>Full P&L tracking</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-arrow-path class="w-5 h-5 text-lime-500" />
                    <span>Switch modes anytime</span>
                  </div>
                </div>
                
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 w-full">
                  <h5 class="mb-4 font-semibold text-lime-500">Security Features</h5>
                  <div class="space-y-3 text-sm">
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Non-custodial wallet integration</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Configurable position limits</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Emergency stop functionality</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Real-time monitoring dashboard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Human-in-the-Loop Tab -->
          <div v-if="activeTab === 'human-loop'" class="space-y-8">
            <div class="text-center ">
              <h3 class="text-2xl lg:text-4xl mb-4 font-bold text-lime-400/80">HUMAN-IN-THE-LOOP</h3>
              <p class="text-xl text-neutral-300 italic">Get notified. Approve trades. Stay in control.</p>
            </div>
            
            <div class="grid md:grid-cols-2 max-w-lg md:max-w-4xl mx-auto gap-8">
              <div class="space-y-8 w-full mx-auto lg:mx-0  ">
                <!-- Trade Alert Mockup -->
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                  <h4 class="mb-4 font-semibold text-lime-500">Trade Alert Example</h4>
                  <div class="bg-neutral-900/50 rounded-xl p-4 border border-neutral-700/30">
                    <div class="mb-3">
                      <h5 class="text-lg font-semibold text-white">New Match: $TOKEN</h5>
                    </div>
                    <div class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <span class="text-neutral-400">Breakout Score:</span>
                        <span class="text-lime-500 font-semibold">82</span>
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
                  <h5 class="mb-4 font-semibold text-lime-500">Notification Channels</h5>
                  <div class="space-y-3 text-sm">
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Email</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">In-browser push</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Telegram</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Webhooks</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="flex flex-col items-center justify-center gap-8 pt-6">
                <div class="space-y-3 text-xl mb-4 lg:mb-0 text-neutral-300 ">
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-bolt class="w-5 h-5 text-lime-500" />
                    <span>Trade alerts sent instantly</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-cursor-arrow-rays class="w-5 h-5 text-lime-500" />
                    <span>One-click approve/decline</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-information-circle class="w-5 h-5 text-lime-500" />
                    <span>Full trade context provided</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-clipboard-document-list class="w-5 h-5 text-lime-500" />
                    <span>Complete audit trail</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-arrow-path class="w-5 h-5 text-lime-500" />
                    <span>Switch modes anytime</span>
                  </div>
                </div>
                
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 w-full ">
                  <h5 class="mb-4 font-semibold text-lime-500">Control Features</h5>
                  <div class="space-y-3 text-sm">
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Real-time trade notifications</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Detailed trade reasoning</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Emergency stop override</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span class="text-neutral-300">Approval history tracking</span>
                    </div>
                  </div>
                </div>

                <!-- Usage Philosophy -->
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 w-full">
                  <h5 class="mb-4 font-semibold text-lime-500">Usage Philosophy</h5>
                  <p class="text-sm text-neutral-300 leading-relaxed">
                    Use as pure analytics, approve high-conviction setups only, or pipe signals to your own trading infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-20 g:mt-20 grid md:grid-cols-3 gap-4 lg:gap-10">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 flex">
          <div class="flex items-center space-x-4">
            <div class="flex items-center justify-center flex-shrink-0">
              <i-heroicons-solid-cpu-chip class="w-10 h-10 text-lime-600" />
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
              <i-heroicons-solid-user-circle class="w-10 h-10 text-lime-600" />
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
              <i-heroicons-solid-cog-6-tooth class="w-10 h-10 text-lime-600" />
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
  <section id="cta" class="text-white pt-20 lg:pt-32 pb-20 lg:pb-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto text-center">
      <div class="mb-12 lg:mb-16 pt-8 lg:pt-16">
        <h2 class="text-5xl lg:text-7xl md:text-8xl mb-12 leading-[0.9] font-black tracking-tight gradient-text-yellow text-balance">
          STOP GUESSING <span class="gradient-text-yellow2">START SLICING</span>
        </h2>
        <h3 class="text-2xl lg:text-4xl mb-8 font-bold text-balance gradient-text-lime">JOIN THE WAITLIST FOR EARLY ACCESS</h3>
      </div>
      
      <div class="max-w-lg mx-auto mb-12">
        <!-- Mobile: Separate input and button -->
        <div class="flex flex-col space-y-3 sm:hidden">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="w-full bg-white/15 backdrop-blur-sm px-4 py-4 text-white placeholder-white/80 focus:outline-none text-base rounded-2xl border-2 border-transparent focus:border-lime-500 transition-all duration-200"
          >
          <button class="w-full bg-lime-500 hover:bg-lime-600 text-black px-6 py-4 transition-all duration-200 font-semibold text-base rounded-2xl flex items-center justify-center gap-2 relative neon-glow">
            Claim Your Spot <i-fa-solid-arrow-right class="w-4 h-4 arrow" />
          </button>
        </div>
        
        <!-- Desktop: Separate input and button -->
        <div class="hidden sm:flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="flex-1 bg-white/15 backdrop-blur-sm px-6 py-5 text-white placeholder-white/80 focus:outline-none text-lg rounded-2xl border-2 border-neutral-700/30 focus:border-lime-500 transition-all duration-200"
          >
          <button class="bg-lime-500 hover:bg-lime-600 text-black px-10 py-5 transition-all duration-300 ease-out font-semibold text-lg rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 relative neon-glow">
            Claim Your Spot <i-fa-solid-arrow-right class="w-4 h-4 arrow" />
          </button>
        </div>
      </div>
      
      <div class="space-y-1 mb-8">
        <p class="text-neutral-400 font-medium">Be first to access the private beta.</p>
        <p class="text-neutral-500 text-sm">No spam. Unsubscribe anytime.</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-2 lg:gap-0 max-w-4xl mx-auto">
        <div class="flex items-center justify-center space-x-3 text-neutral-400">
          <i-heroicons-solid-user-group class="w-5 h-5 text-lime-600" />
          <span class="text-sm">First 500 users</span>
        </div>
        <div class="flex items-center justify-center space-x-3 text-neutral-400">
          <i-heroicons-solid-chat-bubble-bottom-center-text class="w-5 h-5 text-lime-600" />
          <span class="text-sm">Private feedback sessions</span>
        </div>
        <div class="flex items-center justify-center space-x-3 text-neutral-400">
          <i-heroicons-solid-star class="w-5 h-5 text-lime-600" />
          <span class="text-sm">Priority access</span>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="relative">  
  <footer id="footer" class="bg-black text-neutral-400 pt-16 pb-4 border-t border-white/5 px-4 sm:px-6 lg:px-8">
    <div class="max-w-8xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div class="mb-6 md:mb-0">
          <img src="/src/assets/logo.png" alt="Slicer" class="h-8 w-auto mb-3">
          <p class="text-sm text-neutral-500 text-balance"><span class="font-semibold text-white/80">Express. Simulate. Deploy. Repeat</span> — until profit feels inevitable.</p>
        </div>
        
        <!-- <div class="flex items-center space-x-6">
          <span class="text-sm hover:text-lime-500 transition-colors cursor-pointer">Terms</span>
          <span class="text-sm hover:text-lime-500 transition-colors cursor-pointer">Privacy</span>
        </div> -->
      </div>
    </div>
  </footer>
</div>
</div>

</template>

<script>

export default {
  name: "App",
  data() {
    return {
      activeTab: 'hands-off',
      isSignalSectionExpanded: false,
      isExitsSectionExpanded: false,
      isExitBreakdownExpanded: false,
      isTradeSizeImpactExpanded: false,
      isHeaderVisible: false
    }
  },
  methods: {
    toggleSignalSection() {
      this.isSignalSectionExpanded = !this.isSignalSectionExpanded
    },
    toggleExitsSection() {
      this.isExitsSectionExpanded = !this.isExitsSectionExpanded
    },
    toggleExitBreakdown() {
      this.isExitBreakdownExpanded = !this.isExitBreakdownExpanded
    },
    toggleTradeSizeImpact() {
      this.isTradeSizeImpactExpanded = !this.isTradeSizeImpactExpanded
    },
    scrollToSection(sectionId, offset = 0) {
      const element = document.getElementById(sectionId)
      if (!element) {
        console.warn(`Element with id "${sectionId}" not found`)
        return
      }
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    },
    checkJoinWaitlistVisibility() {
      const ctaContainer = document.getElementById('cta-container')
      
      if (!ctaContainer) {
        this.isHeaderVisible = true
        return
      }
      
      const rect = ctaContainer.getBoundingClientRect()
      
      // More lenient visibility check for mobile
      const isAnyWaitlistButtonVisible = rect.top < window.innerHeight && rect.bottom > 0
      
      // Hide header if waitlist button is visible
      this.isHeaderVisible = !isAnyWaitlistButtonVisible
    }
  },
  mounted() {
    // Throttled scroll handler for better performance
    let scrollTimeout
    const throttledScrollHandler = () => {
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        this.checkJoinWaitlistVisibility()
        scrollTimeout = null
      }, 16) // ~60fps
    }
    
    // Add scroll listeners for both desktop and mobile
    window.addEventListener('scroll', throttledScrollHandler, { passive: true })
    window.addEventListener('touchmove', throttledScrollHandler, { passive: true })
    
    // Check initial state
    this.checkJoinWaitlistVisibility()
    
    // Store handler for cleanup
    this.scrollHandler = throttledScrollHandler
  },
  beforeUnmount() {
    // Clean up scroll listeners
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler)
      window.removeEventListener('touchmove', this.scrollHandler)
    }
  }
}
</script>

<style>
.section-linear-bg{
  @apply bg-gradient-to-b from-zinc-800 to-transparent absolute h-[300px] w-full -z-10;
}


:root {
  --bg: #0b0b0b;
  --ink: #f5f5f5;
  --muted: #bdbdbd;
  --headline: #ffdf57;
  --headline-2: #ffc93a;
  --lime: #b7ff36;
  --lime-weak: rgba(183,255,54,.18);
  
  --gradient-yellow: linear-gradient(to right, theme('colors.yellow.400'), theme('colors.amber.300'), theme('colors.yellow.500'), theme('colors.amber.400'));
  --gradient-yellow2: linear-gradient(to right, theme('colors.amber.200'), theme('colors.yellow.300'), theme('colors.amber.300'));
  --gradient-lime: linear-gradient(to right, theme('colors.lime.600'), theme('colors.emerald.400'), theme('colors.lime.500'), theme('colors.emerald.600'));
}

/* Apply gradients to text */
.gradient-text-yellow{
  background: var(--gradient-yellow);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.gradient-text-yellow2 {
  background: var(--gradient-yellow2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.gradient-text-lime {
  background: var(--gradient-lime);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Hero cinematic depth */
.hero-glow::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(48rem 20rem at 50% 18%, rgba(255,207,64,.18), transparent 65%),
    radial-gradient(52rem 26rem at 50% 42%, rgba(183,255,54,.10), transparent 70%);
  filter: blur(2px);
}

/* CTA Ghost Button */
.cta-ghost {
  border: 2px solid var(--lime);
  color: var(--ink);
  padding: 0.9rem 1.2rem;
  border-radius: 14px;
  box-shadow: 0 0 0 0 var(--lime-weak);
  transition: transform .22s ease, box-shadow .22s ease, background-color .22s ease;
}

.cta-ghost:hover {
  transform: translateY(-1px);
  background: rgba(183,255,54,.08);
  box-shadow: 0 0 28px 2px var(--lime-weak);
}

/* Arrow animation for all CTAs */
.arrow {
  display: inline-block !important;
  transform: translateX(0) !important;
  transition: transform .22s ease !important;
}

.cta-ghost:hover .arrow,
button:hover .arrow {
  transform: translateX(4px) !important;
}

/* Step card base styles */
.step {
  position: relative;
  z-index: 1;
}

/* Animation sequence */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px) scale(1.01);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.hero h1 {
  animation: fadeInUp 0.8s ease 0.1s both;
}

.hero .sub {
  animation: fadeInUp 0.8s ease 0.3s both;
}

.hero .cta-container {
  animation: fadeInUp 0.8s ease 0.5s both;
}

.hero .hero-link {
  animation: fadeInUp 0.8s ease 0.7s both;
}

.hero .hero-text-line {
  animation: fadeInUp 0.8s ease 0.6s both;
}

.hero .hero-text-line:nth-child(2) {
  animation: fadeInUp 0.8s ease 0.65s both;
}

.hero .hero-scroll {
  animation: fadeInUp 0.8s ease 0.8s both;
}

.hero .hero-whisper {
  animation: fadeInUp 0.8s ease 0.9s both;
}

.hero-steps .step:nth-child(1) {
  animation: fadeInUp 0.6s ease 0.7s both;
}

.hero-steps .step:nth-child(2) {
  animation: fadeInUp 0.6s ease 0.82s both;
}

.hero-steps .step:nth-child(3) {
  animation: fadeInUp 0.6s ease 0.94s both;
}


@keyframes nudge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}


/* Neon glow effect for primary CTAs */
.neon-glow {
  position: relative;
}

.neon-glow::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, 
    rgba(183, 255, 54, 0.6), 
    rgba(34, 197, 94, 0.4), 
    rgba(183, 255, 54, 0.6), 
    rgba(16, 185, 129, 0.4)
  );
  border-radius: 18px;
  z-index: -1;
  filter: blur(8px);
  opacity: 0.7;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.neon-glow:hover::before {
  opacity: 1;
  filter: blur(12px);
}

.neon-glow:focus::before {
  opacity: 1;
  filter: blur(12px);
}

/* Accessibility: respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition: none !important;
  }
  
  .neon-glow::before {
    filter: blur(4px) !important;
    opacity: 0.5 !important;
  }
}
/* configurable tokens (optional) */
:root{
  --df-color: rgba(180,255,120,1);   /* core lime */
  --df-soft : rgba(180,255,120,.6);  /* shoulder */
  --df-dur  : 1.6s;                  /* duration */
}

/* container: fixed size, clips the moving pulse */
.data-flow-line{
  position: relative;
  width: 2px;
  height: 2.5rem;           /* tweak as needed */
  border-radius: 9999px;
  overflow: hidden;         /* ensures perfect symmetry at ends */
  background: transparent;  /* no bg animation here */
}

/* the moving pulse */
.data-flow-line::before{
  content: "";
  position: absolute;
  left: 0; right: 0;
  width: 100%;
  /* make the pulse a bit taller than the container
     so it can fade in/out inside the clip */
  height: 120%;
  top: -10%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(180,255,120,0) 10%,
    var(--df-soft) 40%,
    var(--df-color) 50%,
    var(--df-soft) 60%,
    rgba(180,255,120,0) 90%,
    transparent 100%
  );
  animation: dataFlowOsc var(--df-dur) ease-in-out infinite;
  will-change: transform;
}

/* top -> bottom -> top with a tiny dwell at each end */
@keyframes dataFlowOsc{
  0%   { transform: translateY(-10%); opacity: 0; }
  10%  { opacity: .5; }
  45%  { transform: translateY(10%);  opacity: 1; }  /* just inside bottom */
  55%  { transform: translateY(10%);  opacity: 1; }  /* micro-hold */
  90%  { opacity: .5; }
}

</style>
