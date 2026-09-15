<script setup lang="ts">
const props = defineProps<{
  title: string;
  message: string;
}>();

const { isRevealed, reveal, confirm, cancel } = useConfirmDialog();

defineExpose({ reveal });
</script>

<template>
  <Teleport to="body">
    <div v-if="isRevealed" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-surface-container-lowest rounded-xl p-space-lg max-w-sm w-full shadow-lg">
        <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{{ title }}</h3>
        <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">{{ message }}</p>
        <div class="flex justify-end gap-space-xs">
          <button @click="cancel" class="py-space-xs px-space-md rounded font-button-label text-button-label bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors">Cancel</button>
          <button @click="confirm" class="py-space-xs px-space-md rounded font-button-label text-button-label bg-red-500 hover:bg-red-600 text-white transition-colors">Delete</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
