import { eq } from "drizzle-orm";
import { articles, articleTags } from "~~/server/db/schema";

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

    const [existingArticle] = await db.select().from(articles).where(eq(articles.id, id!));

    if (!existingArticle) {
      throw createError({ statusCode: 404, message: "Article not found" });
    }

    await db.delete(articleTags).where(eq(articleTags.articleId, id!));
    await db.delete(articles).where(eq(articles.id, id!));

    return {
      success: true,
      message: "Article deleted successfully",
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
