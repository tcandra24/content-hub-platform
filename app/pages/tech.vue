<script lang="ts" setup>
const { data } = await useFetch("/api/articles", {
  query: {
    contentType: "tech",
  },
});
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="relative w-full">
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div class="absolute top-12 left-1/3 w-80 h-80 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
    </div>

    <section class="w-full max-w-content-measure-wide mx-auto px-space-lg pt-space-xl pb-space-lg">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div class="space-y-space-2xs">
          <div class="flex items-center gap-space-xs text-tertiary font-meta-tag text-meta-tag">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>INDEX RECORD // ATELIER COMPENDIUM</span>
          </div>
          <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Curated Transmissions</h2>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-xl">Dual-stream intellectual output. Switch between engineering architectures, high-concurrency systems, and contemplative studio essays.</p>
        </div>
        <div class="inline-flex items-center p-space-3xs bg-surface-container rounded-full shadow-inner self-start md:self-auto">
          <button class="relative flex items-center gap-space-xs px-space-md py-space-xs rounded-full font-button-label text-button-label transition-all duration-200 shadow-sm bg-surface-container-lowest text-primary">
            <Icon name="terminal" class="w-[1rem] h-[1rem]" />
            <span>Tech Hub</span>
            <span class="ml-space-3xs font-meta-tag text-meta-tag px-space-2xs py-0.5 rounded-full bg-primary/10 text-primary">28</span>
          </button>
        </div>
      </div>

      <div class="mt-space-lg grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
        <div class="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
          <span class="font-meta-tag text-meta-tag text-tertiary">SYSTEM MATURITY</span>
          <div class="flex items-baseline gap-space-2xs mt-space-3xs">
            <span class="font-headline-sm text-headline-sm text-on-surface">19</span>
            <span class="font-meta-tag text-meta-tag text-secondary">Evergreen</span>
          </div>
        </div>
        <div class="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
          <span class="font-meta-tag text-meta-tag text-tertiary">LINES OF NOTE CODE</span>
          <div class="flex items-baseline gap-space-2xs mt-space-3xs">
            <span class="font-headline-sm text-headline-sm text-on-surface">4,812</span>
            <span class="font-meta-tag text-meta-tag text-primary">snippets</span>
          </div>
        </div>
        <div class="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
          <span class="font-meta-tag text-meta-tag text-tertiary">ACTIVE REPOSITORIES</span>
          <div class="flex items-baseline gap-space-2xs mt-space-3xs">
            <span class="font-headline-sm text-headline-sm text-on-surface">12</span>
            <span class="font-meta-tag text-meta-tag text-tertiary">mirrored</span>
          </div>
        </div>
        <div class="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
          <span class="font-meta-tag text-meta-tag text-tertiary">CYCLE FREQUENCY</span>
          <div class="flex items-baseline gap-space-2xs mt-space-3xs">
            <span class="font-headline-sm text-headline-sm text-on-surface">3.4d</span>
            <span class="font-meta-tag text-meta-tag text-secondary">last commit</span>
          </div>
        </div>
      </div>
    </section>

    <main class="w-full max-w-content-measure-wide mx-auto px-space-lg pb-space-4xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        <aside class="lg:col-span-3 space-y-space-lg">
          <div class="p-space-md rounded-xl bg-surface-container-low shadow-sm transition-all duration-300">
            <div class="flex items-center justify-between">
              <span class="font-meta-tag text-meta-tag text-primary tracking-widest uppercase"> ENGINEERING CONTEXT </span>
              <Icon name="code" class="w-4.5 h-4.5 text-primary" />
            </div>
            <p class="mt-space-2xs font-body-sm text-body-sm text-on-surface-variant">Filtering by architecture, compiled performance, and systemic invariants.</p>
          </div>
        </aside>

        <section class="lg:col-span-9 space-y-space-lg">
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest shadow-sm">
            <div class="relative flex-1">
              <Icon name="search" class="absolute left-space-sm top-1/2 -translate-y-1/2 text-tertiary w-5 h-5" />
              <input
                class="w-full pl-10 pr-space-md py-space-xs font-body-sm text-body-sm bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all"
                placeholder="Search architecture, memory bounds, or benchmarks..."
                type="text"
              />
            </div>
          </div>

          <div class="space-y-space-md">
            <article v-for="article in data.articles" :key="article?.id" class="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 flex flex-col space-y-space-sm group">
              <div class="flex flex-wrap items-center justify-between gap-space-xs">
                <div class="flex items-center gap-space-xs">
                  <span class="font-meta-tag text-meta-tag px-space-xs py-space-3xs rounded bg-primary/10 text-primary font-semibold">{{ article?.category?.name?.toUpperCase() }}</span>
                  <span class="inline-flex items-center gap-space-3xs font-meta-tag text-meta-tag px-space-xs py-space-3xs rounded-full bg-secondary-container/40 text-secondary">
                    <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> {{ article?.status?.toUpperCase() }}
                  </span>
                  <span class="font-meta-tag text-meta-tag text-tertiary hidden sm:inline">{{ article?.publishedAt }}</span>
                </div>
                <div class="flex items-center gap-space-xs font-meta-tag text-meta-tag text-tertiary">
                  <span class="flex items-center gap-1"><Icon name="schedule" class="w-[1rem] h-[1rem]" /> {{ article?.readingTime }} min read</span>
                </div>
              </div>
              <div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors cursor-pointer">{{ article?.title }}</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs line-clamp-2">{{ article?.excerpt }}</p>
              </div>
              <div class="flex flex-wrap items-center justify-between pt-space-xs text-on-surface-variant">
                <div class="flex items-center gap-space-xs">
                  <span class="font-meta-tag text-meta-tag text-tertiary">TAGS:</span>
                  <span v-for="tag in article?.articleTags" :key="tag.tag.id" class="font-meta-tag text-meta-tag px-space-2xs py-space-3xs rounded bg-surface-container text-on-surface-variant">#{{ tag.tag.name }}</span>
                </div>
                <NuxtLink class="inline-flex items-center gap-space-2xs font-button-label text-button-label text-primary hover:text-primary-container transition-colors" :to="`/article/${article.contentType}/${article.slug}`">
                  <span>Read Note</span>
                  <Icon name="arrow_forward" class="w-[1rem] h-[1rem]" />
                </NuxtLink>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
