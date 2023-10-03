import { faker } from "@faker-js/faker"; // Importa la librería Faker para generar datos simulados
import { MongoClient } from "mongodb"; // Importa el cliente MongoDB para interactuar con la base de datos
import _ from "lodash"; // Importa la librería Lodash para funciones útiles

async function main() {
    // Obtiene la cadena de conexión a MongoDB desde una variable de entorno
    const uri = process.env.MONGO_DB_CONNECTION;

    // Crea una instancia del cliente MongoDB
    const client = new MongoClient(uri);

    try {
        // Conecta el cliente a la base de datos MongoDB
        await client.connect();

        // Obtiene colecciones específicas de la base de datos
        const productsCollection = client.db("food-App").collection("products");
        const categoryCollection = client.db("food-App").collection("categories");

        const db = client.db("food-App");

        // Verifica si la colección "products" existe y la elimina si es así
        if ((await db.listCollections({ name: 'products' }).toArray()).length) {
            productsCollection.drop();
        }

        // Define una lista de categorías
        let categories = ["breakfast", "lunch", "dinner", "drinks"].map(item => ({ name: item }));

        // Inserta las categorías en la colección "categories"
        await categoryCollection.insertMany(categories);

        // Define una lista de URLs de imágenes
        let imageUrls = [
            "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png",
            "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png",
            "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png"
        ];

        let products = [];

        // Genera datos simulados para productos y los agrega a la lista "products"
        for (let i = 0; i < 10; i += 1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                image: _.sample(imageUrls)
            }
            products.push(newProduct);
        }

        // Inserta los productos en la colección "products"
        await productsCollection.insertMany(products);

    } catch (e) {
        // Maneja cualquier error que ocurra durante la ejecución
        console.log(e);
    } finally {
        // Cierra la conexión al cliente MongoDB
        await client.close();
    }
}

// Llama a la función principal para iniciar el proceso de inserción de datos simulados
main();
