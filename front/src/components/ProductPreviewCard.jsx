import React from 'react'
import AddProduct from './AddProduct'


const ProductPreviewCard = ({product,onAddProduct}) => {

 const addProduct = () =>{
    onAddProduct(product)
 }


  return (
    <div className='w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center'>
        <img src={product.image} alt={product.name}/>
        <h2 className='pb-2 text:md md:text-lg'>{product.name}</h2>
        <p className='mb-2 h-30 line-clamp-4 text-sm'>{product.description}</p>
        <AddProduct addProduct={addProduct}/>
    </div>
  )
}

export default ProductPreviewCard