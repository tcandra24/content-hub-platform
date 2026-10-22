<script lang="ts" setup>
import type ConfirmDialog from "~/components/ConfirmDialog.vue";

definePageMeta({
  middleware: "auth",
  layout: "admin",
});

const { data, refresh } = await useFetch("/api/admin/categories");
const confirmDialog = ref<InstanceType<typeof ConfirmDialog>>();

const handleDelete = async (id: string) => {
  const { isCanceled } = await confirmDialog.value!.reveal();

  if (isCanceled) return;

  try {
    await $fetch(`/api/admin/categories/${id}`, {
      method: "DELETE",
    });

    refresh();
  } catch (error) {
    console.error("Failed to delete category:", error);
  }
};
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-col lg:flex-row lg:items-end justify-between pb-space-lg gap-space-md">
      <div>
        <div class="flex items-center gap-space-xs mb-space-3xs">
          <span class="font-meta-tag text-meta-tag text-primary uppercase tracking-wider">Taxonomy</span>
          <span class="text-tertiary">/</span>
          <span class="font-meta-tag text-meta-tag text-tertiary">Category Management</span>
        </div>
        <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Categories</h1>
        <p class="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-space-3xs">Organize dispatches and essays into logical domains to help readers navigate the digital garden.</p>
      </div>
      <div class="flex items-center gap-space-sm self-start lg:self-auto">
        <NuxtLink to="/admin/categories/new" class="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-primary text-on-primary font-button-label text-button-label hover:bg-primary-container shadow-sm transition-all">
          <Icon name="tags" class="w-4.5 h-4.5" />
          <span>+ Create Category</span>
        </NuxtLink>
      </div>
    </div>

    <div class="bg-surface-container-low rounded shadow-sm overflow-hidden mb-space-md">
      <div v-if="data?.categories.length === 0" class="py-space-2xl px-space-lg text-center flex flex-col items-center justify-center max-w-lg mx-auto">
        <div class="w-16 h-16 rounded-2xl bg-surface-container-highest/70 flex items-center justify-center text-primary border border-outline-variant/30 mb-space-md shadow-inner">
          <Icon name="folder_plus" class="w-8 h-8 opacity-70" />
        </div>

        <span class="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs rounded-full bg-surface-container font-meta-tag text-meta-tag text-tertiary mb-space-xs">
          <span class="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
          Empty Taxonomy
        </span>

        <h3 class="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-2xs">No Category Yet</h3>

        <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-lg">Categories group your posts based on their subject matter. Create your first category to begin structuring your article taxonomy.</p>

        <div class="flex flex-col sm:flex-row items-center gap-space-sm w-full justify-center">
          <NuxtLink
            to="/admin/categories/new"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-space-2xs px-space-md py-space-xs rounded bg-primary text-on-primary font-button-label text-button-label hover:bg-primary-container shadow-sm transition-all"
          >
            <Icon name="tags" class="w-[1.125rem] h-[1.125rem]" />
            <span>+ Create First Category</span>
          </NuxtLink>
        </div>
      </div>
      <div v-else class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-surface-container text-tertiary font-meta-tag text-meta-tag uppercase tracking-wider">
              <th class="py-space-sm px-space-md font-medium">Category Name</th>
              <th class="py-space-sm px-space-md font-medium">Slug</th>
              <th class="py-space-sm px-space-md font-medium">Content Type</th>
              <th class="py-space-sm px-space-md font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant/20 text-on-surface">
            <tr v-for="category in data?.categories" :key="category.id" class="hover:bg-surface-container/60 transition-colors group">
              <td class="py-space-md px-space-md align-middle">
                <div class="flex items-center gap-space-sm">
                  <div class="w-8 h-8 rounded bg-secondary-container/30 flex items-center justify-center text-secondary">
                    <Icon name="folder" class="w-[1rem] h-[1rem]" />
                  </div>
                  <span class="font-headline-sm text-headline-sm text-on-surface"> {{ category.name }} </span>
                </div>
              </td>
              <td class="py-space-md px-space-md align-middle">
                <span class="font-code-inline text-code-inline text-tertiary">/{{ category.slug }}</span>
              </td>
              <td class="py-space-md px-space-md align-middle">
                <span class="inline-flex items-center justify-center min-w-[2rem] px-2 py-0.5 rounded-full bg-surface-container font-meta-tag text-meta-tag text-on-surface-variant"> {{ category.contentType.toUpperCase() }} </span>
              </td>
              <td class="py-space-md px-space-md align-middle text-right">
                <div class="flex items-center justify-end gap-space-2xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <NuxtLink :to="`/admin/categories/edit/${category.id}`" class="p-space-2xs text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors inline-flex" title="Edit Category">
                    <Icon name="edit_note" class="w-5 h-5" />
                  </NuxtLink>
                  <button @click="handleDelete(category.id)" class="p-space-2xs text-on-surface-variant hover:text-error hover:bg-error/10 rounded transition-colors" title="Delete Category" type="button">
                    <Icon name="delete" class="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <ConfirmDialog ref="confirmDialog" title="Delete Category" message="This action cannot be undone. Are you sure you want to proceed?" />
      </div>
    </div>
  </div>
</template>
