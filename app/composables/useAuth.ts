export function useAuth() {
  const authClient = useAuthClient();

  const session = useState<any>("auth-session", () => null);
  const pending = useState("auth-session-pending", () => true);

  const fetchSession = async () => {
    pending.value = true;
    const { data } = await authClient.getSession();
    session.value = data;
    pending.value = false;
  };

  return { session, pending, fetchSession, authClient };
}
