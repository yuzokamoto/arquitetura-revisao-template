import { BaseDatabase } from "./BaseDatabase";

export class BrandDatabase extends BaseDatabase {
    public static TABLE_BRANDS = "brands"

    public getAllBrands = async () => {
        const brandsDB = await BaseDatabase
            .connection(BrandDatabase.TABLE_BRANDS)
            .select()

        return brandsDB
    }

    public getBrandsByName = async (q: string) => {
        const brandsDB = await BaseDatabase
            .connection(BrandDatabase.TABLE_BRANDS)
            .select()
            .where("name", "LIKE", `%${q}%`)

        return brandsDB
    }
}