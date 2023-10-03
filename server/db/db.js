import mongoose from "mongoose";


const conectarDB = async () =>{
    try{
         const db = await mongoose.connect( process.env.MONGO_DB_CONNECTION,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`mongoDB conectado en: ${url}`)
    }catch(error){
        console.log(`error: ${error.message}`)

        // Finalizar el programa con un código de estado 1 para indicar un erro
        process.exit(1)
    }
}



export default conectarDB