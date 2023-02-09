import { ProductDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";
import { BrandDatabase } from "./BrandDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "products"

    public getAllProducts = async () => {
        const productsDB = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()

        return productsDB
    }

    public getProductsByName = async (q: string) => {
        const productsDB = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where("name", "LIKE", `%${q}%`)

        return productsDB
    }

    public getProductsAndBrands = async (q: string | undefined) => {
        
        let productsDB: ProductDB[]

        if (q) {
            productsDB = await this.getProductsByName(q)
        } else {
            productsDB = await this.getAllProducts()
        }
        
        const brandsDB = await BaseDatabase
            .connection(BrandDatabase.TABLE_BRANDS)
            .select()
        
        return {
            productsDB,
            brandsDB
        }
    }
}