import { articles, articleTags } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { tagsIds, ...articleData } = body;

    const [newArticle] = await db.insert(articles).values(articleData).returning();

    if (tagsIds?.length) {
      await db.insert(articleTags).values(tagsIds.map((tagId: string) => ({ articleId: newArticle?.id, tagId })));
    }

    return {
      success: true,
      message: "Article created successfully",
      article: newArticle,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
