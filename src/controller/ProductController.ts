import { Request, Response } from "express"
import knex from "knex"

// poluída para um caramba

// recebe req e devolve res

// conecta com banco de dados

// valida regras de negócio e tipagem

export class ProductController {
    constructor() {}

    public getProducts = async (req: Request, res: Response) => {
        try {
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
    
            const output = await db("products").select()
    
            res.status(200).send(output)
    
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