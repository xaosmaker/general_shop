import { pgTable, varchar } from "drizzle-orm/pg-core";
import { idWithCretedUpdated } from "./dbHelpers";

const shopTable = pgTable("shop", {
  ...idWithCretedUpdated,
  shopName: varchar("shop_name", { length: 200 }).notNull().unique(),
  location: varchar({ length: 255 }).notNull().unique(),
});

export default shopTable;
