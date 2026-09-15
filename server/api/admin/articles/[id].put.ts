import { and, eq, ne } from "drizzle-orm";
import { articleSchema } from "~/shared/schemas/article";
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

    const body = await readBody(event);
    const result = articleSchema.partial().safeParse(body);

    if (!result.success) {
      throw createError({
        statusCode: 400,
        message: "Data not valid",
        data: result.error.flatten(),
      });
    }

    const { tagIds, ...articleData } = result.data;

    if (articleData.slug) {
      const slugConflict = await db
        .select()
        .from(articles)
        .where(and(eq(articles.slug, articleData.slug), ne(articles.id, id!)));

      if (slugConflict.length > 0) {
        throw createError({ statusCode: 409, message: "Slug already in use by another article" });
      }
    }

    const existing = await db.select().from(articles).where(eq(articles.id, id!));

    if (existing.length === 0) {
      throw createError({
        statusCode: 404,
        message: "Article not found",
      });
    }

    const [updatedArticle] = await db
      .update(articles)
      .set({
        ...articleData,
        publishedAt: articleData.status === "published" && !existingArticle.publishedAt ? new Date() : existingArticle.publishedAt,
        updatedAt: new Date(),
      })
      .where(eq(articles.id, id!))
      .returning();

    if (tagIds) {
      await db.delete(articleTags).where(eq(articleTags.articleId, id!));

      if (tagIds.length > 0) {
        await db.insert(articleTags).values(tagIds.map((tagId) => ({ articleId: id!, tagId })));
      }
    }

    return {
      success: true,
      message: "Article updated successfully",
      article: updatedArticle,
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
