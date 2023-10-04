import express from "express"
import cors from "cors"
import db from "./db/db.js"
import dotenv from "dotenv"
import conectarDB from "./db/db.js"
import productRoutes from "./routes/productRouter.js"

const app = express()

app.use(express.json()) // PARA HABILTAR POSTS TIPO JSON
dotenv.config(); // Cargar las variables de entorno

conectarDB()

app.use(cors());

app.use("/api",productRoutes)


const PORT =  process.env.HOST_PORT

app.listen(PORT,()=>{
    console.log(`server listenning on port ${PORT}`)
}) 
//sd