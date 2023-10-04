import React from 'react'
import AddProduct from './AddProduct'


const ProductPreviewCard = ({product,onAddProduct}) => {

//  const addProduct = (item) =>{
//     //TODO CREATE ADD PRODCUT
//  }


  return (
    <div className='w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center'>
        <img src={product.image} alt={product.name}/>
        <h2 className='pb-2 text-lg'>{product.name}</h2>
        <p className='mb-2 h-20 line-clamp-4'>{product.description}</p>
        <AddProduct onAddProduct={onAddProduct}/>
    </div>
  )
}

export default ProductPreviewCard