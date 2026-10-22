<script lang="ts" setup>
const { renderMarkdown } = useMarkdown();

const route = useRoute();
const slug = route.params.slug;

const { formatFull } = useDateFormat();
const { data } = await useFetch(`/api/articles/${slug}`);

const renderedContent = computed(() => {
  if (!data?.value?.article?.content) return "";
  return renderMarkdown(data?.value?.article?.content);
});

const progress = ref(0);

const handleScroll = () => {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPos = window.scrollY;
  progress.value = (scrollPos / docHeight) * 100;
};

onMounted(() => window.addEventListener("scroll", handleScroll));

onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="fixed top-16 left-0 w-full h-1 bg-surface-container-high/40 z-40" id="reading-progress-container">
      <div class="h-full bg-primary transition-all duration-150 ease-out" :style="{ width: `${progress}%` }"></div>
    </div>
    <div class="max-w-content-measure-wide mx-auto px-space-lg py-space-xl w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
        <article class="lg:col-span-8 flex flex-col max-w-content-measure-prose w-full">
          <nav aria-label="Breadcrumb" class="flex items-center gap-space-xs font-meta-tag text-meta-tag text-tertiary mb-space-md">
            <Link class="hover:text-primary transition-colors" to="/">Home</Link>
            <span>/</span>
            <Link class="hover:text-primary transition-colors" to="/tech">Tech</Link>
            <span>/</span>
            <span class="text-on-surface">Architecture</span>
          </nav>
          <div class="flex flex-wrap items-center gap-space-xs mb-space-lg">
            <span class="font-meta-tag text-meta-tag px-space-xs py-space-3xs rounded bg-secondary-container/30 text-secondary border border-secondary/20"> {{ data?.article?.category?.name?.toUpperCase() }} </span>
            <span class="text-outline-variant font-meta-tag text-meta-tag">•</span>
            <span class="font-meta-tag text-meta-tag text-tertiary flex items-center gap-1">
              <Icon name="schedule" class="w-[1rem] h-[1rem]" />
              {{ data?.article?.readingTime }} min read
            </span>
            <span class="text-outline-variant font-meta-tag text-meta-tag">•</span>
            <span class="inline-flex items-center gap-1.5 px-space-xs py-space-3xs rounded-full bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              {{ data?.article?.status?.toUpperCase() }} <span class="text-tertiary">({{ formatFull(data?.article?.publishedAt) }})</span>
            </span>
          </div>

          <h1 class="font-headline-lg text-headline-lg text-on-surface mb-space-md tracking-tight leading-tight">{{ data?.article?.title }}</h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-space-xl leading-relaxed">
            {{ data?.article?.excerpt }}
          </p>

          <div class="space-y-space-lg mt-space-md">
            <section class="pt-space-lg space-y-space-sm scroll-mt-24" id="hydration-tax">
              <div v-html="renderedContent"></div>
            </section>
          </div>
        </article>

        <aside class="lg:col-span-4 sticky top-24 space-y-space-lg">
          <div class="p-space-lg rounded-xl bg-surface-container-low space-y-space-md">
            <div class="flex items-center justify-between pb-space-xs">
              <h3 class="font-headline-sm text-headline-sm text-on-surface">On this page</h3>
              <span class="font-meta-tag text-meta-tag text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">INDEX</span>
            </div>
            <nav class="space-y-space-xs font-body-sm text-body-sm">
              <a class="block py-1 px-space-xs rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all" href="#hydration-tax">1. The Hydration Tax</a>
              <a class="block py-1 px-space-xs rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all" href="#streaming-pipelines">2. Streaming Pipelines in Nuxt</a>
            </nav>
          </div>

          <div class="p-space-md rounded-xl bg-secondary-container/20 text-on-surface-variant space-y-space-2xs">
            <div class="flex items-center gap-space-xs text-secondary font-button-label text-button-label">
              <Icon name="eco" class="w-[1rem] h-[1rem]" />
              <span>Digital Garden Stage</span>
            </div>
            <p class="font-body-sm text-body-sm text-tertiary leading-relaxed">This article is classified as <strong class="text-on-surface">Evergreen</strong>. Code samples are actively verified against Nuxt v3.14+ and nitro nightly builds.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<style>
.article-content h1,
.article-content h2,
.article-content h3 {
  font-weight: 700;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.article-content p {
  margin-bottom: 1em;
  line-height: 1.7;
}

.article-content pre {
  padding: 1em;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 1em;
}

.article-content code:not(pre code) {
  background: var(--color-surface-container);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}

.article-content a {
  color: var(--color-primary);
  text-decoration: underline;
}

.article-content blockquote {
  border-left: 3px solid var(--color-primary);
  padding-left: 1em;
  color: var(--color-on-surface-variant);
  font-style: italic;
}
</style>
