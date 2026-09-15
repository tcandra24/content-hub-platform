import { articles, articleTags, tags } from "~~/server/db/schema";
import { articleSchema } from "~/shared/schemas/article";
import { eq, inArray } from "drizzle-orm";

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

    const { tags: tagNames, ...articleData } = result.data;

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
        userId: session.user.id,
        publishedAt: articleData.status === "published" ? new Date() : null,
      })
      .returning();

    if (tagNames && tagNames.length > 0) {
      // insert when not exist
      await db
        .insert(tags)
        .values(tagNames.map((name) => ({ name, slug: generateSlug(name) })))
        .onConflictDoNothing({ target: tags.slug });

      // Check tags exist on table
      const existingTags = await db.select().from(tags).where(inArray(tags.name, tagNames));

      // insert articleTags
      await db.insert(articleTags).values(existingTags.map((tag) => ({ articleId: newArticle.id, tagId: tag.id })));
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

const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};
