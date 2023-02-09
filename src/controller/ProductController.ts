import { Request, Response } from "express"
import knex from "knex"

export class ProductController {
    constructor() {}

    public getProducts = async (req: Request, res: Response) => {
        try {
            const q = req.query.q

            const db = knex({
                client: "sqlite3",
                connection: {
                    filename: "./src/database/arquitetura.db",
                },
                useNullAsDefault: true,
                pool: { 
                    min: 0,
                    max: 1,
                    afterCreate: (conn: any, cb: any) => {
                        conn.run("PRAGMA foreign_keys = ON", cb)
                    }
                }
            })

            if (q) {
                const productsDB = await db("products").select()
                    .where("name", "LIKE", `%${q}%`)

                const brandsDB = await db("brands").select()

                const products = productsDB.map((productDB) => {
                    return {
                        id: productDB.id,
                        name: productDB.name,
                        price: productDB.price,
                        brand: getBrand(productDB.brand_id)
                    }
                })

                function getBrand(brandId: string) {
                    const brand = brandsDB.find((brandDB) => {
                        return brandDB.id === brandId
                    })

                    return {
                        id: brand.id,
                        name: brand.name
                    }
                }

                res.status(200).send(products)

            } else {

                const productsDB = await db("products").select()

                const brandsDB = await db("brands").select()

                const products = productsDB.map((productDB) => {
                    return {
                        id: productDB.id,
                        name: productDB.name,
                        price: productDB.price,
                        brand: getBrand(productDB.brand_id)
                    }
                })

                function getBrand(brandId: string) {
                    const brand = brandsDB.find((brandDB) => {
                        return brandDB.id === brandId
                    })

                    return {
                        id: brand.id,
                        name: brand.name
                    }
                }

                res.status(200).send(products)
            }

        } catch (error) {
            console.log(error)
    
            if (error instanceof Error) {
                res.status(500).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}