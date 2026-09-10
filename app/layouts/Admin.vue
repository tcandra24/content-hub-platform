<script lang="ts" setup>
const navNuxtLinks = ref([
  { path: "/admin", label: "Dashboard & Articles", icon: "dashboard" },
  { path: "/admin/editor", label: "New Post Editor", icon: "edit_note" },
  { path: "#", label: "Media Library", icon: "perm_media" },
  { path: "#", label: "System Settings", icon: "settings" },
]);

const route = useRoute();

const isActive = (NuxtLink: { path: string }) => {
  return route.path === NuxtLink.path || (NuxtLink.path === "/articles" && route.path === "/");
};
</script>

<template>
  <div className="bg-background font-body-md text-on-surface antialiased min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant/30 z-50 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="h-16 px-space-lg flex items-center gap-space-sm border-b border-outline-variant/30">
          <NuxtImg
            alt="Atelier Garden Logo"
            className="h-7 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRMXroZIvYWvsJaXaa8ttDSPvk3qeGq6TprkDYInV7GPxiWD8UlH3DTZvLFIvIcI9c6lqE3lLeB0zjFoL0WV0iOl4ZYZ7IsBVm8_C83ZazsjrFoCFiXc2dhjF_gDW6AV-cojIvirDchm-BApid_sxQoXcmqAZtCMO-8G9ZpPSmgaEnq-bY0KDrNSTgsIbrvwL8ud87Y2r70Xi3rlZzfuWeBRDHx7X9ysobza8ZxyufBuNBacxTIKhp"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-[1.125rem] text-on-surface leading-none">Studio CMS</span>
            <span className="font-meta-tag text-meta-tag text-tertiary">WORKSPACE v2.4</span>
          </div>
        </div>
        <div className="px-space-md py-space-sm">
          <div className="font-meta-tag text-meta-tag text-tertiary px-space-sm mb-space-xs uppercase tracking-wider">Content Curation</div>
          <nav className="space-y-space-3xs">
            <NuxtLink
              v-for="link in navNuxtLinks"
              :key="link.path"
              :to="link.path"
              :class="[isActive(link) ? 'bg-surface-container-highest text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface']"
              class="flex items-center gap-space-sm px-space-sm py-space-xs rounded transition-colors font-body-sm text-body-sm"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
      </div>
      <div className="p-space-md border-t border-outline-variant/30 bg-surface-container/50">
        <div className="flex items-center gap-space-sm">
          <NuxtImg
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border border-outline-variant/40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANsUUSyBs7Cr_g4fCeUJ84X_9eoXBo59JVmyO5_yZcV2mtI_fR5n4YNdKflLFeIEPFRXbm4TSpvDnp2S8CZQGuvMYIGBN1wMdkl9JN7YYeejqeMfcONsgw0Nh2MqYd_c6lD9sZ3Om9M0wSoRzugirqyuWcJgai94dfvQjo41c-YVWVSLzJsD-kb_9kJSiEg8PQMDZ9J2qatfzI558Y5fpxCLsqsRIbiWxkD8X0Z-rnxwqN-cLTuy44"
          />
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-body-sm text-body-sm font-semibold text-on-surface truncate">Lead Curator</span>
            <span className="font-meta-tag text-meta-tag text-secondary truncate">admin@chronicle.io</span>
          </div>
          <NuxtLink to="/" className="text-tertiary hover:text-error transition-colors" title="Sign out">
            <Icon name="logout" className="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </aside>

    <div className="pl-64 flex flex-col min-h-screen">
      <header className="fixed top-0 left-64 right-0 h-16 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 z-40 px-space-lg flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs font-meta-tag text-meta-tag text-primary bg-primary-fixed/40 border border-primary/20 rounded font-semibold tracking-wider">ADMIN ENCLAVE</span>
          <span className="text-outline-variant/60">/</span>
          <span className="font-meta-tag text-meta-tag text-tertiary hidden sm:inline">DIGITAL GARDEN ENGINE</span>
        </div>
        <div className="flex items-center gap-space-md">
          <NuxtLink
            to="/"
            className="inline-flex items-center gap-space-2xs px-space-sm py-space-xs font-button-label text-button-label text-secondary bg-secondary-container/40 border border-secondary/20 rounded hover:bg-secondary-container transition-colors"
          >
            <Icon name="visibility" className="w-4.5 h-4.5" />
            <span>Live Garden</span>
          </NuxtLink>
          <div className="h-5 w-px bg-outline-variant/40"></div>
          <button aria-label="Notifications" className="relative p-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors" type="button">
            <Icon name="notifications" className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <div className="flex items-center gap-space-xs pl-space-xs">
            <NuxtImg
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-outline-variant/40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANsUUSyBs7Cr_g4fCeUJ84X_9eoXBo59JVmyO5_yZcV2mtI_fR5n4YNdKflLFeIEPFRXbm4TSpvDnp2S8CZQGuvMYIGBN1wMdkl9JN7YYeejqeMfcONsgw0Nh2MqYd_c6lD9sZ3Om9M0wSoRzugirqyuWcJgai94dfvQjo41c-YVWVSLzJsD-kb_9kJSiEg8PQMDZ9J2qatfzI558Y5fpxCLsqsRIbiWxkD8X0Z-rnxwqN-cLTuy44"
            />
          </div>
        </div>
      </header>

      <main className="w-full pt-16 bg-background flex-1 p-space-lg">
        <slot />
      </main>
    </div>
  </div>
</template>
