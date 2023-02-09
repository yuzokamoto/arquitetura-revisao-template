import express from 'express'
import cors from 'cors'
import { productRouter } from './routers/productRouter'
import { brandRouter } from './routers/brandRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Server rodando na porta 3003"))

app.use("/products", productRouter)
app.use("/brands", brandRouter)
