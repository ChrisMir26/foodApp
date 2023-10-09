
import React,{useState,useEffect} from 'react'
import ProductPreviewCard from './ProductPreviewCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useDispatch,useSelector} from "react-redux"
import {addToCart} from "../store/cart/cartSlice"
import './spinner.css'



const ProductReview = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}/products`)
        .then(res => res.json())
        .then(data =>{   
            if(data) {
              setProducts(data?.data)
              setLoading(false)
            }
            else throw new Error(`sorry we have an issue`)
        })
        .catch((error)=> console.log(error))
        setLoading(false)

    },[])


    const onAddProduct = (product) =>{
        dispatch(addToCart(product))   

    }
  return (
    <div className='container mx-auto pb-4 w-2/3 text-white bg-black '>
        <h2 className='text-white'> Products</h2>
        {loading && loading ?
        <div className='spinner mx-auto ' ></div> :
        <Carousel responsive={responsive} >
       {
                products.length > 0 && products.map((product, index) => {
                    return  <div className="w-full p-3"><ProductPreviewCard key={index} product={product}  onAddProduct={onAddProduct} /></div>
                })
                
            }
            
        </Carousel>}
  
        
    </div>
  )
}

export default ProductReview