import { articles, articleTags } from "~~/server/db/schema";
import { articleSchema } from "~/shared/schemas/article";
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

    const body = await readBody(event);
    const result = articleSchema.safeParse(body);

    if (!result.success) {
      throw createError({
        statusCode: 400,
        message: "Data not valid",
        data: result.error.flatten(),
      });
    }

    const { tagIds, ...articleData } = result.data;

    const existing = await db.select().from(articles).where(eq(articles.slug, articleData.slug));

    if (existing.length > 0) {
      throw createError({
        statusCode: 409,
        message: "Article already exists",
      });
    }

    const [newArticle] = await db
      .insert(articles)
      .values({
        ...articleData,
        // userId: session.user.id,
        userId: "75b4835e-4a1f-48b1-8d08-6f58ed40eb4a",
        publishedAt: articleData.status === "published" ? new Date() : null,
      })
      .returning();

    if (tagIds.length > 0) {
      await db.insert(articleTags).values(tagIds.map((tagId) => ({ articleId: newArticle.id, tagId })));
    }

    return {
      success: true,
      message: "Article created successfully",
      article: newArticle,
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
