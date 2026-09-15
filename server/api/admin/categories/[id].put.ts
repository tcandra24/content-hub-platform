import { categories } from "~~/server/db/schema";
import { categorySchema } from "~/shared/schemas/category";
import { and, eq, ne } from "drizzle-orm";

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

    const id = getRouterParam(event, "id");

    const [existingCategory] = await db.select().from(categories).where(eq(categories.id, id!));

    if (!existingCategory) {
      throw createError({ statusCode: 404, message: "Category not found" });
    }

    const body = await readBody(event);
    const result = categorySchema.partial().safeParse(body);

    if (!result.success) {
      throw createError({
        statusCode: 400,
        message: "Data not valid",
        data: result.error.flatten(),
      });
    }

    if (result.data.slug) {
      const slugConflict = await db
        .select()
        .from(categories)
        .where(and(eq(categories.slug, result.data.slug), ne(categories.id, id!)));

      if (slugConflict.length > 0) {
        throw createError({ statusCode: 409, message: "Slug already in use by another category" });
      }
    }

    const existing = await db.select().from(categories).where(eq(categories.id, id!));

    if (existing.length === 0) {
      throw createError({
        statusCode: 404,
        message: "Category not found",
      });
    }

    const [newCategory] = await db.update(categories).set(result.data).where(eq(categories.id, id!)).returning();

    return {
      success: true,
      message: "Category updated successfully",
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
