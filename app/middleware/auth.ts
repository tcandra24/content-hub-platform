export default defineNuxtRouteMiddleware(async (to) => {
  const { session, fetchSession } = useAuth();

  if (session.value === null) {
    await fetchSession(); // pastikan sudah pernah dicek
  }

  if (!session.value && to.path.startsWith("/admin")) {
    return navigateTo("/admin/login");
  }
});
