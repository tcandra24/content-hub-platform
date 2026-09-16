import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../../server/db/schema";

const config = useRuntimeConfig();

const sql = neon(config.databaseUrl);
export const db = drizzle(sql, { schema });
