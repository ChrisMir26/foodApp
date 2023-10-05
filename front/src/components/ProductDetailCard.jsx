import React,{useState} from 'react'
import Button from "../components/Button"

const ProductDetailCard = ({product,onAddProduct}) => {
  return (
    <div className='p-4 m-4 rounded-lg bg-slate-50'>
        <div className='flex items-center flex-col justify-between'>
            <h2 className='text-3xl'> {product.name}</h2>
            <p className='text-2xl text-gray-500'>
                {product.description}
            </p>
            <div className='flex items-center justify-between'>
                <div className="text-3xl text-black">{product.price}</div>
            </div>
        </div>
        <div className='2-full flex items-center justify-center'>
            <img src={product.image} alt="img" className='w-40 h-40 rounded-xl object-cover' />
        </div>
        <div className='w-full flex items-center justify-center'>
        <Button onClick={onAddProduct}>Add to Cart</Button>

        </div>



    </div>
  )
}

export default ProductDetailCard