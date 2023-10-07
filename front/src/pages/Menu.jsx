import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import ProductDetailCard from '../components/ProductDetailCard'
import Tabs from '../components/Tabs'
import { fetchProducts, selectAllProducts } from '../store/menu/productsSlice'
import addToCart from "../store/cart/cartSlice"
 


const Menu = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts )
  const [activeTab,setActiveTab] = useState("drinks")
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch,activeTab])


  let uniqueCategories = [];
if (products && products.length) {
  // Primero, flatten el array de arrays
  const flattenedProducts = products.flat();

  // Ahora, obtén las categorías únicas
  const categoriesSet = new Set(flattenedProducts.map(product => product?.category?.name));
  uniqueCategories = [...categoriesSet];
}

const onAddProduct = (product) =>{
  dispatch(addToCart(product))}

const onTabSwitch = (newActiveTab) =>{
  setActiveTab(newActiveTab)
  const flattenedProducts = products.flat();
  let categories = flattenedProducts.map((product)=> product.name)
  let index = categories.findIndex(item => item === newActiveTab)
  console.log(index)
  if(index > -1) return setActiveTabIndex(index)
  else return setActiveTabIndex(0)
}


let flattenedProducts = products.flat();
let filteredProducts = flattenedProducts.filter(product => product.category.name === activeTab);
console.log(`soy products filtrados`, filteredProducts)

// const onTabSwitch = (newActiveTab) => {
//   setActiveTab(newActiveTab);
// }


  return ( 
    <div className='bg-white h-[700px]'>
        {
          products.status === "pending" ?
          <div className='bg-white text-2xl'> Loading ...</div> :
          <div className='menu-wrapper'>  
          {
            products &&
             <Tabs
             list={uniqueCategories} 
             activeTab={activeTab}
             onTabSwitch={ onTabSwitch}
             /> 
          }
          <div className='flex flex-row mx-3'>
          {
  filteredProducts?.map((product, index) => {
    return (
      <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct} />
    );
  })
}
             </div>
             </div>
        }
      
      </div>  
  ) 
}
 
export default Menu