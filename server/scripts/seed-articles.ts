import { db } from "../utils/db";
import { users, categories, tags, articles, articleTags } from "../db/schema";
import { eq, inArray } from "drizzle-orm";

async function seedArticles() {
  // 1. Ambil user admin yang sudah dibuat sebelumnya (lewat seed-admin.ts)
  const [admin] = await db.select().from(users).where(eq(users.email, "tcandra@google.com"));

  if (!admin) {
    console.error("Admin user belum ada. Jalankan seed-admin.ts dulu.");
    process.exit(1);
  }

  // 2. Seed categories
  const categoryData = [
    { name: "Nuxt", slug: "nuxt", contentType: "tech" as const },
    { name: "Database", slug: "database", contentType: "tech" as const },
    { name: "Reflection", slug: "reflection", contentType: "personal" as const },
  ];

  const insertedCategories = await db.insert(categories).values(categoryData).returning();
  console.log(`${insertedCategories.length} categories dibuat`);

  const allCategories = await db
    .select()
    .from(categories)
    .where(
      inArray(
        categories.slug,
        categoryData.map((c) => c.slug),
      ),
    );

  // 3. Seed tags
  const tagData = [
    { name: "nuxt", slug: "nuxt" },
    { name: "ssr", slug: "ssr" },
    { name: "performance", slug: "performance" },
    { name: "drizzle", slug: "drizzle" },
    { name: "postgres", slug: "postgres" },
    { name: "career", slug: "career" },
    { name: "learn", slug: "learn" },
  ];

  await db.insert(tags).values(tagData).onConflictDoNothing({ target: tags.slug });

  const allTags = await db
    .select()
    .from(tags)
    .where(
      inArray(
        tags.slug,
        tagData.map((t) => t.slug),
      ),
    );

  // Helper — sekarang selalu lengkap karena query ulang dari DB
  const tagId = (slug: string) => {
    const found = allTags.find((t) => t.slug === slug);
    if (!found) throw new Error(`Tag dengan slug "${slug}" tidak ditemukan`);
    return found.id;
  };
  const categoryId = (slug: string) => {
    const found = allCategories.find((c) => c.slug === slug);
    if (!found) throw new Error(`Category dengan slug "${slug}" tidak ditemukan`);
    return found.id;
  };

  // 4. Seed articles
  const articleData = [
    {
      userId: admin.id,
      categoryId: categoryId("nuxt"),
      title: "Deconstructing SSR Hydration in Nuxt 3",
      slug: "deconstructing-ssr-hydration-nuxt-3",
      contentType: "tech" as const,
      excerpt: "An in-depth look at the SSR hydration process in Nuxt 3 and how to optimize it.",
      content: `# Deconstructing SSR Hydration in Nuxt 3\n\nHydration is the process...`,
      coverImage: "/images/ssr-hydration.png",
      status: "published" as const,
      publishedAt: new Date(),
      readingTime: 6,
      tagSlugs: ["nuxt", "ssr", "performance"],
    },
    {
      userId: admin.id,
      categoryId: categoryId("database"),
      title: "Setup Drizzle ORM dengan Neon Postgres",
      slug: "setup-drizzle-orm-neon-postgres",
      contentType: "tech" as const,
      excerpt: "A complete guide to configuring Drizzle ORM with the serverless Neon database.",
      content: `# Setup Drizzle ORM dengan Neon Postgres\n\nDrizzle is a modern ORM...`,
      coverImage: "/images/drizzle-neon.png",
      status: "published" as const,
      publishedAt: new Date(),
      readingTime: 8,
      tagSlugs: ["drizzle", "postgres"],
    },
    {
      userId: admin.id,
      categoryId: categoryId("reflection"),
      title: "Setahun Jadi AI Content Creator",
      slug: "setahun-jadi-ai-content-creator",
      contentType: "personal" as const,
      excerpt: "Reflection on the journey of building AI content for a year and what I've learned.",
      content: `# Setahun Jadi AI Content Creator\n\nI started a year ago...`,
      coverImage: "/images/reflection.png",
      status: "draft" as const,
      readingTime: 4,
      tagSlugs: ["career", "learn"],
    },
  ];

  for (const { tagSlugs, ...article } of articleData) {
    const [newArticle] = await db.insert(articles).values(article).returning();

    await db.insert(articleTags).values(tagSlugs.map((slug) => ({ articleId: newArticle.id, tagId: tagId(slug) })));

    console.log(`Artikel "${newArticle.title}" dibuat dengan ${tagSlugs.length} tags`);
  }

  console.log("Seeding artikel selesai.");
}

seedArticles()
  .catch((err) => {
    console.error("Seeding gagal:", err);
    process.exit(1);
  })
  .then(() => process.exit(0));
