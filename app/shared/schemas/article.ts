import { z } from "zod";

export const articleSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long").max(255),
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters long")
    .regex(/^[a-z0-9-]+$/, "Invalid slug format"),
  contentType: z.enum(["tech", "personal"], { message: "Content type must be either tech or personal" }),
  categoryId: z.string().uuid("Invalid category ID"),
  excerpt: z.string().max(300).optional(),
  content: z.string().min(20, "Content is too short"),
  coverImage: z.string().url("Invalid cover image URL").optional().or(z.literal("")),
  status: z.enum(["draft", "published"]),
  readingTime: z.number().int().positive().optional(),
  seoTitle: z.string().max(255).optional(),
  seoDescription: z.string().max(300).optional(),
  tagIds: z.array(z.string().uuid()).optional(),
});

export type ArticleFormValues = z.infer<typeof articleSchema>;
