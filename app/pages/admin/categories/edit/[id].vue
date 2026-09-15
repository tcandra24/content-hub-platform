<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "admin",
});

import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { categorySchema } from "~/shared/schemas/category";

const route = useRoute();
const { id } = route.params;

const submitError = ref("");

const { data } = await useFetch(`/api/admin/categories/${id}`);

if (!data.value?.category) {
  throw createError({ statusCode: 404, message: "Category not found" });
}

const { handleSubmit, isSubmitting, defineField, errors } = useForm({
  validationSchema: toTypedSchema(categorySchema),
  initialValues: {
    name: data.value?.category.name,
    slug: data.value?.category.slug,
    contentType: data.value?.category.contentType,
  },
});

const [name, nameAttrs] = defineField("name");
const [slug, slugAttrs] = defineField("slug");
const [contentType, contentTypeAttrs] = defineField("contentType");

const onSubmit = handleSubmit(async (values) => {
  submitError.value = "";

  try {
    await $fetch(`/api/admin/categories/${id}`, {
      method: "PUT",
      body: values,
    });

    navigateTo("/admin/categories");
  } catch (error: any) {
    submitError.value = error?.data?.message || "Failed to create category";
  }
});

watch(name, (newName) => {
  if (newName) {
    slug.value = newName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
});
</script>

<template>
  <div class="flex flex-col w-full max-w-3xl mx-auto">
    <div class="flex items-center gap-space-md mb-space-lg">
      <NuxtLink class="inline-flex items-center gap-space-2xs text-on-surface-variant hover:text-primary font-button-label text-button-label transition-colors" to="/admin/categories">
        <Icon name="arrow_back" class="w-5 h-5" />
        <span>Back to Categories</span>
      </NuxtLink>
    </div>

    <div class="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm border border-outline-variant/30">
      <div class="mb-space-lg">
        <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Create New Category</h1>
        <p class="font-body-sm text-body-sm text-on-surface-variant mt-space-3xs">Add a new category to organize your content.</p>
      </div>

      <form @submit.prevent="onSubmit" class="space-y-space-lg">
        <div class="space-y-space-2xs">
          <label class="font-button-label text-button-label text-on-surface block" htmlFor="category-name">Category Name</label>
          <input
            id="category-name"
            type="text"
            v-model="name"
            v-bind="nameAttrs"
            class="w-full px-space-md py-space-sm bg-surface-container-low text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
          <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
        </div>

        <div class="space-y-space-2xs">
          <label class="font-button-label text-button-label text-on-surface block" htmlFor="category-slug"> Slug</label>
          <input
            id="category-slug"
            type="text"
            v-model="slug"
            v-bind="slugAttrs"
            class="w-full px-space-md py-space-sm bg-surface-container-low text-on-surface placeholder:text-outline-variant font-code-inline text-code-inline rounded focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
          <span v-if="errors.slug" class="text-red-500 text-sm">{{ errors.slug }}</span>
        </div>

        <div class="space-y-space-2xs">
          <label class="font-button-label text-button-label text-on-surface block" htmlFor="category-slug"> Content Type</label>
          <select
            id="category-content-type"
            v-model="contentType"
            v-bind="contentTypeAttrs"
            name="category-content-type"
            class="w-full px-space-md py-space-sm bg-surface-container-low text-on-surface placeholder:text-outline-variant font-code-inline text-code-inline rounded focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          >
            <option value="tech">TECH</option>
            <option value="personal">PERSONAL</option>
          </select>
          <span v-if="errors.contentType" class="text-red-500 text-sm">{{ errors.contentType }}</span>
        </div>

        <div class="pt-space-md flex gap-space-sm border-t border-outline-variant/30">
          <button type="button" class="py-space-sm px-space-md rounded font-button-label text-button-label bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors">Cancel</button>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="flex items-center justify-center gap-space-2xs py-space-sm px-space-lg rounded font-button-label text-button-label bg-primary text-on-primary hover:bg-primary-container shadow-sm transition-all"
          >
            <Icon name="check" class="w-5 h-5" />
            <span>{{ isSubmitting ? "Updating..." : "Update Category" }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
