import { desc, eq, and } from "drizzle-orm";
import { articles } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const params = getQuery(event);
    const contentType = params.contentType as "tech" | "personal" | undefined;

    const allArticles = await db.query.articles.findMany({
      where: and(eq(articles.status, "published"), contentType ? eq(articles.contentType, contentType) : undefined),
      with: { author: true, category: true, articleTags: { with: { tag: true } } },
      orderBy: [desc(articles.createdAt)],
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
