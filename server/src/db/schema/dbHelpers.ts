import { integer, timestamp } from "drizzle-orm/pg-core";

export const idWithCretedUpdated = {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
};
