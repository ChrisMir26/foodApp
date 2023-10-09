import React from 'react'
import AddProduct from './AddProduct'
import { useSelector } from 'react-redux'


const ProductPreviewCard = ({product,onAddProduct}) => {
  const cart = useSelector((state) => state.cart);


 const addProduct = () =>{
    onAddProduct(product)
   // localStorage.setItem('cart', JSON.stringify(cart.products));

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