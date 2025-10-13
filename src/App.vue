<template>
<div class="relative overflow-x-hidden">
  <!-- Top-left ghost logo -->
  <!-- <div class="absolute top-8 left-8 z-40">
    <img src="/src/assets/logo bw.png" alt="Slicer" class="h-8 w-auto opacity-30">
  </div> -->
  
  <!-- SVG gradient definition for icons -->
  <svg width="0" height="0" style="position: absolute;">
    <defs>
      <linearGradient id="icon-gradient-violet-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#9A5BFF;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#6366F1;stop-opacity:1" />
      </linearGradient>
    </defs>
  </svg>
  
  <!-- gradients: purple linear + black radial -->
  <div class="absolute inset-0 h-[80vh] pointer-events-none -z-10 overflow-hidden" style="background: var(--gradient-violet);"></div>
  <header id="header" :class="['bg-violet-950/40 backdrop-blur-xl text-white py-6 px-8 border-b border-white/5 fixed w-full z-50 transition-all duration-300', { 'opacity-0 pointer-events-none -translate-y-full': !isHeaderVisible, 'opacity-100 translate-y-0': isHeaderVisible }]">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <img src="/src/assets/logo bw.png" alt="Slicer" class="h-8 w-auto">
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

  <main id="hero" class="hero min-h-screen text-white pt-28 md:pt-44 lg:pt-52 xl:pt-60 pb-20 lg:pb-32 xl:pb-32 px-4 sm:px-6 lg:px-8 xl:px-8 flex items-center relative">

    <div class="max-w-6xl mx-auto text-center relative z-10">

      <div class="mb-16 relative  ">
        <h1 class="text-[3.3rem] leading-[1] text-6xl md:text-7xl lg:text-8xl mb-4 font-black tracking-tight leading-tighter hero-glow">
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
            class="
              w-full  px-4 py-4 rounded-2xl 
              bg-white/5 border border-white/10 
              backdrop-blur-sm
              text-white 
              focus:bg-white/10 focus:border-violet-500
              focus:outline-none focus:ring-2 focus:ring-violet-500
              transition duration-200
              placeholder-white/80"
          >
          <button class="w-full bg-violet-500 hover:bg-violet-400 text-black px-6 py-4 transition-all duration-200 font-semibold text-base rounded-2xl flex items-center justify-center gap-2 relative neon-glow focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
            Join Waitlist <i-fa-solid-arrow-right class="w-4 h-4 arrow" />
          </button>
        </div>
        
        <!-- Desktop: Separate input and button -->
        <div class="hidden sm:flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="flex-1 px-6 py-5 rounded-2xl 
              bg-white/5 border border-white/10 
              backdrop-blur-sm
              text-white 
              focus:bg-white/10 focus:border-violet-500 
              focus:outline-none focus:ring-2 focus:ring-violet-500
              transition duration-200
              placeholder-white/80"
          >
          <button class="bg-violet-500 hover:bg-violet-400 text-black px-10 py-5 transition-all duration-300 ease-out font-semibold text-lg rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 relative neon-glow focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
            Join Waitlist <i-fa-solid-arrow-right class="w-4 h-4 arrow" />
          </button>
        </div>
      </div>

      <div class="text-center mt-4 text-neutral-300 text-balance text-xs md:text-sm hero-text">
        <p class="hero-text-line">Get early access when Slicer 2.0 opens private beta.</p>
        <p class="hero-text-line"> No spam. Unsubscribe anytime.</p>
         <div class="mt-4 hidden sm:block hero-link">
           <button @click="scrollToSection('simulate', 100)" class="hover:underline text-violet-300/80 transition-all duration-200 bg-transparent border-2 border-transparent outline-none focus:border-violet-500 cursor-pointer rounded-lg px-3 py-2">Watch a 6-second sim <span class="arrow">→</span></button>
         </div>
      </div>
      
       <!-- Scroll cue arrow -->
       <div class="my-20 flex justify-center flex-col items-center gap-8 hero-scroll">
        <button 
            @click="scrollToSection('express', 100)"
            aria-label="Scroll to next section"
            class="group inline-flex p-4 rounded-full 
                  text-neutral-200/80 outline-none focus:ring-4 focus:ring-violet-500 focus:ring-offset-4 focus:ring-offset-neutral-900 transition-all duration-200
                  border-2 md:border-4 border-neutral-200/20
                  bg-transparent
                  hover:bg-neutral-200/10
                  motion-safe:animate-[nudge_4s_ease-in-out_infinite] md:animate-[nudge_3.5s_ease-in-out_infinite] lg:animate-[nudge_3s_ease-in-out_infinite]
                  cursor-pointer"
        >
          <i-heroicons-solid-arrow-down class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
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
              <div class="mb-2">
                <div class="gradient-icon-wrapper">
                  <i-fa-solid-brain class="w-8 h-8" />
                </div>
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
              <div class="mb-2">
                <div class="gradient-icon-wrapper">
                  <i-fa-solid-chart-line class="w-8 h-8" />
                </div>
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
              <div class="mb-2">
                <div class="gradient-icon-wrapper">
                  <i-fa-solid-rocket class="w-8 h-8" />
                </div>
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
  <div class="absolute h-[300px] inset-x-0 -z-10 overflow-hidden" style="background: var(--gradient-section-linear);">&nbsp;</div>
  <section id="express" class="text-white py-20 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">

      <!-- 2-col narrative: Copy (L) → Example (R) -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-28 items-start mb-6 lg:mb-16">
        <!-- LEFT: Headline + paragraph -->
        <div class="space-y-10">
          <div class="text-center lg:text-left pt-6 lg:pt-16">
            <h2 class="text-[2.6rem] leading-[1] md:text-6xl lg:text-6xl mb-6 leading-tighter font-black tracking-[-0.015em] gradient-text-yellow text-balance">
              BUILD VISUALLY OR
              <span class="gradient-text-yellow2">SPEAK YOUR STRATEGY</span>
              INTO EXISTENCE
            </h2>
            <p class="text-xl text-neutral-300 mb-0  font-light leading-relaxed text-balance  lg:ml-6">
              <span class="text-white font-semibold italic">10,000+ on-chain and off-chain filters.</span> Pure creative freedom.
              <span class="text-white font-semibold">Compose by hand, describe in English, or mix both.</span> Total control either way.
            </p>
          </div>
        </div>

        <!-- RIGHT: Speech → Filter demo (scaled/uncrowded) -->
        <div class="mt-4 lg:mt-6 xl:pl-8 xl:-mr-8">
          <div class="mb-6">
            <div class="flex space-x-3 justify-center">
              <div class="w-3 h-3 bg-violet-500 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
              <div class="w-3 h-3 bg-neutral-600 rounded-full"></div>
            </div>
          </div>

          <div class="lg:mb-6">
            <div class="flex flex-col items-center ">
              <!-- Speech bubble -->
              <div class="relative inline-block ">
                <div class="bg-white rounded-3xl px-8 py-6 shadow-white/10 shadow-xl max-w-lg lg:max-w-xl relative neon-glow">
                <div class="absolute inset-0 -inset-x-16 -inset-y-16 blur-3xl pointer-events-none -z-10 overflow-hidden" style="background: var(--gradient-radial-feature-backdrop);"></div>
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
               
              <div class="relative rounded-2xl border border-white/10 w-full max-w-2xl shadow-2xl">
                <div class="absolute inset-0 -inset-x-32 -inset-y-32 blur-3xl pointer-events-none -z-10 overflow-hidden" style="background: var(--gradient-radial-feature-backdrop);"></div>
                <div class="w-full h-full bg-zinc-500/10 rounded-2xl">
                  <div class="p-2">
                    <!-- Buy -->
                    <div class="inline-block rounded-lg p-2">
                      <div class="inline-block bg-violet-500/20 rounded-lg px-3 py-2 mr-2 mb-2">
                        <span class="text-violet-400 text-sm font-bold">Buy at</span>
                        <i-heroicons-solid-chevron-down class="w-3 h-3 text-violet-400/80 ml-1 inline" />
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
                        <span class="text-red-400 text-sm font-bold">Sell at</span>
                        <i-heroicons-solid-chevron-down class="w-3 h-3 text-red-400 ml-1 inline" />
                      </div>
                      <div class="inline-block bg-white/5 rounded-lg px-3 py-2 mr-2 mb-2">
                        <span class="text-amber-100 text-sm font-medium">Price change</span>
                        <span class="text-blue-400 font-medium text-sm ml-2">≥ 500%</span>
                      </div>
                      <div class="inline-block px-1 py-2 mr-2 mb-2 italic text-xs text-neutral-400">OR</div>
                      <div class="inline-block bg-white/5 rounded-lg px-3 py-2 mr-2 mb-2">
                        <span class="text-amber-100 text-sm font-medium">Time held</span>
                        <span class="text-blue-400 font-medium text-sm ml-2">&gt; 72h</span>
                      </div>
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

      <!-- BRIDGE: “Every signal…” now centered under both columns on desktop and mobile alike -->
      <div class="flex mt-32 lg:mt-0 mb-2   flex-col items-center ">
        <button
          @click="toggleSignalSection"
          class="max-w-2xl mx-auto group w-full text-left focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200 bg-white/10 hover:bg-white/15 rounded-xl py-4 px-6 flex  items-center justify-center gap-2"
        >
            <h3 class="text-xl font-bold text-violet-500/80/85 text-balance">Every signal, every slice, at your fingertips</h3>
            <i-heroicons-solid-chevron-down
              :class="[
                'w-6 h-6 text-violet-500/80 group-hover:text-violet-400/80 transition-all duration-300',
                isSignalSectionExpanded ? 'rotate-180' : 'rotate-0'
              ]"
            />
        </button>

        <div
          :class="[
            'overflow-hidden transition-all duration-500 ease-in-out mt-3 will-change-transform',
            isSignalSectionExpanded ? 'max-h-[800px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          ]"
          :style="{ transform: 'translateZ(0)' }"
        >
          <div class="max-w-5xl mx-auto space-y-8 text-lg leading-relaxed pt-8 px-6">
            <p class="text-neutral-300 ">
              Stack curated slices from external sources—insider calls, ML models, KOL picks—then layer your own filters on top. Or build from scratch with 10,000+ metrics spanning social, market, holders, and safety.
            </p>
            <p class="text-neutral-300">
              Every entry and exit condition you can imagine — tokens, behavior, performance, risk — all addressable in plain English or precision filters you refine by hand.
            </p>
            
            <!-- Features Grid -->
            <div class="grid grid-cols-2 gap-4 lg:gap-8 mt-8">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
                <div class="text-center">
                  <div class="flex items-center justify-center mx-auto mb-4">
                    <div class="gradient-icon-wrapper">
                      <i-heroicons-solid-light-bulb class="w-10 h-10" />
                    </div>
                  </div>
                  <h4 class="mb-2 font-semibold text-lg leading-tight">Natural Language</h4>
                  <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Describe strategies in plain English</p>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
                <div class="text-center">
                  <div class="flex items-center justify-center mx-auto mb-4">
                    <div class="gradient-icon-wrapper">
                      <i-heroicons-solid-funnel class="w-10 h-10" />
                    </div>
                  </div>
                  <h4 class="mb-2 font-semibold text-lg leading-tight">Precision Filtering</h4>
                  <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Hand-craft with 10,000+ metrics</p>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
                <div class="text-center">
                  <div class="flex items-center justify-center mx-auto mb-4">
                    <div class="gradient-icon-wrapper">
                      <i-heroicons-solid-square-2-stack class="w-10 h-10" />
                    </div>
                  </div>
                  <h4 class="mb-2 font-semibold text-lg leading-tight">Stacked Sources</h4>
                  <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Combine external signals with your filters</p>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 group">
                <div class="text-center">
                  <div class="flex items-center justify-center mx-auto mb-4">
                    <div class="gradient-icon-wrapper">
                      <i-heroicons-solid-chart-bar class="w-10 h-10" />
                    </div>
                  </div>
                  <h4 class="mb-2 font-semibold text-lg leading-tight">Behavioral Signals</h4>
                  <p class="text-neutral-400 text-sm leading-tight lg:text-balance">Track wallet patterns and holder dynamics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</div>

<div class="relative overflow-hidden">  
  <div class="absolute h-[300px] inset-x-0 -z-10 overflow-hidden" style="background: var(--gradient-section-linear);">&nbsp;</div>
  <section id="simulate" class=" text-white py-20 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      
      
      <!-- Mobile-first text section -->
      <div class="lg:hidden mb-12 text-center pt-8  max-w-4xl  mx-auto">
        <h2 class="text-[2.6rem] leading-[1] md:text-6xl mb-4 leading-tighter font-black tracking-tight gradient-text-yellow text-balance">
          KNOW IF IT
          <span class="gradient-text-yellow2">WINS BEFORE YOU TRADE IT</span>
        </h2>
        <p class="text-lg text-neutral-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto text-balance">
          <span class="font-semibold text-white italic">Replay six months in six seconds.</span>
            See ROI, win rate, drawdown. No weeks of uncertainty. <span class="font-semibold text-white">Just optimize → test → repeat.</span>
        </p>
        <p class="text-neutral-300 text-balance max-w-2xl mx-auto">
          Every trade size tested. Every parameter validated. See your edge before deploying capital. Iterate in seconds, not weeks.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 lg:gap-28 items-start lg:mb-24 mb-12">
        <div class="relative ">
          <!-- Large radial glow surrounding the card -->
          <div class="absolute inset-0 -inset-x-32 -inset-y-32 blur-3xl pointer-events-none overflow-hidden" style="background: var(--gradient-radial-feature-backdrop);"></div>
          
          <div class="relative bg-white/[.03] rounded-3xl p-8 ring-1 ring-white/10 shadow-2xl shadow-violet-500/10 max-w-2xl lg:max-w-none mx-auto">
            
            <div class="mb-6">
              <h3 class="text-lg mb-1 font-semibold ">Strategy: "Buy when smart money accumulates + sell at 5x or after 72h"</h3>
              <p class="text-neutral-400 text-xs">(Example results for demo)</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white/5 hover:bg-white/[.06] transition rounded-lg p-4 border border-white/5">
                <div class="text-3xl font-semibold mb-1 text-emerald-400">+247%</div>
                <div class="text-white/40 text-[11px] tracking-wide">ROI</div>
              </div>
              <div class="bg-white/5 hover:bg-white/[.06] transition rounded-lg p-4 border border-white/5">
                <div class="text-3xl text-white font-semibold mb-1">68%</div>
                <div class="text-white/40 text-[11px] tracking-wide">Win Rate</div>
              </div>
              <div class="bg-white/5 hover:bg-white/[.06] transition rounded-lg p-4 border border-white/5">
                <div class="text-3xl font-semibold mb-1 text-rose-400">-18%</div>
                <div class="text-white/40 text-[11px] tracking-wide">Max DD</div>
              </div>
              <div class="bg-white/5 hover:bg-white/[.06] transition rounded-lg p-4 border border-white/5">
                <div class="text-3xl text-white font-semibold mb-1">2.4</div>
                <div class="text-white/40 text-[11px] tracking-wide">Sharpe</div>
              </div>
              <div class="bg-white/5 hover:bg-white/[.06] transition rounded-lg p-4 border border-white/5">
                <div class="text-3xl text-white font-semibold mb-1">4.2d</div>
                <div class="text-white/40 text-[11px] tracking-wide">Avg Hold</div>
              </div>
              <div class="bg-white/5 hover:bg-white/[.06] transition rounded-lg p-4 border border-white/5">
                <div class="text-3xl text-white font-semibold mb-1">32</div>
                <div class="text-white/40 text-[11px] tracking-wide">Total Trades</div>
              </div>
            </div>
            
            <div class="h-48 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-xl mb-6 flex items-center justify-center border border-white/5">
              <div class="text-center">
                <div class="text-violet-500/80 mb-3">
                  <i-fa-solid-chart-area class="w-8 h-8" />
                </div>
                <span class="text-neutral-400 text-sm font-medium">Equity curve visualization</span>
              </div>
            </div>
            
            <div class="space-y-8">
              <div>
                <button 
                  @click="toggleExitBreakdown"
                  class="group w-full text-left focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200 hover:bg-white/10 bg-white/5 rounded-lg py-3 px-4 -my-3 cursor-pointer"
                >
                  <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-white/80 text-sm">Exit Breakdown</h4>
                    <div class="flex items-center justify-center">
                      <i-heroicons-solid-chevron-down 
                        :class="[
                          'w-4 h-4 text-violet-500/80 group-hover:text-violet-400/80 transition-all duration-300',
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
                  class="group w-full text-left focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200 hover:bg-white/10 bg-white/5 rounded-lg py-3 px-4 -my-3 cursor-pointer"
                >
                  <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-white/80 text-sm">Trade Size Impact</h4>
                    <div class="flex items-center justify-center">
                      <i-heroicons-solid-chevron-down 
                        :class="[
                          'w-4 h-4 text-violet-500/80 group-hover:text-violet-400/80 transition-all duration-300',
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
                      <span class="text-sm text-violet-400/80">+247% <span class=" text-blue-400">(0.3% slip)</span></span>
                    </div>
                    <div class="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                      <span class="text-sm text-amber-100">$1,000</span>
                      <span class="text-sm text-violet-400/80">+213% <span class=" text-blue-400">(2.1%)</span></span>
                    </div>
                    <div class="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                      <span class="text-sm text-amber-100">$10,000</span>
                      <span class="text-sm text-violet-400/80">+156% <span class=" text-blue-400">(8.7%)</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-6">
              <div class="flex justify-between text-[11px] text-white/55 mb-1">
                <span>6 months → 6 seconds</span><span>Progress: 100%</span>
              </div>
              <div class="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full w-full bg-violet-400 origin-left animate-[progress_6s_linear_1]"></div>
              </div>
            </div>
            
            <button class="mt-3 w-full h-11 rounded-xl bg-violet-500 hover:bg-violet-400 active:bg-violet-600
                           text-black font-semibold relative neon-glow focus:outline-none
                           focus:ring-2 focus:ring-violet-500/40 focus:ring-offset-2 focus:ring-offset-neutral-950">
              Run Simulation
            </button>
          </div>
        </div>
        
        <div class="lg:text-right space-y-12 mt-8 lg:mt-32">
          <!-- Desktop-only text section -->
          <div class="hidden lg:block">
            <h2 class="text-6xl mb-10 leading-tighter font-black tracking-tight">
              <span class=" gradient-text-yellow">KNOW IF IT  </span>
              <span class="text-yellow-200">WINS</span>
              <span class="gradient-text-yellow2"> BEFORE YOU TRADE IT</span>
            </h2>
            <p class="text-xl text-neutral-300 mb-8 font-light leading-relaxed lg:text-balance text-balance">
              <span class="font-semibold text-white italic">Replay six months in six seconds.</span> See ROI, win rate, drawdown. No weeks of uncertainty. 
            </p>
            <p class="text-xl font-semibold text-white  mb-8 italic leading-relaxed max-w-2xl mx-auto text-balance">Just optimize → test → repeat.</p>
          </div>
          <p class="text-neutral-300 lg:text-balance leading-relaxed">
            Every trade size tested. Every parameter validated. See your edge before deploying capital. Iterate in seconds, not weeks.
          </p>
        </div>
      </div>
      
      <div class="flex mb-2  flex-col items-center">
        <button 
          @click="toggleExitsSection"
          class="mx-auto  max-w-2xl group w-full text-left focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200 bg-white/10 hover:bg-white/15 rounded-xl py-4 px-6 flex items-center justify-center gap-2"
        >
          <div class="flex items-center justify-between gap-2">
            <h3 class="w-full text-xl font-bold text-violet-500/80/80 text-balance transition-all lg:text-right">Simulate & Validate Your Edge</h3>
            <div class="flex items-center justify-center">
              <i-heroicons-solid-chevron-down 
                :class="[
                  'w-6 h-6 text-violet-500/80 group-hover:text-violet-400/80 transition-all duration-300',
                  isExitsSectionExpanded ? 'rotate-180' : 'rotate-0'
                ]"
              />
            </div>
          </div>
        </button>
        <div 
          :class="[
            'overflow-hidden transition-all duration-500 ease-in-out mt-4 will-change-transform',
            isExitsSectionExpanded ? 'max-h-[600px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          ]"
          :style="{ transform: 'translateZ(0)' }"
        >
          <div class="max-w-5xl mx-auto space-y-8 text-lg leading-relaxed pt-8 px-6">

            <p class="text-center text-base md:text-lg mt-2 italic font-semibold text-white">
              Every outcome quantified. No guessing. no surprises.
            </p>

            <p class="text-neutral-300">
              Entry-based (TP/SL/time), behavior-based (liquidity drops, sentiment shifts), or combined. Your exit conditions are part of your expressed idea—simulated with complete accuracy.
            </p>
            
            <!-- Simulate Features Grid -->
            <div class="grid md:grid-cols-3 gap-4 lg:gap-10 mt-8">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5  transition-all duration-300 flex">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center justify-center flex-shrink-0">
                    <div class="gradient-icon-wrapper">
                      <i-heroicons-solid-clock class="w-10 h-10" />
                    </div>
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
                    <div class="gradient-icon-wrapper">
                      <i-heroicons-solid-chart-bar-square class="w-10 h-10" />
                    </div>
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
                    <div class="gradient-icon-wrapper">
                      <i-heroicons-solid-shield-check class="w-10 h-10" />
                    </div>
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
      </div>



    </div>
  </section>
</div>
<div class="relative">  
  <div class="absolute h-[300px] inset-x-0 -z-10 overflow-hidden" style="background: var(--gradient-section-linear);">&nbsp;</div>
  <section id="deploy" class=" text-white py-20 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center mb-12 lg:mb-20 pt-8 lg:pt-16">
        <h2 class="text-[2.6rem] leading-[1] md:text-6xl mb-4 font-black tracking-tight text-balance">
          <span class="gradient-text-yellow">DEPLOY <span class="gradient-text-yellow2">ON YOUR TERMS</span></span>
        </h2>
        <p class="text-xl text-neutral-300 font-light leading-relaxed max-w-4xl mx-auto text-balance">
          <span class='italic font-semibold text-white'>Hands-free or hands-on</span> — either way, you're in charge. <span class="font-semibold text-white">Full automation with complete transparency</span>, or human-in-the-loop for final calls.
        </p>
      </div>
      
      <!-- Segmented Control Tabs -->
      <div class="max-w-4xl mx-auto">
        <!-- Tablist -->
        <div
          role="tablist" 
          aria-label="Deploy modes"
          class="relative mx-auto mt-4 w-full max-w-3xl rounded-2xl bg-white/5 p-1 ring-1 ring-white/10 mb-16 focus-within:ring-2 focus-within:ring-violet-500/50"
        >
          <!-- sliding indicator -->
          <span 
            id="mode-indicator"
            class="pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)]
                   rounded-xl bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,.08)_inset]
                   transition-[transform] duration-300 ease-[cubic-bezier(.2,.8,.2,1)]"
            :style="{ transform: activeTab === 'hands-off' ? 'translateX(0%)' : 'translateX(100%)' }"
          ></span>

          <div class="grid grid-cols-2 gap-2 relative">
            <button
              id="tab-auto" 
              role="tab" 
              :aria-selected="activeTab === 'hands-off'" 
              aria-controls="panel-auto"
              @click="activeTab = 'hands-off'"
              @keydown="handleKeydown"
              class="h-11 rounded-xl text-sm font-medium focus:outline-none"
              :class="activeTab === 'hands-off' ? 'text-white/90' : 'text-white/70 hover:text-white/90'"
            >
              Hands-Off Auto-Trading
            </button>
            <button
              id="tab-hil" 
              role="tab" 
              :aria-selected="activeTab === 'human-loop'" 
              aria-controls="panel-hil"
              @click="activeTab = 'human-loop'"
              @keydown="handleKeydown"
              class="h-11 rounded-xl text-sm font-medium focus:outline-none"
              :class="activeTab === 'human-loop' ? 'text-white/90' : 'text-white/70 hover:text-white/90'"
            >
              Human-in-the-Loop
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="min-h-[600px]">
          <!-- Hands-Off Auto-Trading Tab -->
          <div 
            id="panel-auto"
            role="tabpanel"
            aria-labelledby="tab-auto"
            v-show="activeTab === 'hands-off'" 
            class="space-y-8 transition-opacity duration-200"
            :class="activeTab === 'hands-off' ? 'opacity-100' : 'opacity-0 pointer-events-none'"
          >
            <div class="text-center mb-12">
              <h3 class="text-2xl lg:text-4xl mb-4 font-bold text-violet-400/80/80">HANDS-OFF AUTO-TRADING</h3>
              <p class="text-xl text-neutral-300 italic text-balance">Set it. Forget it. Smile.</p>
              <p class="text-white/70 text-sm mt-2 text-balance">Fully automated execution with complete transparency and control.</p>
            </div>
            
            <div class="grid md:grid-cols-2 max-w-lg md:max-w-4xl mx-auto gap-8">
              <div class="relative">
                <div class="absolute inset-0 -inset-x-32 -inset-y-32 blur-3xl pointer-events-none -z-10 overflow-hidden" style="background: var(--gradient-radial-feature-backdrop);"></div>
                <div class="rounded-3xl bg-white/[.03] ring-1 ring-white/10 shadow-2xl shadow-violet-500/10 p-5">
                  <h3 class="mb-4 text-white/85 font-semibold flex items-center gap-2">
                    <i class="i-lucide-settings-2 h-4 w-4 text-violet-400"></i> Trade Configuration
                  </h3>

                  <label class="block mb-3">
                    <span class="text-xs text-white/60">Trade Size</span>
                    <input disabled tabindex="-1" class="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2
                                  text-white placeholder-white/40 focus:outline-none focus:border-white/20" placeholder="$1,000">
                  </label>
                  
                  <label class="block mb-3">
                    <span class="text-xs text-white/60">Max Slippage</span>
                    <input disabled tabindex="-1" class="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2
                                  text-white placeholder-white/40 focus:outline-none focus:border-white/20" placeholder="2%">
                  </label>
                  
                  <label class="block mb-3">
                    <span class="text-xs text-white/60">Gas Priority</span>
                    <select disabled tabindex="-1" class="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2
                                   text-white focus:outline-none focus:border-white/20">
                      <option>Medium</option>
                      <option>High</option>
                      <option>Low</option>
                    </select>
                  </label>
                  
                  <label class="block mb-3">
                    <span class="text-xs text-white/60">Notifications</span>
                    <select disabled tabindex="-1" class="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2
                                   text-white focus:outline-none focus:border-white/20">
                      <option>Telegram</option>
                      <option>Email</option>
                      <option>Both</option>
                    </select>
                  </label>

                  <button class="mt-3 w-full h-11 rounded-xl bg-violet-500 hover:bg-violet-400 active:bg-violet-600
                                 text-black font-semibold relative neon-glow focus:outline-none
                                 focus:ring-2 focus:ring-violet-500/40 focus:ring-offset-2 focus:ring-offset-neutral-950">
                    Deploy Strategy
                  </button>
                  
                </div>
              </div>
              <div class="flex flex-col items-center justify-center gap-8 ">
                <div class="space-y-3 text-xl py-6">
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-clock class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">Trades executed 24/7</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-document-text class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">Every entry logged</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-eye class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">Every exit transparent</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-chart-bar class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">Full P&L tracking</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-arrow-path class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">Switch modes anytime</span>
                  </div>
                </div>
                
                <div class="rounded-3xl bg-white/[.03] ring-1 ring-white/10 shadow-2xl shadow-violet-500/10 p-5 w-full">
                  <h5 class="mb-4 font-semibold text-white/65">Security Features</h5>
                  <div class="space-y-3 text-sm">
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Non-custodial wallet integration</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Configurable position limits</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Emergency stop functionality</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Real-time monitoring dashboard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Human-in-the-Loop Tab -->
          <div 
            id="panel-hil"
            role="tabpanel"
            aria-labelledby="tab-hil"
            v-show="activeTab === 'human-loop'" 
            class="space-y-8 transition-opacity duration-200"
            :class="activeTab === 'human-loop' ? 'opacity-100' : 'opacity-0 pointer-events-none'"
          >
            <div class="text-center ">
              <h3 class="text-2xl lg:text-4xl mb-4 font-bold text-violet-400/80/80">HUMAN-IN-THE-LOOP</h3>
              <p class="text-xl text-neutral-300 italic  text-balance">Get notified. Approve trades. Stay in control.</p>
              <p class="text-white/70 text-sm mt-2 text-balance">Review and approve trades before execution with full context.</p>
            </div>
            
            <div class="grid md:grid-cols-2 max-w-lg md:max-w-4xl mx-auto gap-8">
              <div class="space-y-8 w-full mx-auto lg:mx-0  ">
                <!-- Trade Alert Mockup -->
                 <div class="relative">
                  <div class="absolute inset-0 -inset-x-32 -inset-y-32 blur-3xl pointer-events-none -z-10 overflow-hidden" style="background: var(--gradient-radial-feature-backdrop);"></div>
                  <div class="rounded-3xl bg-white/[.03] ring-1 ring-white/10 shadow-xl shadow-violet-500/10 p-5">
                    <div class="text-white/80 text-sm mb-3 font-medium">Trade Alert Example</div>
                    <div class="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
                      <div class="flex items-start justify-between">
                        <div class="text-white/85 font-semibold">New Match: $TOKEN</div>
                        <span class="text-violet-300 text-sm">Score 82</span>
                      </div>
                      <div class="space-y-2 text-sm mt-3">
                        <div class="flex justify-between">
                          <span class="text-white/55">Smart Money:</span>
                          <span class="text-emerald-400 font-semibold">+$47k (6h)</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-white/55">Entry:</span>
                          <span class="text-white/85 font-semibold">$0.02334</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-white/55">Exit:</span>
                          <span class="text-white/85 font-semibold">TP 10x or SL 20%</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-white/55">Backtest ROI:</span>
                          <span class="text-emerald-400 font-semibold">+156%</span>
                        </div>
                      </div>
                      <div class="mt-4 grid grid-cols-3 gap-2">
                        <button disabled tabindex="-1" class="h-9 rounded-lg bg-emerald-400/90 text-black font-medium" aria-label="Approve trade">Approve</button>
                        <button disabled tabindex="-1" class="h-9 rounded-lg bg-white/8 text-white/80" aria-label="Skip trade">Skip</button>
                        <button disabled tabindex="-1" class="h-9 rounded-lg bg-white/8 text-white/80" aria-label="View trade info">Info</button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Notification Channels -->
                <div class="rounded-3xl bg-white/[.03] ring-1 ring-white/10 shadow-2xl shadow-violet-500/10 p-5">
                  <h5 class="mb-4 font-semibold text-white/65">Notification Channels</h5>
                  <div class="space-y-3 text-sm">
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Email</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">In-browser push</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Telegram</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Webhooks</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="flex flex-col items-center justify-center gap-8 pt-6">
                <div class="space-y-3 text-xl mb-4 lg:mb-0">
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-bolt class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">Trade alerts sent instantly</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-cursor-arrow-rays class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">One-click approve/decline</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-information-circle class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">Full trade context provided</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-clipboard-document-list class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">Complete audit trail</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i-heroicons-solid-arrow-path class="w-5 h-5 text-violet-500/80" />
                    <span class="text-white/75">Switch modes anytime</span>
                  </div>
                </div>
                
                <div class="rounded-3xl bg-white/[.03] ring-1 ring-white/10 shadow-2xl shadow-violet-500/10 p-5 w-full">
                  <h5 class="mb-4 font-semibold text-white/65">Control Features</h5>
                  <div class="space-y-3 text-sm">
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Real-time trade notifications</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Detailed trade reasoning</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Emergency stop override</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span class="text-white/55">Approval history tracking</span>
                    </div>
                  </div>
                </div>

                <!-- Usage Philosophy -->
                <div class="rounded-3xl bg-white/[.03] ring-1 ring-white/10 shadow-2xl shadow-violet-500/10 p-5 w-full">
                  <h5 class="mb-4 font-semibold text-white/65">Usage Philosophy</h5>
                  <p class="text-sm text-white/55 leading-relaxed">
                    Use as pure analytics, approve high-conviction setups only, or pipe signals to your own trading infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</div>
<div class="relative">  
  <div class="absolute h-[300px] inset-x-0 -z-10 overflow-hidden" style="background: var(--gradient-section-linear);">&nbsp;</div>
  <!-- gradients: purple linear + black radial -->
  <div class="absolute inset-x-0 h-[80vh] pointer-events-none -z-10 overflow-hidden" style="background: var(--gradient-violet);"></div>

  <section id="cta" class="text-white pt-20 lg:pt-32 pb-20 lg:pb-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto text-center">
      <div class="mb-12 lg:mb-16 pt-8 lg:pt-16 hero-glow">
        <h2 class="text-[2.6rem] leading-[1] md:text-7xl lg:text-8xl mb-12  font-black tracking-tight gradient-text-yellow text-balance">
          STOP GUESSING <span class="gradient-text-yellow2">START SLICING</span>
        </h2>
        <h3 class="text-2xl lg:text-4xl mb-8 font-bold text-balance gradient-text-secondary">JOIN THE WAITLIST FOR EARLY ACCESS</h3>
      </div>
      
      <div class="max-w-2xl mx-auto mb-12">
        <!-- Mobile: Separate input and button -->
        <div class="flex flex-col space-y-3 sm:hidden">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="w-full px-4 py-4 rounded-2xl 
              bg-white/5 border border-white/10 
              backdrop-blur-sm
              text-white 
              focus:bg-white/10 focus:border-violet-500 
              focus:outline-none focus:ring-2 focus:ring-violet-500
              transition duration-200
              placeholder-white/80"
          >
          <button class="w-full bg-violet-500 hover:bg-violet-400 text-black px-6 py-4 transition-all duration-200 font-semibold text-base rounded-2xl flex items-center justify-center gap-2 relative neon-glow focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
            Claim Your Spot <i-fa-solid-arrow-right class="w-4 h-4 arrow" />
          </button>
        </div>
        
        <!-- Desktop: Separate input and button -->
        <div class="hidden sm:flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            class="flex-1 px-6 py-5 rounded-2xl 
              bg-white/5 border border-white/10 
              backdrop-blur-sm
              text-white 
              focus:bg-white/10 focus:border-violet-500 
              focus:outline-none focus:ring-2 focus:ring-violet-500
              transition duration-200
              placeholder-white/80"
          >
          <button class="bg-violet-500 hover:bg-violet-400 text-black px-10 py-5 transition-all duration-300 ease-out font-semibold text-lg rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 relative neon-glow focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
            Claim Your Spot <i-fa-solid-arrow-right class="w-4 h-4 arrow" />
          </button>
        </div>
      </div>
      
      <div class="space-y-1 mb-12">
        <p class="text-neutral-400 font-medium">Be first to access the private beta.</p>
        <p class="text-neutral-500 text-sm">No spam. Unsubscribe anytime.</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-2 max-w-2xl mx-auto">
        <div class="flex items-center justify-center space-x-3 text-neutral-400">
          <i-heroicons-solid-user-group class="w-5 h-5 text-violet-600/80" />
          <span class="text-sm">First 500 users</span>
        </div>
        <div class="flex items-center justify-center space-x-3 text-neutral-400">
          <i-heroicons-solid-chat-bubble-bottom-center-text class="w-5 h-5 text-violet-600/80" />
          <span class="text-sm">Private feedback sessions</span>
        </div>
        <div class="flex items-center justify-center space-x-3 text-neutral-400">
          <i-heroicons-solid-star class="w-5 h-5 text-violet-600/80" />
          <span class="text-sm">Priority access</span>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="relative opacity-70">  
  <footer id="footer" class="bg-black text-neutral-400 pt-16 pb- border-t border-white/5 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div class="mb-6 ">
          <img src="/src/assets/logo bw.png" alt="Slicer" class="h-8 w-auto mb-1">
          <p class="text-sm text-neutral-500 text-balance"><span class="font-semibold text-white/80">Express. Simulate. Deploy. Repeat</span> — until profit feels inevitable.</p>
        </div>
        
        <!-- <div class="flex items-center space-x-6">
          <span class="text-sm hover:text-violet-500/80 transition-colors cursor-pointer">Terms</span>
          <span class="text-sm hover:text-violet-500/80 transition-colors cursor-pointer">Privacy</span>
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
    handleKeydown(event) {
      const tabs = ['hands-off', 'human-loop']
      const currentIndex = tabs.indexOf(this.activeTab)
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1
          this.activeTab = tabs[prevIndex]
          break
        case 'ArrowRight':
          event.preventDefault()
          const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0
          this.activeTab = tabs[nextIndex]
          break
        case 'Home':
          event.preventDefault()
          this.activeTab = tabs[0]
          break
        case 'End':
          event.preventDefault()
          this.activeTab = tabs[tabs.length - 1]
          break
      }
    },
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
      console.log("asdsa")
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

/* Prevent horizontal scroll on mobile */
html, body {
  overflow-x: hidden;
}

/* ===== gamut-aware color system (OKLCH) ===== */
:root {

  /* Usage
    --gradient-violet: CTA background (2x)
    --gradient-section-linear: Section background (purple)
    --gradient-radial-feature-backdrop: Feature background (purple)
    --gradient-secondary-color: Secondary color (violet). Used for 1 liner: "JOIN THE WAITLIST FOR EARLY ACCESS"
    --gradient-CTA-text: Yellow color (yellow), Used for yellow CTA + Section lead in. 
    --gradient-CTA-text2: Yellow color (yellow), Used for yellow CTA + Section lead in. 
    --gradient-CTA-glow: Hero glow (yellow and violet). Used for CTA glow
  */
  --gradient-violet: linear-gradient(to bottom, color-mix(in oklch, theme('colors.violet.950') 80%, transparent), transparent);
  --gradient-section-linear: linear-gradient(to bottom, color-mix(in oklch, theme('colors.violet.950') 50%, transparent), transparent);
  --gradient-radial-feature-backdrop: radial-gradient(circle, color-mix(in oklch,theme('colors.violet.950') 60%, transparent), transparent);

  --gradient-secondary-color: linear-gradient(to right, theme('colors.violet.700'), theme('colors.violet.300'), theme('colors.violet.700'));
  
  --gradient-CTA-text: linear-gradient(to right, theme('colors.yellow.400'), theme('colors.amber.300'), theme('colors.yellow.500'), theme('colors.amber.400'));
  --gradient-CTA-text2: linear-gradient(to right, theme('colors.amber.200'), theme('colors.yellow.300'), theme('colors.amber.300'));


  --gradient-CTA-glow: radial-gradient(
    100% 80% at 50% 50%,
    color-mix(in oklch, theme('colors.yellow.300') 30%, transparent) 0%,
    color-mix(in oklch, theme('colors.violet.800') 10%, transparent) 40%,
    transparent 70%
  );


}

/* sRGB (non-P3) screens → richer but balanced */
/* @media not (color-gamut: p3){
  :root{
   TODO: Add color adjustments for non-P3 screens
  }
} */



/* Apply gradients to text */
.gradient-text-yellow{
  background: var(--gradient-CTA-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.gradient-text-yellow2 {
  background: var(--gradient-CTA-text2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.gradient-text-secondary {
  background: var(--gradient-secondary-color);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Real working gradient for SVG icons using inline SVG gradient definition */
.gradient-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Set color on wrapper - SVG icons use currentColor */
  color: #9A5BFF;
}

.gradient-icon-wrapper svg {
  fill: url(#icon-gradient-violet-indigo) !important;
}

.gradient-icon-wrapper svg path {
  fill: url(#icon-gradient-violet-indigo) !important;
}

.gradient-icon-wrapper svg circle {
  fill: url(#icon-gradient-violet-indigo) !important;
}

.gradient-icon-wrapper svg rect {
  fill: url(#icon-gradient-violet-indigo) !important;
}

.gradient-icon-wrapper svg polygon {
  fill: url(#icon-gradient-violet-indigo) !important;
}

/* Also try with * selector to catch everything */
.gradient-icon-wrapper svg * {
  fill: url(#icon-gradient-violet-indigo) !important;
}

/* Hero cinematic depth */
.hero-glow {
  position: relative;
}
.hero-glow::before {
  display: block;
  content: "";
  position: absolute;
  top: -200px;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw + 80px);
  pointer-events: none;
  background: var(--gradient-CTA-glow);
  filter: blur(2px);
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
    rgba(154, 91, 255, 0.6), 
    rgba(176, 109, 255, 0.4), 
    rgba(154, 91, 255, 0.6), 
    rgba(176, 109, 255, 0.4)
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

/* Lighter neon glow for simulation panel CTA */
.neon-glow-light::after {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, 
    rgba(154, 91, 255, 0.6), 
    rgba(176, 109, 255, 0.4), 
    rgba(154, 91, 255, 0.6), 
    rgba(176, 109, 255, 0.4)
  );
  border-radius: 14px;
  z-index: -1;
  filter: blur(8px);
  opacity: 0.4;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.neon-glow-light:hover::after {
  opacity: 0.7;
  filter: blur(12px);
}



/* CTA Ghost Button */
.cta-ghost {
  border: 2px solid #9A5BFF;
  color: #f5f5f5;
  padding: 0.9rem 1.2rem;
  border-radius: 14px;
  box-shadow: 0 0 0 0 rgba(154,91,255,.18);
  transition: transform .22s ease, box-shadow .22s ease, background-color .22s ease;
}

.cta-ghost:hover {
  transform: translateY(-1px);
  background: rgba(154,91,255,.08);
  box-shadow: 0 0 28px 2px rgba(154,91,255,.18);
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
    rgba(154,91,255,0) 10%,
    rgba(154,91,255,.6) 40%,
    rgba(154,91,255,1) 50%,
    rgba(154,91,255,.6) 60%,
    rgba(154,91,255,0) 90%,
    transparent 100%
  );
  animation: dataFlowOsc 1.6s ease-in-out infinite;
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

@keyframes progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

</style>
