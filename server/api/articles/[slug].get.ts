import { eq, and } from "drizzle-orm";
import { articles } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, "slug");

    const article = await db.query.articles.findFirst({
      where: and(eq(articles.slug, slug!), eq(articles.status, "published")),
      with: { author: true, category: true, articleTags: { with: { tag: true } } },
    });

    if (!article) {
      throw createError({
        statusCode: 404,
        message: "Article not found",
      });
    }

    await db
      .update(articles)
      .set({ viewCount: article.viewCount! + 1 })
      .where(eq(articles.id, article.id));

    return {
      success: true,
      message: "Article found",
      article,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
