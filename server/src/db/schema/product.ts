import {
  pgTable,
  varchar,
  doublePrecision,
  integer,
  foreignKey,
} from "drizzle-orm/pg-core";
import { idWithCretedUpdated } from "./dbHelpers";
import categoryTable from "./categories";

const productTable = pgTable(
  "product",
  {
    ...idWithCretedUpdated,
    productName: varchar("product_name", { length: 255 }),
    procuctBasePrice: doublePrecision("product_base_price"),
    categoryId: integer("category_id"),
  },
  (table) => [
    foreignKey({
      columns: [table.categoryId],
      foreignColumns: [categoryTable.id],
      name: "fk_product_categoryId",
    }),
  ],
);

export default productTable;
