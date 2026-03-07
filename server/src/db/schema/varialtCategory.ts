import { pgTable, varchar, integer, foreignKey } from "drizzle-orm/pg-core";
import { idWithCretedUpdated } from "./dbHelpers";
import productTable from "./product";

const variantCategory = pgTable(
  "variant_category",
  {
    ...idWithCretedUpdated,
    variantCategoryName: varchar("variant_category_name", { length: 255 }),
    variantCategorySlug: varchar("variant_category_Slug", { length: 255 }),
    productId: integer("product_id"),
  },
  (table) => [
    foreignKey({
      columns: [table.productId],
      foreignColumns: [productTable.id],
      name: "fk_variant_category_productId",
    }),
  ],
);

export default variantCategory;
