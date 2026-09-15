import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters long").max(255),
  slug: z
    .string()
    .min(5)
    .max(100)
    .regex(/^[a-z0-9-]+$/, "Invalid slug format"),
  contentType: z.enum(["tech", "personal"], { message: "Content type must be either tech or personal" }),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;
