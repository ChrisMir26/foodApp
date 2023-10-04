import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { fetchProducts, selectAllProducts } from '../store/menu/productsSlice'


const Menu = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts )

  useEffect(()=>{
    dispatch(fetchProducts())
    console.log(`soi pdroucts paa `, products)
  },[])

  return (
    <div>Menu</div>
  )
}

export default Menu