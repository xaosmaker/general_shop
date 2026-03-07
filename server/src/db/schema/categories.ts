import { pgTable, varchar, foreignKey, integer } from "drizzle-orm/pg-core";
import { idWithCretedUpdated } from "./dbHelpers";
import shopTable from "./shop";

const categoryTable = pgTable(
  "categories",
  {
    ...idWithCretedUpdated,
    categoryName: varchar("category_name", { length: 255 }).notNull(),
    categorySlug: varchar("category_slug", { length: 255 }).notNull(),
    shopId: integer("shop_id"),
  },
  (table) => [
    foreignKey({
      columns: [table.shopId],
      foreignColumns: [shopTable.id],
      name: "fk_category_shopId",
    }),
  ],
);

export default categoryTable;
