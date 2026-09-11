import { desc, eq } from "drizzle-orm";
import { articles } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const allArticles = await db.query.articles.findMany({
      where: eq(articles.status, "published"),
      with: { author: true, category: true },
      orderBy: desc(articles.createdAt),
    });

    return {
      success: true,
      message: "Articles retrieved successfully",
      articles: allArticles,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
