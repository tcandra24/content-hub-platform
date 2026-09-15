<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "admin",
});

import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { articleSchema } from "~/shared/schemas/article";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

// Fetch daftar kategori untuk dropdown — sesuaikan URL endpoint-nya
const { data } = await useFetch("/api/admin/categories");

const { handleSubmit, errors, defineField, isSubmitting } = useForm({
  validationSchema: toTypedSchema(articleSchema),
  initialValues: {
    contentType: "tech",
    tags: [],
    status: "draft",
  },
});

const [title, titleAttrs] = defineField("title");
const [slug, slugAttrs] = defineField("slug");
const [excerpt, excerptAttrs] = defineField("excerpt");
const [content, contentAttrs] = defineField("content");
const [categoryId, categoryIdAttrs] = defineField("categoryId");
const [contentType, contentTypeAttrs] = defineField("contentType");
const [readingTime, readingTimeAttrs] = defineField("readingTime");
const [seoTitle, seoTitleAttrs] = defineField("seoTitle");
const [seoDescription, seoDescriptionAttrs] = defineField("seoDescription");
const [tags, tagsAttrs] = defineField("tags");

// Auto-generate slug dari title, kecuali user sudah edit slug manual
const slugManuallyEdited = ref(false);
watch(slug, (val, oldVal) => {
  if (val !== generateSlug(title.value || "")) slugManuallyEdited.value = true;
});
watch(title, (newTitle) => {
  if (!slugManuallyEdited.value && newTitle) {
    slug.value = generateSlug(newTitle);
  }
});
function generateSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Tag input custom — ketik nama tag, tekan Enter/koma untuk menambahkan
const tagInput = ref("");

function addTag() {
  const value = tagInput.value.trim().replace(/^#/, "");
  if (!value) return;
  const current = tags.value ?? [];
  if (!current.includes(value)) {
    tags.value = [...current, value];
  }
  tagInput.value = "";
}

function removeTag(tag: string) {
  tags.value = (tags.value ?? []).filter((t) => t !== tag);
}

function handleTagKeydown(e: KeyboardEvent) {
  if (e.key === "Enter" || e.key === ",") {
    e.preventDefault();
    addTag();
  }
}

// Submit — status ditentukan oleh tombol mana yang diklik (Save Draft / Publish)
const submitError = ref("");
const pendingStatus = ref<"draft" | "published">("draft");

const onSubmit = handleSubmit(async (values) => {
  submitError.value = "";

  try {
    await $fetch("/api/admin/articles", {
      method: "POST",
      body: { ...values, status: pendingStatus.value },
    });
    navigateTo("/admin");
  } catch (error: any) {
    submitError.value = error?.data?.message || "Failed to save article";
  }
});

function handleSaveDraft() {
  pendingStatus.value = "draft";
  onSubmit();
}

function handlePublish() {
  pendingStatus.value = "published";
  onSubmit();
}
</script>

<template>
  <div class="flex flex-col w-full">
    <header class="w-full bg-surface-container-low rounded-xl px-space-md py-space-sm shadow-sm mb-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm">
      <div class="flex items-center gap-space-md w-full md:w-auto">
        <NuxtLink class="inline-flex items-center gap-space-2xs text-on-surface-variant hover:text-primary font-button-label text-button-label transition-colors" to="/admin">
          <Icon name="ArrowLeft" class="w-5 h-5" />
          <span class="hidden sm:inline">Articles</span>
        </NuxtLink>
      </div>
      <div class="flex items-center gap-space-xs w-full md:w-auto justify-end">
        <button
          @click="handleSaveDraft"
          :disabled="isSubmitting"
          class="inline-flex items-center gap-space-2xs px-space-sm py-space-xs rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-button-label text-button-label transition-colors"
          type="button"
        >
          <Icon name="Bookmark" class="w-4.5 h-4.5 text-tertiary" />
          <span>{{ isSubmitting && pendingStatus === "draft" ? "Menyimpan..." : "Save Draft" }}</span>
        </button>
        <button
          @click="handlePublish"
          :disabled="isSubmitting"
          class="inline-flex items-center gap-space-2xs px-space-md py-space-xs rounded bg-primary text-on-primary hover:bg-primary-container font-button-label text-button-label shadow-md shadow-primary/20 transition-all"
          type="button"
        >
          <Icon name="Send" class="w-4.5 h-4.5" />
          <span>{{ isSubmitting && pendingStatus === "published" ? "Publishing..." : "Publish Dispatch" }}</span>
        </button>
      </div>
    </header>

    <p v-if="submitError" class="text-red-500 text-sm mb-space-md">{{ submitError }}</p>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
      <!-- MAIN: Title, Excerpt, Content -->
      <main class="lg:col-span-8 flex flex-col gap-space-md min-w-0">
        <div class="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm">
          <div class="space-y-space-xs mb-space-lg">
            <input
              v-model="title"
              v-bind="titleAttrs"
              class="w-full bg-transparent font-headline-lg text-headline-lg text-on-surface placeholder:text-outline-variant/60 focus:outline-none leading-tight"
              placeholder="Untitled Dispatch..."
              type="text"
            />
            <span v-if="errors.title" class="text-red-500 text-sm">{{ errors.title }}</span>

            <textarea
              v-model="excerpt"
              v-bind="excerptAttrs"
              class="w-full bg-transparent font-body-lg text-body-lg text-tertiary placeholder:text-outline-variant/60 focus:outline-none resize-none leading-relaxed"
              placeholder="Add an archival subtitle or abstract summary..."
              rows="2"
            ></textarea>
            <span v-if="errors.excerpt" class="text-red-500 text-sm">{{ errors.excerpt }}</span>
          </div>

          <!-- MD Editor untuk content -->
          <div>
            <MdEditor v-model="content" v-bind="contentAttrs" language="en-US" style="height: 500px" />
            <span v-if="errors.content" class="text-red-500 text-sm">{{ errors.content }}</span>
          </div>
        </div>
      </main>

      <!-- SIDEBAR: Properties, Tags, SEO -->
      <aside class="lg:col-span-4 flex flex-col gap-space-md min-w-0">
        <div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
          <!-- Properties -->
          <div class="space-y-space-sm border-b border-outline-variant/30 pb-space-sm">
            <span class="font-meta-tag text-meta-tag text-tertiary uppercase tracking-wider">Properties</span>

            <div class="space-y-space-2xs">
              <label class="font-button-label text-button-label text-on-surface block text-xs">Content Type</label>
              <div class="grid grid-cols-2 gap-space-2xs bg-surface-container rounded-lg p-space-3xs">
                <button
                  @click="contentType = 'tech'"
                  type="button"
                  :class="[
                    'py-space-xs px-space-sm rounded font-button-label text-button-label flex items-center justify-center gap-space-2xs transition-all',
                    contentType === 'tech' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-tertiary hover:text-on-surface',
                  ]"
                >
                  <Icon name="terminal" class="w-4 h-4" />
                  <span>Tech</span>
                </button>
                <button
                  @click="contentType = 'personal'"
                  type="button"
                  :class="[
                    'py-space-xs px-space-sm rounded font-button-label text-button-label flex items-center justify-center gap-space-2xs transition-all',
                    contentType === 'personal' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-tertiary hover:text-on-surface',
                  ]"
                >
                  <Icon name="eco" class="w-4 h-4" />
                  <span>Personal</span>
                </button>
              </div>
              <span v-if="errors.contentType" class="text-red-500 text-sm">{{ errors.contentType }}</span>
            </div>

            <div class="space-y-space-2xs">
              <label class="font-button-label text-button-label text-on-surface block text-xs">Reference Slug</label>
              <input
                v-model="slug"
                v-bind="slugAttrs"
                type="text"
                class="w-full px-space-sm py-space-xs bg-surface-container-low text-on-surface font-code-inline text-code-inline rounded focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all text-xs"
              />
              <span v-if="errors.slug" class="text-red-500 text-sm">{{ errors.slug }}</span>
            </div>

            <div class="space-y-space-2xs">
              <label class="font-button-label text-button-label text-on-surface block text-xs">Category</label>
              <select
                v-model="categoryId"
                v-bind="categoryIdAttrs"
                class="w-full px-space-sm py-space-xs bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              >
                <option value="" disabled selected>Choose Category</option>
                <option v-for="cat in data?.categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
              </select>
              <span v-if="errors.categoryId" class="text-red-500 text-sm">{{ errors.categoryId }}</span>
            </div>

            <div class="space-y-space-2xs">
              <label class="font-button-label text-button-label text-on-surface block text-xs">Reading Time (mins)</label>
              <input
                v-model="readingTime"
                v-bind="readingTimeAttrs"
                type="number"
                class="w-full px-space-sm py-space-xs bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <span v-if="errors.readingTime" class="text-red-500 text-sm">{{ errors.readingTime }}</span>
            </div>
          </div>

          <!-- Tags -->
          <div class="space-y-space-sm border-b border-outline-variant/30 pb-space-sm">
            <span class="font-meta-tag text-meta-tag text-tertiary uppercase tracking-wider">Tags</span>

            <div class="flex flex-wrap gap-space-2xs">
              <span v-for="tag in tags" :key="tag" class="inline-flex items-center gap-1 px-space-xs py-space-3xs rounded-full font-meta-tag text-meta-tag bg-primary-fixed/30 border border-primary/40 text-on-surface">
                #{{ tag }}
                <button type="button" @click="removeTag(tag)" class="hover:text-red-500">
                  <Icon name="x" class="w-3 h-3" />
                </button>
              </span>
            </div>

            <input
              v-model="tagInput"
              @keydown="handleTagKeydown"
              type="text"
              placeholder="Type tag name, press Enter..."
              class="w-full px-space-sm py-space-xs bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <span v-if="errors.tags" class="text-red-500 text-sm">{{ errors.tags }}</span>
          </div>

          <!-- SEO -->
          <div class="space-y-space-sm">
            <span class="font-meta-tag text-meta-tag text-tertiary uppercase tracking-wider">Search Engine Opt.</span>

            <div class="space-y-space-2xs">
              <label class="font-button-label text-button-label text-on-surface block text-xs">SEO Title</label>
              <input
                v-model="seoTitle"
                v-bind="seoTitleAttrs"
                type="text"
                class="w-full px-space-sm py-space-xs bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <span v-if="errors.seoTitle" class="text-red-500 text-sm">{{ errors.seoTitle }}</span>
            </div>

            <div class="space-y-space-2xs">
              <label class="font-button-label text-button-label text-on-surface block text-xs">SEO Description</label>
              <textarea
                v-model="seoDescription"
                v-bind="seoDescriptionAttrs"
                rows="3"
                class="w-full px-space-sm py-space-xs bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
              ></textarea>
              <span v-if="errors.seoDescription" class="text-red-500 text-sm">{{ errors.seoDescription }}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
