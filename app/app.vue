<script lang="ts" setup>
useHead({
  title: "Chronicle & Code",
  meta: [
    { name: "description", content: "A developer's digital garden" },
    { property: "og:title", content: "Chronicle & Code" },
    { property: "og:description", content: "A developer's digital garden" },
    { property: "og:image", content: "/logo.png" },
  ],
});
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
