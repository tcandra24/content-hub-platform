import { asc } from "drizzle-orm";
import { categories } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const allCategories = await db.query.categories.findMany({
      orderBy: asc(categories.name),
    });

    return {
      success: true,
      message: "Categories retrieved successfully",
      categories: allCategories,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
