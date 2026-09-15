import { categories } from "~~/server/db/schema";
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

    const id = getRouterParam(event, "id");

    const [existingCategory] = await db.select().from(categories).where(eq(categories.id, id!));

    if (!existingCategory) {
      throw createError({ statusCode: 404, message: "Category not found" });
    }

    await db.delete(categories).where(eq(categories.id, id!)).returning();

    return {
      success: true,
      message: "Category deleted successfully",
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
