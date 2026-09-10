<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;
console.log(slug);

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
    <div class="sticky top-16 z-40 w-full bg-surface-container-low h-1">
      <div class="h-full bg-primary transition-all duration-150" :style="{ width: `${progress}%` }"></div>
    </div>
    <article class="w-full max-w-content-measure-wide mx-auto px-space-md lg:px-space-xl py-space-2xl">
      <header class="max-w-content-measure-prose mx-auto text-center space-y-space-md mb-space-2xl">
        <div class="flex items-center justify-center gap-space-xs font-meta-tag text-meta-tag text-tertiary">
          <Link class="hover:text-primary transition-colors" to="/">Digital Garden</Link>
          <span>/</span>
          <Link class="hover:text-primary transition-colors" to="/personal">Personal</Link>
          <span>/</span>
          <span class="text-on-surface-variant">Solitude &amp; Velocity</span>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-space-xs pt-space-2xs">
          <span class="inline-flex items-center px-space-xs py-space-3xs rounded-full bg-primary-fixed text-on-primary-fixed font-meta-tag text-meta-tag tracking-wider uppercase"> Personal · Essay &amp; Reflection </span>
          <span class="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs rounded-full bg-surface-container-high text-on-surface-variant font-meta-tag text-meta-tag">
            <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Budding Note
          </span>
          <span class="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs rounded-full bg-surface-container text-tertiary font-meta-tag text-meta-tag">
            <Icon name="schedule" class="w-3.5 h-3.5" />
            7 min reflection
          </span>
        </div>
        <h1 class="font-display-hero text-headline-lg lg:text-display-hero text-on-surface tracking-tight text-balance pt-space-xs leading-none">On Solitude and the Velocity of Creative Thought</h1>
        <p class="font-headline-sm text-headline-sm text-on-surface-variant max-w-xl mx-auto italic font-normal leading-relaxed text-balance">
          Why continuous collaboration accelerates execution, but prolonged unobserved isolation remains the only crucible for original architectural intuition.
        </p>
      </header>

      <figure class="max-w-4xl mx-auto mb-space-3xl">
        <div class="relative w-full aspect-video lg:aspect-21/9 rounded-xl overflow-hidden shadow-md bg-surface-container-high">
          <img
            class="w-full h-full object-cover"
            alt="Atmospheric studio desk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnxR_3sjKlN4MH1Xle6s8Z9_-DHnZFNXQfqBDSRqe8vvNAzNRbgtSyJOyvkRuWydTG3OBieruCI0YgV-vIATMkjzM3l4i7dC9Mfw6J6_jXkb1Mar71NYE1XM4vXTL0YBnQsY8Rr3bcPVHDqXkxDxDj345PL3mQANIrNfWlEEqbVhiw3397IEydBbycLrDqD5YtUgVpYEpKwzAPWGoOQxE3Lp2a3878f3OmBRJbi2D7nwZYGFLYyAOn"
          />
          <div class="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
          <div class="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between text-surface-container-lowest">
            <div class="font-meta-tag text-meta-tag tracking-wider uppercase opacity-90">Plate No. 04 — Atelier North Window · 07:14 AM</div>
          </div>
        </div>
      </figure>

      <div class="max-w-content-measure-prose mx-auto space-y-space-lg font-body-lg text-body-lg text-on-surface leading-loose">
        <p class="first-letter:font-headline-lg first-letter:text-[4.25rem] first-letter:leading-15 first-letter:float-left first-letter:mr-space-sm first-letter:pr-space-3xs first-letter:text-primary first-letter:font-serif">
          We inhabit an era obsessed with conversational momentum. In modern engineering suites and contemporary product guilds, silence is frequently misdiagnosed as an organizational defect.
        </p>
        <p class="text-on-surface-variant font-body-md">There is unquestionable utility in this collective engine: it refines edge cases, standardizes syntax, and distributes operational accountability.</p>

        <div class="py-space-xl flex items-center justify-center gap-space-sm text-tertiary">
          <div class="h-0.5 w-12 bg-surface-container-high rounded-full"></div>
          <Icon name="eco" class="w-5 h-5 text-secondary" />
          <span class="font-meta-tag text-meta-tag tracking-widest text-tertiary">I. THE REACTION TAX</span>
          <div class="h-0.5 w-12 bg-surface-container-high rounded-full"></div>
        </div>

        <h2 class="font-headline-md text-headline-md text-on-surface tracking-tight">The Silent Paralysis of Early Observation</h2>
        <p class="text-on-surface-variant font-body-md">
          Consider what occurs the moment an undeveloped architectural thesis is communicated to an audience of three colleagues. Almost instantaneously, your cognition pivots from generative curiosity toward defensive justification.
        </p>

        <div class="my-space-2xl pl-space-lg py-space-sm bg-surface-container-low rounded-r-xl shadow-sm relative overflow-hidden">
          <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
          <blockquote class="font-headline-md text-headline-sm lg:text-headline-md text-on-surface italic font-normal">
            “An idea subjected prematurely to collaborative consensus is rounded off until it fits the pre-existing container of shared mediocrity.”
          </blockquote>
        </div>
      </div>
    </article>
  </div>
</template>
