import { auth } from "../utils/auth";

async function seedAdmin() {
  const result = await auth.api.signUpEmail({
    body: {
      email: "<EMAIL>",
      password: "<PASSWORD>",
      name: "<NAME>",
    },
  });

  console.log("Admin successfully created:", result);
}

seedAdmin();
