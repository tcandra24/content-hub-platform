<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "admin",
});
</script>

<template>
  <div class="flex flex-col w-full">
    <header class="w-full bg-surface-container-low rounded-xl px-space-md py-space-sm shadow-sm mb-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm">
      <div class="flex items-center gap-space-md w-full md:w-auto">
        <NuxtLink class="inline-flex items-center gap-space-2xs text-on-surface-variant hover:text-primary font-button-label text-button-label transition-colors" to="/admin">
          <Icon name="arrow_back" class="w-5 h-5" />
          <span class="hidden sm:inline">Articles</span>
        </NuxtLink>
        <div class="h-4 w-px bg-outline-variant/50 hidden sm:block"></div>
        <div class="flex items-center gap-space-xs text-tertiary">
          <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span class="font-meta-tag text-meta-tag text-tertiary">Draft auto-saved 14s ago</span>
        </div>
      </div>
      <div class="flex items-center gap-space-xs w-full md:w-auto justify-end">
        <button class="inline-flex items-center gap-space-2xs px-space-sm py-space-xs rounded bg-surface text-on-surface hover:bg-surface-container-highest font-button-label text-button-label shadow-sm transition-all" type="button">
          <Icon name="visibility" class="w-4.5 h-4.5 text-tertiary" />
          <span>Preview</span>
        </button>
        <button class="inline-flex items-center gap-space-2xs px-space-sm py-space-xs rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-button-label text-button-label transition-colors" type="button">
          <Icon name="bookmark" class="w-4.5 h-4.5 text-tertiary" />
          <span>Save Draft</span>
        </button>
        <button class="inline-flex items-center gap-space-2xs px-space-md py-space-xs rounded bg-primary text-on-primary hover:bg-primary-container font-button-label text-button-label shadow-md shadow-primary/20 transition-all" type="button">
          <Icon name="send" class="w-4.5 h-4.5" />
          <span>Publish Dispatch</span>
        </button>
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
      <main class="lg:col-span-8 flex flex-col gap-space-md min-w-0">
        <div class="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm relative overflow-hidden">
          <span class="absolute top-4 right-6 font-meta-tag text-meta-tag text-tertiary/40 uppercase tracking-widest select-none pointer-events-none"> CANVAS :: DRAFT_04 </span>
          <div class="space-y-space-xs mb-space-lg">
            <input
              class="w-full bg-transparent font-headline-lg text-headline-lg text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:ring-0 leading-tight"
              placeholder="Untitled Dispatch..."
              type="text"
              defaultValue="Why Local-First Architecture Demands CRDT Semantics"
            />
            <textarea
              class="w-full bg-transparent font-body-lg text-body-lg text-tertiary placeholder:text-outline-variant/60 focus:outline-none resize-none leading-relaxed"
              placeholder="Add an archival subtitle or abstract summary..."
              rows="{2}"
              defaultValue="A grounded inquiry into state convergence, optimistic peer reconciliation, and why serialized vector clocks supersede centralized authority in distributed personal software."
            ></textarea>
          </div>

          <div class="sticky top-20 z-20 bg-surface-container-low/95 backdrop-blur-md rounded-lg p-space-2xs shadow-sm mb-space-lg flex items-center justify-between flex-wrap gap-space-2xs">
            <div class="flex items-center gap-space-3xs">
              <button class="px-space-xs py-space-3xs rounded hover:bg-surface-container-highest text-on-surface font-meta-tag text-meta-tag font-semibold" type="button">H1</button>
              <button class="px-space-xs py-space-3xs rounded hover:bg-surface-container-highest text-on-surface font-meta-tag text-meta-tag font-semibold bg-surface-container-highest/60" type="button">H2</button>
              <button class="px-space-xs py-space-3xs rounded hover:bg-surface-container-highest text-on-surface font-meta-tag text-meta-tag font-semibold" type="button">H3</button>
            </div>
          </div>

          <article class="prose max-w-none text-on-surface space-y-space-md">
            <p class="font-body-lg text-body-lg text-on-surface leading-relaxed">
              The canonical mental model of client-server synchronization relies fundamentally on an authoritative source of truth. When an edge device departs from network adjacency, it falls into a degraded state of provisional writes.
            </p>
            <h2 class="font-headline-md text-headline-md text-on-surface pt-space-xs flex items-center gap-space-xs">
              <span>The Deterministic Merge Criterion</span>
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              State-based and operation-based conflict-free replicated data types guarantee that distributed peers converge to an identical representation without central arbitration.
            </p>
          </article>
        </div>
      </main>

      <aside class="lg:col-span-4 flex flex-col gap-space-md min-w-0">
        <div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
          <div class="flex items-center justify-between">
            <span class="font-meta-tag text-meta-tag text-tertiary uppercase tracking-wider">Publication Scope</span>
            <Icon name="settings" class="w-4.5 h-4.5 text-tertiary" />
          </div>
          <div class="grid grid-cols-2 gap-space-2xs bg-surface-container rounded-lg p-space-3xs">
            <button class="py-space-xs px-space-sm rounded font-button-label text-button-label bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center gap-space-2xs" type="button">
              <Icon name="terminal" class="w-[1rem] h-[1rem]" />
              <span>Tech (Active)</span>
            </button>
            <button class="py-space-xs px-space-sm rounded font-button-label text-button-label text-tertiary hover:text-on-surface flex items-center justify-center gap-space-2xs transition-colors" type="button">
              <Icon name="nature_people" class="w-[1rem] h-[1rem]" />
              <span>Personal</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
