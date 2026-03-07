CREATE TABLE "categories" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "categories_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"category_name" varchar(255) NOT NULL,
	"category_slug" varchar(255) NOT NULL,
	"shop_id" integer
);
--> statement-breakpoint
CREATE TABLE "product" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "product_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"product_name" varchar(255),
	"product_base_price" double precision,
	"category_id" integer
);
--> statement-breakpoint
CREATE TABLE "variant" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "variant_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant_name" varchar(255),
	"variant_price" double precision DEFAULT 0,
	"variant_category_id" integer
);
--> statement-breakpoint
CREATE TABLE "variant_category" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "variant_category_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"variant_category_name" varchar(255),
	"variant_category_Slug" varchar(255),
	"product_id" integer
);
--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "fk_category_shopId" FOREIGN KEY ("shop_id") REFERENCES "public"."shop"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product" ADD CONSTRAINT "fk_product_categoryId" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variant" ADD CONSTRAINT "fk_variant_variantCategoryId" FOREIGN KEY ("variant_category_id") REFERENCES "public"."variant_category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variant_category" ADD CONSTRAINT "fk_variant_category_productId" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE no action ON UPDATE no action;