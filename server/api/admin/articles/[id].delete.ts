import { eq } from "drizzle-orm";
import { articles } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");

    await db.delete(articles).where(eq(articles.id, id!));

    return {
      success: true,
      message: "Article deleted successfully",
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
