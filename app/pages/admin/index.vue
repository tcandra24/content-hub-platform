<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-col lg:flex-row lg:items-end justify-between pb-space-lg gap-space-md">
      <div>
        <div class="flex items-center gap-space-xs mb-space-3xs">
          <span class="font-meta-tag text-meta-tag text-primary uppercase tracking-wider">Curation Ledger</span>
          <span class="text-tertiary">/</span>
          <span class="font-meta-tag text-meta-tag text-tertiary">Folio Index &amp; Dispatches</span>
        </div>
        <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Garden Index &amp; Repository</h1>
        <p class="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-space-3xs">Curating evergreen architectural briefs, technical notes, and quiet personal essays across varying maturity stages.</p>
      </div>
      <div class="flex items-center gap-space-sm self-start lg:self-auto">
        <div class="hidden sm:flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded text-tertiary">
          <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span class="font-meta-tag text-meta-tag text-secondary">Local Sync: Active</span>
        </div>
        <NuxtLink to="/admin/editor" class="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-primary text-on-primary font-button-label text-button-label hover:bg-primary-container shadow-sm transition-all">
          <Icon name="draw" class="w-4.5 h-4.5" />
          <span>+ Create Dispatch</span>
        </NuxtLink>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-sm mb-space-xl">
      <div class="relative overflow-hidden bg-surface-container-low rounded p-space-md shadow-sm">
        <div class="flex items-center justify-between text-tertiary mb-space-xs">
          <span class="font-meta-tag text-meta-tag uppercase tracking-wider">Total Dispatches</span>
          <Icon name="file_text" class="w-5 h-5" />
        </div>
        <div class="flex items-baseline gap-space-xs">
          <span class="font-headline-md text-headline-md font-normal text-on-surface">42</span>
          <span class="font-meta-tag text-meta-tag text-secondary">+3 this wk</span>
        </div>
        <div class="mt-space-xs w-full bg-surface-container-highest rounded-full h-1 overflow-hidden">
          <div class="bg-primary h-full rounded-full" :style="{ width: '100%' }"></div>
        </div>
      </div>
    </div>

    <div class="bg-surface-container-low rounded shadow-sm overflow-hidden mb-space-md">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-surface-container text-tertiary font-meta-tag text-meta-tag uppercase tracking-wider">
              <th class="py-space-sm px-space-md w-10">
                <input class="rounded border-outline-variant text-primary focus:ring-primary/30 h-4 w-4 bg-surface" type="checkbox" />
              </th>
              <th class="py-space-sm px-space-md font-medium">Title &amp; Reference Slug</th>
              <th class="py-space-sm px-space-md font-medium">Domain</th>
              <th class="py-space-sm px-space-md font-medium">Growth Stage</th>
              <th class="py-space-sm px-space-md font-medium">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y-0 text-on-surface">
            <tr class="hover:bg-surface-container/60 transition-colors group">
              <td class="py-space-md px-space-md align-middle">
                <input class="rounded border-outline-variant text-primary focus:ring-primary/30 h-4 w-4 bg-surface" type="checkbox" />
              </td>
              <td class="py-space-md px-space-md align-middle min-w-70">
                <div class="flex items-center gap-space-sm">
                  <div class="flex flex-col min-w-0">
                    <NuxtLink class="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors truncate" to="/admin/editor"> Deconstructing SSR Hydration in Nuxt 3 </NuxtLink>
                    <span class="font-code-inline text-code-inline text-tertiary truncate">/dispatches/tech/nuxt-ssr-hydration-pipeline</span>
                  </div>
                </div>
              </td>
              <td class="py-space-md px-space-md align-middle">
                <span class="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs rounded bg-secondary-fixed/40 text-on-secondary-fixed-variant font-meta-tag text-meta-tag">
                  <Icon name="terminal" class="w-3.5 h-3.5" />
                  Tech
                </span>
              </td>
              <td class="py-space-md px-space-md align-middle">
                <span class="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs rounded-full bg-surface-container font-meta-tag text-meta-tag text-on-surface-variant">
                  <span>🌲</span>
                  <span>Evergreen</span>
                </span>
              </td>
              <td class="py-space-md px-space-md align-middle">
                <span class="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs rounded bg-secondary-container/40 text-on-secondary-container font-button-label text-button-label">
                  <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Published
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
