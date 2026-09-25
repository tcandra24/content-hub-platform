import { createAuthClient } from "better-auth/vue";

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  const authClient = createAuthClient({
    baseURL: config.public.betterAuthUrl,
  });

  const nuxtApp = useNuxtApp();
  nuxtApp.provide("authClient", authClient);

  // Populate session sekali di awal (SSR + client)
  const { fetchSession } = useAuth();
  await fetchSession();
});
