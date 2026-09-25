<script lang="ts" setup>
const navLinks = ref([
  { path: "/", label: "Articles" },
  { path: "/tech", label: "Tech" },
  { path: "/personal", label: "Personal" },
  { path: "/about", label: "About & Projects" },
]);

const route = useRoute();

const { session } = useAuth();

const isActive = (link: { path: string }) => {
  return route.path === link.path || (link.path === "/articles" && route.path === "/");
};
</script>

<template>
  <div class="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
    <header class="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/30">
      <div class="h-16 max-w-content-measure-wide mx-auto px-space-lg flex items-center justify-between gap-space-md">
        <NuxtLink to="/" class="flex items-center gap-space-sm">
          <NuxtImg alt="Chronicle & Code" class="h-8 w-auto object-contain" src="/logo.png" />
          <div class="flex flex-col">
            <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">Chronicle &amp; Code</span>
            <span class="font-meta-tag text-meta-tag text-tertiary hidden sm:inline tracking-wider">A DEVELOPER'S DIGITAL GARDEN</span>
          </div>
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-space-lg">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" :class="[isActive(link) ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface']" class="font-body-sm text-body-sm transition-colors">
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-space-sm">
          <NuxtLink to="/search" aria-label="Search notes" class="p-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors">
            <Icon name="search" class="w-5 h-5" />
          </NuxtLink>
          <template v-if="session?.user">
            <NuxtLink
              to="/admin"
              class="inline-flex items-center gap-space-2xs px-space-sm py-space-xs font-button-label text-button-label text-tertiary hover:text-on-surface bg-surface-container border border-outline-variant/40 rounded hover:bg-surface-container-high transition-colors"
            >
              <Icon name="tune" class="w-[1rem] h-[1rem]" />
              <span class="hidden md:inline">CMS Studio</span>
            </NuxtLink>
            <NuxtImg alt="Profile" class="w-8 h-8 rounded-full object-cover border border-outline-variant/40" :src="`https://ui-avatars.com/api/?name=${session.user.name}&background=random&color=ffffff&size=100`" />
          </template>
          <template v-else>
            <NuxtLink
              to="/admin/login"
              class="inline-flex items-center gap-space-2xs px-space-sm py-space-xs font-button-label text-button-label text-tertiary hover:text-on-surface bg-surface-container border border-outline-variant/40 rounded hover:bg-surface-container-high transition-colors"
            >
              <Icon name="sign_in" class="w-[1rem] h-[1rem]" />
              <span class="hidden md:inline">Sign In</span>
            </NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <main class="w-full pt-16 bg-background flex-1">
      <slot />
    </main>

    <footer class="w-full bg-surface-container-low border-t border-outline-variant/30 mt-auto">
      <div class="max-w-content-measure-wide mx-auto px-space-lg py-space-3xl">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-space-2xl mb-space-2xl">
          <div class="md:col-span-5 space-y-space-sm">
            <div class="flex items-center gap-space-xs">
              <NuxtImg
                alt="Atelier Garden Logo"
                class="h-6 w-auto object-contain opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRMXroZIvYWvsJaXaa8ttDSPvk3qeGq6TprkDYInV7GPxiWD8UlH3DTZvLFIvIcI9c6lqE3lLeB0zjFoL0WV0iOl4ZYZ7IsBVm8_C83ZazsjrFoCFiXc2dhjF_gDW6AV-cojIvirDchm-BApid_sxQoXcmqAZtCMO-8G9ZpPSmgaEnq-bY0KDrNSTgsIbrvwL8ud87Y2r70Xi3rlZzfuWeBRDHx7X9ysobza8ZxyufBuNBacxTIKhp"
              />
              <span class="font-headline-sm text-headline-sm text-on-surface">Chronicle &amp; Code</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm">An open-access notebook documenting systemic software architecture, quiet interfaces, and deliberate craftsmanship.</p>
            <div class="pt-space-xs">
              <span class="inline-flex items-center gap-space-xs font-meta-tag text-meta-tag text-secondary">
                <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                GARDEN HEALTH: EVERGREEN
              </span>
            </div>
          </div>
          <div class="md:col-span-4 space-y-space-sm">
            <h4 class="font-button-label text-button-label text-on-surface uppercase tracking-wider">Dispatches</h4>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Occasional architectural essays and seed notes delivered to your inbox.</p>
            <form class="flex items-center gap-space-xs">
              <input
                class="w-full px-space-sm py-space-xs font-body-sm text-body-sm bg-surface-container-lowest border border-outline-variant/50 rounded text-on-surface placeholder:text-outline focus:outline-none focus:border-primary"
                placeholder="curator@domain.org"
                type="email"
              />
              <button class="px-space-md py-space-xs bg-primary text-on-primary font-button-label text-button-label rounded hover:bg-primary-container transition-colors shrink-0" type="button">Subscribe</button>
            </form>
          </div>
          <div class="md:col-span-3 space-y-space-sm">
            <h4 class="font-button-label text-button-label text-on-surface uppercase tracking-wider">Network &amp; Colophon</h4>
            <ul class="space-y-space-2xs font-meta-tag text-meta-tag">
              <li class="flex items-center gap-space-xs"><Icon name="code" class="w-[1rem] h-[1rem] text-tertiary" /><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">github.com/chronicle</a></li>
              <li class="flex items-center gap-space-xs"><Icon name="alternate_email" class="w-[1rem] h-[1rem] text-tertiary" /><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">x.com/devjournal</a></li>
              <li class="flex items-center gap-space-xs"><Icon name="badge" class="w-[1rem] h-[1rem] text-tertiary" /><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">read.cv/engineer</a></li>
              <li class="flex items-center gap-space-xs"><Icon name="rss_feed" class="w-[1rem] h-[1rem] text-tertiary" /><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">index.xml (Atom)</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-space-lg border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-meta-tag text-meta-tag text-tertiary">
          <div>Type set in Newsreader &amp; Plus Jakarta Sans. Built with quiet rigor.</div>
          <div>© 2024 Chronicle &amp; Code. Content licensed CC BY-NC 4.0.</div>
        </div>
      </div>
    </footer>
  </div>
</template>
