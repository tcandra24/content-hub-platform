import { eq } from "drizzle-orm";
import { articles } from "~~/server/db/schema";

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

    const article = await db.query.articles.findFirst({
      with: { author: true, category: true, articleTags: { with: { tag: true } } },
      where: eq(articles.id, id!),
    });

    return {
      success: true,
      message: "Article retrieved successfully",
      article: article,
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
