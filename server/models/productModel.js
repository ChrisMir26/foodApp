import mongoose from "mongoose";


const CategorySchema  = mongoose.Schema(
    {
        name: {
            type: String,
            required: true}
    }
)

const ProductSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
        },
        adjective:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        }
    }
)

const Product = mongoose.model("Product", ProductSchema);
const Category = mongoose.model("Category", CategorySchema);

export { Product, Category };







