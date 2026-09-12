import { desc } from "drizzle-orm";
import { articles } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  // jika ada limit role admin saja yang diijinkan
  // const session = await auth.api.getSession({ headers: event.headers })

  // if (!session || session.user.role !== 'admin') {
  //   throw createError({ statusCode: 403, message: 'Akses ditolak' })
  // }
  try {
    const allArticles = await db.query.articles.findMany({
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
