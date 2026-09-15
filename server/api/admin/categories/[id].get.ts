import { eq } from "drizzle-orm";
import { categories } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  try {
    // const headers = event.headers;
    // const session = await auth.api.getSession({ headers });

    // if (!session) {
    //   throw createError({
    //     statusCode: 401,
    //     message: "Unauthorized",
    //   });
    // }

    const id = getRouterParam(event, "id");

    const category = await db.query.categories.findFirst({
      where: eq(categories.id, id!),
    });

    return {
      success: true,
      message: "Category retrieved successfully",
      category: category,
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
