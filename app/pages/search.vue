<template>
  <div class="flex flex-col w-full">
    <div class="w-full relative overflow-hidden bg-surface-container-low pb-space-3xl pt-space-2xl shadow-sm">
      <div class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div class="absolute left-1/4 -bottom-16 w-80 h-80 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
      <div class="max-w-content-measure-wide mx-auto px-space-lg w-full flex flex-col items-center">
        <div class="flex items-center gap-space-xs font-meta-tag text-meta-tag text-tertiary mb-space-sm uppercase tracking-widest">
          <Icon name="manage_search" class="w-[1rem] h-[1rem] text-primary" />
          <span>Garden Concordance &amp; Cross-Stream Query</span>
        </div>
        <div class="w-full max-w-content-measure-prose relative">
          <div class="flex items-center w-full bg-surface-container-lowest rounded-xl shadow-md p-space-xs transition-shadow duration-300 hover:shadow-lg">
            <div class="pl-space-sm pr-space-xs text-primary flex items-center">
              <Icon name="search" class="w-[1.5rem] h-[1.5rem]" />
            </div>
            <input
              class="w-full bg-transparent font-headline-sm text-headline-sm text-on-surface placeholder:text-outline-variant focus:outline-none py-space-xs px-space-2xs"
              id="garden-search-input"
              placeholder="Search architectural digests, journal entries, code..."
              type="text"
              defaultValue="memory management"
            />
            <button class="p-space-xs text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container transition-colors" id="clear-query-btn" title="Clear search" type="button">
              <Icon name="close" class="w-5 h-5" />
            </button>
            <div class="hidden sm:flex items-center gap-space-2xs pr-space-xs border-l border-outline-variant/30 pl-space-xs text-tertiary font-meta-tag text-meta-tag">
              <kbd class="px-space-2xs py-space-3xs bg-surface-container rounded shadow-sm text-on-surface-variant">⌘</kbd>
              <kbd class="px-space-2xs py-space-3xs bg-surface-container rounded shadow-sm text-on-surface-variant">K</kbd>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-space-xs mt-space-md" id="filter-pill-group">
            <button
              class="filter-pill active-pill px-space-sm py-space-2xs rounded-full font-button-label text-button-label bg-primary text-on-primary shadow-sm hover:bg-primary-container transition-all flex items-center gap-space-2xs"
              data-filter="all"
              type="button"
            >
              <span>All Results</span>
              <span class="px-space-2xs py-0 rounded-full bg-on-primary/20 text-on-primary font-meta-tag text-meta-tag">12</span>
            </button>
            <button
              class="filter-pill px-space-sm py-space-2xs rounded-full font-button-label text-button-label bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all flex items-center gap-space-2xs"
              data-filter="tech"
              type="button"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Tech</span>
              <span class="px-space-2xs py-0 rounded-full bg-surface-container-highest text-tertiary font-meta-tag text-meta-tag">9</span>
            </button>
            <button
              class="filter-pill px-space-sm py-space-2xs rounded-full font-button-label text-button-label bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all flex items-center gap-space-2xs"
              data-filter="personal"
              type="button"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>Personal</span>
              <span class="px-space-2xs py-0 rounded-full bg-surface-container-highest text-tertiary font-meta-tag text-meta-tag">3</span>
            </button>
            <button
              class="filter-pill px-space-sm py-space-2xs rounded-full font-button-label text-button-label bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all flex items-center gap-space-2xs"
              data-filter="code"
              type="button"
            >
              <Icon name="data_object" class="w-3.5 h-3.5 text-tertiary" />
              <span>Code Snippets</span>
              <span class="px-space-2xs py-0 rounded-full bg-surface-container-highest text-tertiary font-meta-tag text-meta-tag">4</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-content-measure-wide mx-auto px-space-lg w-full py-space-lg">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs bg-surface-container-lowest px-space-md py-space-sm rounded-lg shadow-sm">
        <div class="flex items-center gap-space-xs font-meta-tag text-meta-tag text-tertiary">
          <span class="inline-block w-2 h-2 rounded-full bg-secondary"></span>
          <span class="text-on-surface font-semibold">12 dispatches found</span>
          <span>in 18ms across 42 garden notes</span>
        </div>
        <div class="flex items-center gap-space-xs font-meta-tag text-meta-tag text-on-surface-variant">
          <Icon name="lightbulb" class="w-3.5 h-3.5 text-primary" />
          <span>Syntax filter:</span>
          <code class="px-space-2xs py-0.5 bg-surface-container rounded font-code-inline text-code-inline text-primary">type:tech</code>
          <code class="px-space-2xs py-0.5 bg-surface-container rounded font-code-inline text-primary hidden md:inline">tag:rust</code>
          <code class="px-space-2xs py-0.5 bg-surface-container rounded font-code-inline text-secondary hidden lg:inline">stage:evergreen</code>
        </div>
      </div>
    </div>
    <div class="max-w-content-measure-wide mx-auto px-space-lg w-full pb-space-4xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
        <div class="lg:col-span-8 flex flex-col gap-space-lg" id="results-container">
          <article class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden" data-category="tech">
            <div class="absolute top-0 left-0 w-1 h-full bg-secondary rounded-l"></div>
            <div class="flex flex-wrap items-center justify-between gap-space-xs mb-space-xs">
              <div class="flex items-center gap-space-xs">
                <span class="px-space-xs py-0.5 rounded font-meta-tag text-meta-tag text-secondary bg-secondary-container/40">TECH NOTE #089</span>
                <span class="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container-high font-meta-tag text-meta-tag text-on-surface-variant">
                  <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>Evergreen</span>
                </span>
              </div>
              <div class="flex items-center gap-space-2xs font-meta-tag text-meta-tag text-tertiary">
                <Icon name="schedule" class="w-3.5 h-3.5" />
                <span>14 min read • Revised 3d ago</span>
              </div>
            </div>
            <h2 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors mb-space-xs">
              <NuxtLink class="inline-flex items-center gap-space-xs" to="/article/tech/zero-cost">
                Zero-Cost Abstractions: Memory Profiling in Rust
                <Icon name="arrow_outward" class="w-4.5 h-4.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </NuxtLink>
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Examining telemetry overlays and customized jemalloc hooks to diagnose unexpected
              <mark class="bg-primary-fixed text-on-primary-fixed px-1 py-0.5 rounded font-medium">memory</mark> allocation patterns in bare-metal environments. We isolate stack vs. heap allocation boundaries without runtime overhead.
            </p>
            <div class="bg-surface-container-low rounded-lg p-space-sm mb-space-md overflow-x-auto shadow-inner">
              <div class="flex items-center justify-between font-meta-tag text-meta-tag text-tertiary pb-space-2xs mb-space-2xs border-b border-outline-variant/20">
                <span class="flex items-center gap-space-2xs"><Icon name="terminal" class="w-3.5 h-3.5" />src/allocator/jemalloc_hook.rs</span>
                <span class="text-secondary font-code-inline">L34-L41</span>
              </div>
              <pre class="font-code-inline text-code-inline text-on-surface leading-relaxed"><code><span class="text-tertiary">// Hooking runtime stats directly from jemalloc arena</span>
<span class="text-primary font-semibold">unsafe fn</span> <span class="text-secondary">profile_heap_extent</span>() -&gt; Result&lt;ArenaStat, AllocErr&gt; {{'{'}}
    <span class="text-tertiary">let</span> epoch = jemalloc_ctl::epoch::mib()?;
    epoch.advance()?;
    <span class="text-tertiary">let</span> allocated = jemalloc_ctl::stats::allocated::mib()?.read()?;
    <span class="text-tertiary">Ok</span>(ArenaStat {{'{'}} bytes_in_use: allocated {{'}'}})
{{'}'}}</code></pre>
            </div>
            <div class="flex items-center justify-between pt-space-xs">
              <div class="flex flex-wrap items-center gap-space-2xs">
                <span class="px-space-xs py-0.5 rounded bg-surface-container text-tertiary font-meta-tag text-meta-tag">#rust</span>
                <span class="px-space-xs py-0.5 rounded bg-surface-container text-tertiary font-meta-tag text-meta-tag">#systems</span>
                <span class="px-space-xs py-0.5 rounded bg-surface-container text-tertiary font-meta-tag text-meta-tag">#profiling</span>
              </div>
              <NuxtLink class="font-button-label text-button-label text-primary hover:underline flex items-center gap-space-3xs" to="/article/tech/zero-cost">
                Full Blueprint
                <Icon name="chevron_right" class="w-[1rem] h-[1rem]" />
              </NuxtLink>
            </div>
          </article>

          <article class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden" data-category="personal">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary rounded-l"></div>
            <div class="flex flex-wrap items-center justify-between gap-space-xs mb-space-xs">
              <div class="flex items-center gap-space-xs">
                <span class="px-space-xs py-0.5 rounded font-meta-tag text-meta-tag text-primary bg-primary-fixed/40">JOURNAL / FIELD NOTES</span>
                <span class="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container-high font-meta-tag text-meta-tag text-on-surface-variant">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>Budding</span>
                </span>
              </div>
              <div class="flex items-center gap-space-2xs font-meta-tag text-meta-tag text-tertiary">
                <Icon name="schedule" class="w-3.5 h-3.5" />
                <span>8 min read • Munich, Nov 2024</span>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center mb-space-sm">
              <div class="md:col-span-8">
                <h2 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors mb-space-xs">
                  <NuxtLink class="inline-flex items-center gap-space-xs" to="/article/personal/walking-isar">
                    Walking the Isar: What Slow Running Taught Me About Debugging
                    <Icon name="arrow_outward" class="w-4.5 h-4.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </NuxtLink>
                </h2>
                <p class="font-body-md text-body-md text-on-surface-variant">
                  Clearing working <mark class="bg-primary-fixed text-on-primary-fixed px-1 py-0.5 rounded font-medium">memory</mark> during long gravel trail runs along the river. When an architectural dead-end consumes your cache, rhythmic,
                  unhurried motion becomes the most reliable garbage collector.
                </p>
              </div>
              <div class="md:col-span-4 h-32 w-full rounded-lg overflow-hidden relative shadow-sm">
                <img
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Monochrome 35mm film photograph of the gravel banks of the river Isar in Munich"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwaVcqInT6wYmrhPJR-oJNQhQkQ_vAzjjgZyLlVb3O_kSJEL9uKXcKXxfKqf88htMFTzL8bvvsbHMwDT7FfEsU3PUWCNckzA0I5m11tRK_IlClEuTlJPA9OY4h0ps9ISBnD_LP2XgMoQK7a7xmlKPvVcQmlwYV7U83mGjYkfx5cajrvhCOX5czbuawhz_YM9vxU1VfqrBf0pXp7GWMILpYWNC94Xvq5Hasjmx3t9RkSfgdZ6I5uKjW"
                />
                <span class="absolute bottom-1 right-1 bg-on-background/70 text-surface font-meta-tag text-[0.65rem] px-1 rounded">Isar / 48.135° N</span>
              </div>
            </div>
            <blockquote class="bg-surface-container-low/70 rounded-lg p-space-sm border-l-2 border-primary/40 italic font-display-hero text-[1.05rem] text-tertiary mb-space-md">
              “We rarely run out of CPU power while troubleshooting; we run out of mental paging space.”
            </blockquote>
            <div class="flex items-center justify-between pt-space-xs">
              <div class="flex flex-wrap items-center gap-space-2xs">
                <span class="px-space-xs py-0.5 rounded bg-surface-container text-tertiary font-meta-tag text-meta-tag">#cognition</span>
                <span class="px-space-xs py-0.5 rounded bg-surface-container text-tertiary font-meta-tag text-meta-tag">#running</span>
                <span class="px-space-xs py-0.5 rounded bg-surface-container text-tertiary font-meta-tag text-meta-tag">#craft</span>
              </div>
              <NuxtLink class="font-button-label text-button-label text-primary hover:underline flex items-center gap-space-3xs" to="/article/personal/walking-isar">
                Read Entry
                <Icon name="chevron_right" class="w-[1rem] h-[1rem]" />
              </NuxtLink>
            </div>
          </article>

          <div class="flex items-center justify-center pt-space-lg">
            <button
              class="px-space-xl py-space-sm bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/30 text-on-surface font-button-label text-button-label rounded-lg transition-colors flex items-center gap-space-xs shadow-sm"
              type="button"
            >
              <Icon name="expand_more" class="w-[1rem] h-[1rem] text-tertiary" />
              <span>Load 8 Remaining Notes</span>
            </button>
          </div>
        </div>

        <aside class="lg:col-span-4 flex flex-col gap-space-xl">
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div class="flex items-center gap-space-xs mb-space-sm pb-space-xs border-b border-outline-variant/20">
              <Icon name="trending_up" class="w-5 h-5 text-primary" />
              <h3 class="font-headline-sm text-headline-sm text-on-surface">Trending Queries</h3>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Frequently referenced concepts and emerging seed topics explored this week.</p>
            <div class="flex flex-col gap-space-xs">
              <a class="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors group" href="#">
                <div class="flex items-center gap-space-xs">
                  <span class="font-code-inline text-code-inline text-primary font-semibold">#raft</span>
                  <span class="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface">Consensus state machine</span>
                </div>
                <span class="font-meta-tag text-meta-tag text-tertiary bg-surface-container px-space-2xs py-0.5 rounded">18 ref</span>
              </a>
              <a class="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors group" href="#">
                <div class="flex items-center gap-space-xs">
                  <span class="font-code-inline text-code-inline text-primary font-semibold">#hydration</span>
                  <span class="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface">Selective SSR streaming</span>
                </div>
                <span class="font-meta-tag text-meta-tag text-tertiary bg-surface-container px-space-2xs py-0.5 rounded">14 ref</span>
              </a>
            </div>
          </div>

          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div class="flex items-center justify-between mb-space-sm pb-space-xs border-b border-outline-variant/20">
              <div class="flex items-center gap-space-xs">
                <Icon name="hub" class="w-5 h-5 text-secondary" />
                <h3 class="font-headline-sm text-headline-sm text-on-surface">Garden Graph Taxonomy</h3>
              </div>
              <span class="font-meta-tag text-meta-tag text-secondary bg-secondary-container/30 px-space-2xs py-0.5 rounded">Active Node</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Radial adjacency for <span class="font-semibold text-on-surface">"memory management"</span> inside the global knowledge graph.</p>
            <div class="relative w-full h-56 bg-surface-container-low rounded-lg p-space-sm flex items-center justify-center overflow-hidden">
              <svg class="w-full h-full" fill="none" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                <line class="text-outline-variant" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1.5" x1="160" x2="80" y1="100" y2="40"></line>
                <line class="text-primary/40" stroke="currentColor" strokeWidth="1.5" x1="160" x2="240" y1="100" y2="45"></line>
                <line class="text-secondary/40" stroke="currentColor" strokeWidth="1.5" x1="160" x2="250" y1="100" y2="150"></line>
                <line class="text-outline-variant" stroke="currentColor" strokeWidth="1.5" x1="160" x2="70" y1="100" y2="155"></line>
                <g class="cursor-pointer hover:opacity-80 transition-opacity">
                  <circle class="fill-surface-container-highest" cx="80" cy="40" r="16"></circle>
                  <text class="fill-on-surface-variant text-[9px] font-mono" textAnchor="middle" x="80" y="44">alloc</text>
                </g>
                <g class="cursor-pointer hover:opacity-80 transition-opacity">
                  <circle class="fill-primary-fixed" cx="240" cy="45" r="18"></circle>
                  <text class="fill-on-primary-fixed text-[9px] font-mono font-bold" textAnchor="middle" x="240" y="49">rust</text>
                </g>
                <g class="cursor-pointer hover:opacity-80 transition-opacity">
                  <circle class="fill-secondary-container" cx="250" cy="150" r="20"></circle>
                  <text class="fill-on-secondary-container text-[9px] font-mono font-bold" textAnchor="middle" x="250" y="154">lsm-tree</text>
                </g>
                <g class="cursor-pointer hover:opacity-80 transition-opacity">
                  <circle class="fill-surface-container-highest" cx="70" cy="155" r="17"></circle>
                  <text class="fill-on-surface-variant text-[9px] font-mono" textAnchor="middle" x="70" y="159">running</text>
                </g>
                <g class="animate-pulse">
                  <circle class="fill-primary/10" cx="160" cy="100" r="28"></circle>
                  <circle class="fill-primary text-on-primary" cx="160" cy="100" r="22"></circle>
                  <text class="fill-on-primary text-[10px] font-mono font-bold" textAnchor="middle" x="160" y="103">MEMORY</text>
                </g>
              </svg>
              <div class="absolute top-2 right-2 flex items-center gap-1 font-meta-tag text-[0.7rem] text-tertiary bg-surface-container-lowest/80 px-1.5 py-0.5 rounded">
                <span>4 NuxtLinked Hubs</span>
              </div>
            </div>
            <div class="mt-space-md space-y-space-xs">
              <div class="flex items-center justify-between text-body-sm font-body-sm">
                <span class="text-on-surface">Systems Architecture</span>
                <span class="font-meta-tag text-meta-tag text-secondary">62% affinity</span>
              </div>
              <div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div class="h-full bg-secondary rounded-full" :style="{ width: '62%' }"></div>
              </div>
              <div class="flex items-center justify-between text-body-sm font-body-sm pt-space-xs">
                <span class="text-on-surface">Cognitive Psychology</span>
                <span class="font-meta-tag text-meta-tag text-primary">38% affinity</span>
              </div>
              <div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div class="h-full bg-primary rounded-full" :style="{ width: '38%' }"></div>
              </div>
            </div>
            <div class="mt-space-lg pt-space-sm border-t border-outline-variant/20 flex items-center justify-between">
              <span class="font-meta-tag text-meta-tag text-tertiary">Graph Depth: 2 Hops</span>
              <NuxtLink class="font-button-label text-button-label text-secondary hover:underline flex items-center gap-space-3xs" to="#">
                Explore 3D Cosmos
                <Icon name="north_east" class="w-3.5 h-3.5" />
              </NuxtLink>
            </div>
          </div>

          <div class="bg-linear-to-br from-surface-container-low to-surface-container-high/60 rounded-xl p-space-lg shadow-sm">
            <div class="flex items-center gap-space-xs mb-space-xs text-primary">
              <Icon name="rss_feed" class="w-5 h-5" />
              <h4 class="font-headline-sm text-headline-sm text-on-surface">Custom Feed Stream</h4>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Subscribe exclusively to updates matching the query <code class="font-code-inline text-code-inline text-primary">"memory management"</code>.</p>
            <div class="flex items-center gap-space-xs">
              <input
                class="w-full px-space-xs py-space-xs bg-surface-container-lowest rounded font-code-inline text-[0.75rem] text-tertiary border border-outline-variant/30 select-all"
                readOnly
                type="text"
                defaultValue="https://chronicle.dev/feed?q=memory+management"
              />
              <button class="px-space-sm py-space-xs bg-primary hover:bg-primary-container text-on-primary rounded font-button-label text-button-label transition-colors shrink-0" type="button">Copy</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
