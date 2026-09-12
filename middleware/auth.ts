export default defineNuxtRouteMiddleware(async (to) => {
  const session = await authClient.getSession();
  if (!session.data && to.path.startsWith("/admin")) {
    return navigateTo("/admin/login");
  }
});
