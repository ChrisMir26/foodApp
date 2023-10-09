import React,{useState} from 'react'
import Button from "../components/Button"
import { useDispatch } from "react-redux";
import {
    addToCart
} from "../store/cart/cartSlice";

const ProductDetailCard = ({product,onAddProduct}) => {
    const dispatch = useDispatch();
    console.log("soi id pa ",product._id)

  return (
    <div className='p-8 m-4 rounded-lg bg-slate-50 max-w-[300px] min-h-[500px]'>
        <div className='flex items-center flex-col justify-between'>
            <h2 className='text-xl mb-1'> {product.name}</h2>
            <p className='text-md text-gray-500 line-none'>
                {product.description}
            </p>
            <div className='flex items-center justify-between'>
                <div className="text-3xl text-blackm my-2">{product.price}</div>
            </div>
        </div>
        <div className='2-full flex items-center justify-center'>
            <img src={product.image} alt="img" className='w-40 h-40 rounded-xl object-cover' />
        </div>
        <div className='w-full flex items-center justify-center'>
        <Button onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>

        </div>

        </div>

  )
}

export default ProductDetailCard







// import React,{useState} from 'react'
// import Button from "../components/Button"

// const ProductDetailCard = ({product,onAddProduct}) => {
//   return (
//     <div className='p-4 m-4 rounded-lg bg-slate-50'>
//         <div className='flex items-center flex-col justify-between bg-green-600'>
//             <h2 className='text-3xl'> {product.name}</h2>
//             <p className='text-2xl text-gray-500'>
//                 {product.description}
//             </p>
//             <div className='flex items-center justify-between'>
//                 <div className="text-3xl text-black">{product.price}</div>
//             </div>
//         </div>
//         <div className='2-full flex items-center justify-center'>
//             <img src={product.image} alt="img" className='w-40 h-40 rounded-xl object-cover' />
//         </div>
//         <div className='w-full flex items-center justify-center'>
//         <Button onClick={onAddProduct}>Add to Cart</Button>

//         </div>



//     </div>
//   )
// }

// export default ProductDetailCard