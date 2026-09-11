import { eq } from "drizzle-orm";
import { articles } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    const body = await readBody(event);

    const [updated] = await db
      .update(articles)
      .set({ ...body, updatedAt: new Date() })
      .where(eq(articles.id, id!))
      .returning();

    return {
      success: true,
      message: "Article updated successfully",
      article: updated,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
