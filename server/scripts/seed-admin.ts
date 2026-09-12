import { auth } from "../utils/auth";

async function seedAdmin() {
  const result = await auth.api.signUpEmail({
    body: {
      email: "tcandra@google.com",
      password: "password-yang-kuat",
      name: "tito candra",
    },
  });

  console.log("Admin berhasil dibuat:", result);
}

seedAdmin();
