import { drizzle } from "drizzle-orm/node-postgres";
import { DB_URL } from "../loadEnvs";
import * as schema from "./schema";

export const db = drizzle(DB_URL, { schema });
