import {
  pgTable,
  integer,
  varchar,
  foreignKey,
  doublePrecision,
} from "drizzle-orm/pg-core";
import { idWithCretedUpdated } from "./dbHelpers";
import variantCategory from "./varialtCategory";

const variant = pgTable(
  "variant",
  {
    ...idWithCretedUpdated,
    variantName: varchar("variant_name", { length: 255 }),
    variantPrice: doublePrecision("variant_price").default(0.0),
    variantCategoryId: integer("variant_category_id"),
  },
  (table) => [
    foreignKey({
      columns: [table.variantCategoryId],
      foreignColumns: [variantCategory.id],
      name: "fk_variant_variantCategoryId",
    }),
  ],
);

export default variant;
