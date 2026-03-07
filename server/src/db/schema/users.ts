import { pgTable, varchar, foreignKey, integer } from "drizzle-orm/pg-core";
import { idWithCretedUpdated } from "./dbHelpers";
import shopTable from "./shop";

const userTable = pgTable(
  "users",
  {
    ...idWithCretedUpdated,
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    firstName: varchar("first_name", { length: 255 }).notNull(),
    lastName: varchar("last_name", { length: 255 }).notNull(),
    role: varchar({
      length: 50,
      enum: ["owner", "admin", "worker", "customer"],
    })
      .notNull()
      .default("customer"),

    shopId: integer("shop_id"),
  },
  (table) => [
    foreignKey({
      columns: [table.shopId],
      foreignColumns: [shopTable.id],
      name: "fk_user_shopId",
    }),
  ],
);

export default userTable;
