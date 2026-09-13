<template>
  <div class="flex flex-col w-full">
    <div class="relative w-full max-w-content-measure-wide mx-auto px-space-lg pt-space-xl pb-space-4xl">
      <div class="absolute top-12 left-1/4 -z-10 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none opacity-60"></div>
      <div class="absolute top-80 right-10 -z-10 w-80 h-80 bg-secondary-fixed/35 rounded-full blur-3xl pointer-events-none opacity-50"></div>

      <section class="mb-space-2xl">
        <div class="bg-surface-container-low rounded-xl p-space-lg sm:p-space-xl shadow-sm relative overflow-hidden">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div class="space-y-space-xs max-w-2xl">
              <div class="flex items-center gap-space-xs flex-wrap">
                <span class="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs rounded-full bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag shadow-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  <span>STATUS: WRITING ABOUT CODE & LIFE</span>
                </span>
              </div>
              <h1 class="font-headline-lg text-headline-lg text-on-surface leading-tight">Where code meets reflection — a space for building things and writing about the process.</h1>
              <p class="font-body-md text-body-md text-on-surface-variant">Technical notes on web development and AI tooling, alongside personal thoughts on the journey of building, learning, and creating along the way.</p>
            </div>
            <div class="bg-surface-container-lowest/80 backdrop-blur-sm rounded-lg p-space-md shadow-sm self-start lg:self-center shrink-0 w-full sm:w-auto">
              <div class="font-meta-tag text-meta-tag text-tertiary uppercase tracking-wider mb-space-xs flex items-center justify-between">
                <span>What you'll find here</span>
                <Icon name="eco" class="w-3.5 h-3.5" />
              </div>
              <div class="grid grid-cols-3 sm:flex sm:items-center gap-space-md">
                <div class="flex items-center gap-space-2xs">
                  <span class="text-[0.95rem]">&gt;_</span>
                  <div class="flex flex-col">
                    <span class="font-button-label text-[0.75rem] leading-none text-on-surface">Tech</span>
                  </div>
                </div>
                <div class="flex items-center gap-space-2xs">
                  <span class="text-[0.95rem]">🖋</span>
                  <div class="flex flex-col">
                    <span class="font-button-label text-[0.75rem] leading-none text-on-surface">Personal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-space-3xl">
        <div class="flex items-center justify-between mb-space-sm">
          <div class="flex items-center gap-space-xs">
            <Icon name="pin_drop" class="w-4.5 h-4.5 text-primary" />
            <span class="font-meta-tag text-meta-tag uppercase text-primary font-semibold tracking-wider">PINNED ARCHITECTURAL FOLIO</span>
          </div>
          <span class="font-meta-tag text-meta-tag text-tertiary">DISPATCH #042 — 2024.10.14</span>
        </div>
        <article class="bg-surface-container rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div class="lg:col-span-8 p-space-xl sm:p-space-2xl flex flex-col justify-between">
              <div class="space-y-space-md">
                <div class="flex flex-wrap items-center gap-space-xs">
                  <span class="px-space-xs py-space-3xs font-meta-tag text-meta-tag text-on-primary bg-primary rounded"> TECH · ARCHITECTURE </span>
                  <span class="inline-flex items-center gap-space-3xs px-space-xs py-space-3xs bg-secondary-container/40 text-secondary rounded font-meta-tag text-meta-tag"> <span>🌳</span> Evergreen Thesis </span>
                  <span class="font-meta-tag text-meta-tag text-tertiary flex items-center gap-space-3xs"> <Icon name="schedule" class="w-[0.9rem] h-[0.9rem]" /> 12 min read </span>
                </div>
                <div>
                  <NuxtLink class="group-hover:text-primary transition-colors" to="/article/tech/ssr-hydration">
                    <h2 class="font-display-hero text-headline-lg lg:text-display-hero text-on-surface tracking-tight leading-[1.15]">Deconstructing SSR Hydration in Nuxt 3: Beyond Islands</h2>
                  </NuxtLink>
                  <p class="font-headline-sm text-headline-sm text-on-surface-variant mt-space-xs font-normal italic">Toward zero-overhead resumeability and selective boundary execution in modern SSR runtimes.</p>
                </div>
                <div class="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <p class="font-body-md text-body-md text-on-surface italic relative">
                    <span class="text-primary font-display-hero text-3xl absolute -left-2 -top-3 leading-none opacity-40">“</span>
                    <span class="pl-space-sm block text-on-surface-variant">
                      Hydration remains the subtle tax of modern web architecture. True performance requires questioning whether components need to re-execute their initialization logic on client boots at all.
                    </span>
                  </p>
                </div>
              </div>
              <div class="mt-space-xl pt-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div class="flex items-center gap-space-sm">
                  <img
                    alt="Julian Vance - Systems Architect"
                    class="w-12 h-12 rounded-full object-cover shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANsUUSyBs7Cr_g4fCeUJ84X_9eoXBo59JVmyO5_yZcV2mtI_fR5n4YNdKflLFeIEPFRXbm4TSpvDnp2S8CZQGuvMYIGBN1wMdkl9JN7YYeejqeMfcONsgw0Nh2MqYd_c6lD9sZ3Om9M0wSoRzugirqyuWcJgai94dfvQjo41c-YVWVSLzJsD-kb_9kJSiEg8PQMDZ9J2qatfzI558Y5fpxCLsqsRIbiWxkD8X0Z-rnxwqN-cLTuy44"
                  />
                  <div class="flex flex-col">
                    <span class="font-button-label text-button-label text-on-surface">Julian Vance</span>
                    <span class="font-meta-tag text-meta-tag text-tertiary">Principal Architect · Chronicle Core</span>
                  </div>
                </div>
                <NuxtLink
                  class="inline-flex items-center justify-center gap-space-xs px-space-md py-space-xs bg-primary text-on-primary font-button-label text-button-label rounded hover:bg-primary-container transition-colors shadow-sm shrink-0"
                  to="/article/tech/ssr-hydration"
                >
                  <span>Read Architectural Deep Dive</span>
                  <Icon name="arrow_forward" class="w-[1rem] h-[1rem]" />
                </NuxtLink>
              </div>
            </div>
            <div class="lg:col-span-4 bg-surface-container-high p-space-lg sm:p-space-xl flex flex-col justify-between relative overflow-hidden">
              <div class="space-y-space-sm">
                <div class="flex items-center justify-between font-meta-tag text-meta-tag text-tertiary">
                  <span class="flex items-center gap-space-3xs">
                    <Icon name="hub" class="w-3.5 h-3.5" />
                    HYDRATION GRAPH METRIC
                  </span>
                  <span class="text-secondary font-semibold">TBT -42%</span>
                </div>
                <div class="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <svg class="w-full h-auto text-on-surface" fill="none" viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
                    <line stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.08" x1="20" x2="260" y1="30" y2="30"></line>
                    <line stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.08" x1="20" x2="260" y1="75" y2="75"></line>
                    <line stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.08" x1="20" x2="260" y1="120" y2="120"></line>
                    <path d="M 25 140 C 65 130, 90 40, 140 40 C 180 40, 210 135, 255 135" stroke="#ba5832" stroke-linecap="round" stroke-width="2.5"></path>
                    <path d="M 25 140 C 70 140, 105 95, 140 92 C 185 89, 220 100, 255 102" stroke="#356853" stroke-dasharray="4 3" stroke-linecap="round" stroke-width="2.5"></path>
                    <circle cx="140" cy="40" fill="#ba5832" r="4.5"></circle>
                    <circle cx="140" cy="92" fill="#356853" r="4.5"></circle>
                    <circle cx="255" cy="102" fill="#356853" r="4"></circle>
                    <text fill="#615c50" font-family="JetBrains Mono" font-size="8" x="30" y="24">SSR Runtime Payload (KB)</text>
                    <text fill="#ba5832" font-family="JetBrains Mono" font-size="7.5" font-weight="600" x="148" y="38">Standard: 142KB</text>
                    <text fill="#356853" font-family="JetBrains Mono" font-size="7.5" font-weight="600" x="148" y="90">Sub-Island: 18KB</text>
                    <text fill="#615c50" font-family="JetBrains Mono" font-size="7.5" x="25" y="165">0ms</text>
                    <text fill="#615c50" font-family="JetBrains Mono" font-size="7.5" x="130" y="165">Initial Render</text>
                    <text fill="#615c50" font-family="JetBrains Mono" font-size="7.5" x="235" y="165">Interactive</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
//
</script>
