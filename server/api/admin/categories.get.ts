import { asc } from "drizzle-orm";
import { categories } from "~~/server/db/schema";

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

    const allCategories = await db.query.categories.findMany({
      orderBy: asc(categories.name),
    });

    return {
      success: true,
      message: "Categories retrieved successfully",
      categories: allCategories,
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
