export const useAuthClient = () => {
  const { $authClient } = useNuxtApp();
  return $authClient;
};
