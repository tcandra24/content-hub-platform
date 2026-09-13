<script lang="ts" setup>
definePageMeta({
  layout: false,
});

import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { loginSchema } from "~/shared/schemas/auth";
import { ref } from "vue";

const { handleSubmit, errors, defineField, isSubmitting } = useForm({
  validationSchema: toTypedSchema(loginSchema),
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const submitError = ref("");

const onSubmit = handleSubmit(async (values) => {
  const { data, error } = await authClient.signIn.email({
    email: values.email,
    password: values.password,
  });

  if (error) {
    submitError.value = error.message || "Email or password is incorrect";
    return;
  }

  navigateTo("/admin");
});

const authMode = ref<"credentials" | "magic">("credentials");

function setAuthMode(mode: "credentials" | "magic") {
  authMode.value = mode;
}
</script>

<template>
  <div class="flex flex-col w-full items-center justify-center py-space-xl px-space-md min-h-[calc(100vh-4rem)]">
    <div class="relative w-full max-w-lg">
      <div class="absolute -inset-4 bg-linear-to-tr from-primary-fixed/30 via-secondary-fixed/20 to-surface-container-high/40 rounded-full blur-2xl opacity-60 pointer-events-none"></div>

      <div class="relative bg-surface-container-lowest shadow-xl rounded-xl p-space-xl sm:p-space-2xl flex flex-col space-y-space-lg">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="group inline-flex items-center gap-space-2xs text-tertiary hover:text-primary transition-colors font-button-label text-button-label">
            <Icon name="west" class="w-4.5 h-4.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Return to Public Garden</span>
          </NuxtLink>
          <span class="inline-flex items-center gap-space-3xs font-meta-tag text-meta-tag px-space-xs py-space-3xs bg-surface-container text-tertiary rounded">
            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            NODE SECURE
          </span>
        </div>

        <div class="flex flex-col items-center text-center space-y-space-xs pt-space-xs">
          <div class="w-16 h-16 rounded-xl bg-surface-container-low p-space-xs flex items-center justify-center shadow-sm">
            <NuxtImg
              alt="Atelier Garden Logo"
              class="w-full h-full object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRMXroZIvYWvsJaXaa8ttDSPvk3qeGq6TprkDYInV7GPxiWD8UlH3DTZvLFIvIcI9c6lqE3lLeB0zjFoL0WV0iOl4ZYZ7IsBVm8_C83ZazsjrFoCFiXc2dhjF_gDW6AV-cojIvirDchm-BApid_sxQoXcmqAZtCMO-8G9ZpPSmgaEnq-bY0KDrNSTgsIbrvwL8ud87Y2r70Xi3rlZzfuWeBRDHx7X9ysobza8ZxyufBuNBacxTIKhp"
            />
          </div>
          <div class="space-y-space-3xs">
            <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Chronicle &amp; Code Studio</h1>
            <p class="font-body-md text-body-md text-tertiary">Enter author credentials or passkey to curate the garden</p>
          </div>
        </div>

        <div class="grid grid-cols-2 p-space-3xs bg-surface-container-low rounded-lg gap-space-3xs text-center">
          <button
            class="py-space-2xs px-space-xs rounded font-button-label text-button-label transition-all"
            :class="[authMode === 'credentials' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-tertiary hover:text-on-surface']"
            @click="setAuthMode('credentials')"
            type="button"
          >
            Password &amp; Key
          </button>
          <button
            class="py-space-2xs px-space-xs rounded font-button-label text-button-label transition-all"
            :class="[authMode === 'magic' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-tertiary hover:text-on-surface']"
            @click="setAuthMode('magic')"
            type="button"
          >
            Magic NuxtLink
          </button>
        </div>

        <form v-if="authMode === 'credentials'" class="space-y-space-md" @submit.prevent="onSubmit">
          <div class="space-y-space-2xs">
            <div class="flex items-center justify-between">
              <label class="font-button-label text-button-label text-on-surface" htmlFor="admin-email">Email</label>
              <span class="font-meta-tag text-meta-tag text-tertiary">AUTHOR / MAINTAINER</span>
            </div>
            <div class="relative">
              <Icon name="alternate_email" class="absolute left-space-sm top-1/2 -translate-y-1/2 w-5 h-5 text-tertiary" />
              <input
                class="w-full pl-10 pr-space-md py-space-xs bg-surface-container-low text-on-surface placeholder:text-outline-variant font-body-sm text-body-sm rounded focus:bg-surface-container-lowest focus:outline-none transition-all"
                id="admin-email"
                placeholder="name@domain.garden"
                v-model="email"
                v-bind="emailAttrs"
                type="email"
                defaultValue=""
              />
            </div>
          </div>
          <div class="space-y-space-2xs">
            <div class="flex items-center justify-between">
              <label class="font-button-label text-button-label text-on-surface" htmlFor="admin-password">Master Passkey</label>
              <button class="font-meta-tag text-meta-tag text-primary hover:underline" type="button">Reset key?</button>
            </div>
            <div class="relative">
              <Icon name="lock" class="absolute left-space-sm top-1/2 -translate-y-1/2 w-5 h-5 text-tertiary" />
              <input
                class="w-full pl-10 pr-10 py-space-xs bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded focus:bg-surface-container-lowest focus:outline-none transition-all"
                id="admin-password"
                v-model="password"
                v-bind="passwordAttrs"
                type="password"
                defaultValue=""
              />
              <button class="absolute right-space-sm top-1/2 -translate-y-1/2 text-tertiary hover:text-on-surface transition-colors" title="Reveal password" type="button">
                <Icon name="visibility" class="w-5 h-5" />
              </button>
            </div>
          </div>

          <p v-if="submitError" class="text-red-500 text-sm">{{ submitError }}</p>

          <button
            :disabled="isSubmitting"
            class="w-full flex items-center justify-center gap-space-xs py-space-sm px-space-md bg-primary text-on-primary font-button-label text-button-label rounded shadow-md hover:bg-primary-container transition-all"
            type="submit"
          >
            <Icon name="lock_open" class="w-5 h-5" />
            <span> {{ isSubmitting ? "Authenticating..." : "Authenticate to Studio" }} </span>
          </button>
        </form>
        <form v-else class="space-y-space-md" @submit.prevent="console.log('submit')">
          <div class="space-y-space-2xs">
            <label class="font-button-label text-button-label text-on-surface" htmlFor="magic-email">Registered Maintainer Email</label>
            <div class="relative">
              <Icon name="mail" class="absolute left-space-sm top-1/2 -translate-y-1/2 w-5 h-5 text-tertiary" />
              <input
                class="w-full pl-10 pr-space-md py-space-xs bg-surface-container-low text-on-surface placeholder:text-outline-variant font-body-sm text-body-sm rounded focus:bg-surface-container-lowest focus:outline-none transition-all"
                id="magic-email"
                placeholder="author@chronicle-code.garden"
                required
                type="email"
              />
            </div>
            <p class="font-meta-tag text-meta-tag text-tertiary pt-space-3xs">A cryptographically signed dispatch token will arrive within 120s.</p>
          </div>
          <button class="w-full flex items-center justify-center gap-space-xs py-space-sm px-space-md bg-secondary text-on-secondary font-button-label text-button-label rounded shadow-md hover:opacity-90 transition-all" type="submit">
            <Icon name="send" class="w-5 h-5" />
            <span>Dispatch Magic Token</span>
          </button>
        </form>

        <div class="pt-space-sm flex flex-col space-y-space-xs">
          <div class="flex items-center justify-between text-tertiary font-meta-tag text-meta-tag">
            <span class="flex items-center gap-space-3xs">
              <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              ACTIVE NODES: 84
            </span>
            <span>LAST SYNC: 14m AGO</span>
            <span>VER: 3.2.0-NITRO</span>
          </div>
          <div class="text-center pt-space-xs">
            <p class="font-meta-tag text-meta-tag text-tertiary">Encrypted session via Nitro SSR · Digital Garden Admin v3.2.0</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
