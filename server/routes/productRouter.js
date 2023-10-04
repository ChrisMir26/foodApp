import express from "express"
import { Product } from "../models/productModel.js";


const router = express.Router()

router.get("/products", async(req,res)=>{
    try {
        const products = await Product.find()
        console.log(`soy productos de productos`, products)
        res.status(200).send({data:products})
    } catch (error) {
        res.status(400).send({error:error})
        
    }
})

   // Define una nueva ruta HTTP GET para "/products-by-categories"
router.get("/products-by-categories", async (req, res) => {
    try {
        // Agrega productos desde la base de datos usando el método 'aggregate'
        const productos =await Product.find({});
        console.log(productos);

        const products = await Product.aggregate([
            // Etapa 1: Filtra los productos. (Aquí no estamos filtrando nada realmente porque el criterio de coincidencia está vacío.)
            { $match: {} },

            // Etapa 2: Agrupa los productos por categoría.
            { $group: {
                    _id: '$category.NAME', // La clave de agrupación es la 'category' del producto.
                    products: { $push: `$$ROOT` } // Agrega el producto completo al arreglo 'products' para cada categoría.
                }
            },

            // Etapa 3: Modifica la estructura del resultado.
            { $project: {
                    name: '$_id', // Asigna el valor de '_id' (que es la categoría) a un nuevo campo llamado 'name'.
                    products: 1,  // Conserva el arreglo 'products'.
                    _id: 0        // No incluye el campo '_id' en la salida.
                }
            }
        ]);

        // Envía el resultado (los productos agrupados por categoría) como respuesta al cliente con un código de estado HTTP 200 (OK).
        res.status(200).send({ data: products });
    } catch (error) { // Si hay algún error en el proceso anterior...
        console.log(error); // ...lo imprime en la consola.
    }
})

export default router