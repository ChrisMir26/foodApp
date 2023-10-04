import React,{useState,useEffect} from 'react'
import ProductPreviewCard from './ProductPreviewCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProductReview = () => {
    const [products, setProducts] = useState([])

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
        fetch(`http://localhost:4000/api/products`)
        .then(res => res.json())
        .then(data =>{   
            if(data) setProducts(data?.data)
            else throw new Error(`sorry we have an issue`)
        })
        .catch((error)=> console.log(error))
    },[])


    const onAddProduct = (product) =>{
        console.log(product)
    }
  return (
    <div className='container mx-auto pb-4 w-2/3 text-white bg-black '>
        <h2 className='text-white'> Products</h2>
        <Carousel responsive={responsive} >
       {
                products.length > 0 && products.map((product, index) => {
                    return  <div className="w-full p-3"><ProductPreviewCard key={index} product={product}  onAddProduct={onAddProduct} /></div>
                })
                
            }
            
        </Carousel>
  
        
    </div>
  )
}

export default ProductReview