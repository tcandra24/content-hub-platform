import { categories } from "~~/server/db/schema";
import { categorySchema } from "~/shared/schemas/category";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    const headers = event.headers;
    const session = await auth.api.getSession({ headers });

    if (!session) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized",
      });
    }

    const body = await readBody(event);
    const result = categorySchema.safeParse(body);

    if (!result.success) {
      throw createError({
        statusCode: 400,
        message: "Data not valid",
        data: result.error.flatten(),
      });
    }

    const existing = await db.select().from(categories).where(eq(categories.slug, result.data.slug));

    if (existing.length > 0) {
      throw createError({
        statusCode: 409,
        message: "Category already exists",
      });
    }

    const [newCategory] = await db.insert(categories).values(result.data).returning();

    return {
      success: true,
      message: "Category created successfully",
      category: newCategory,
    };
  } catch (error: any) {
    if (error.statusCode) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
