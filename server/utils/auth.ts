import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "../db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.users,
      session: schema.sessions,
      account: schema.accounts,
      verification: schema.verifications,
    },
  }),
  advanced: {
    database: {
      generateId: () => crypto.randomUUID(), // <- tambahkan ini
    },
  },
  user: {
    additionalFields: {
      role: { type: "string", fieldName: "role", input: false },
      bio: { type: "string", fieldName: "bio", required: false },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});
