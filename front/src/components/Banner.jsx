import React from 'react'
import Button from './Button'
import { Link}from "react-router-dom"

const Banner = () => {
  return (
    <div className='banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between'>
        <div className='banner-description w-full md:w1/2 p-3'>
            <h2 className="mg-6 text-4xl font-bold text-white">
                Food Ordering Made easy    
            </h2> 
            <p className='font-semibold text-lg text-red-600 py-2'>
                Get Started Today!
            </p>
            <div className="btn-container">
                <Link to="/menu"> <Button >Order Now</Button> </Link>
                <a href="/menu" className='text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3'>
                    See Menu
                </a>
            </div>
        </div>
        <div className='banner-image w-full md:w-1/2 p-3 flex justify-end'>
            <img src={require("../assets/pizza_banner.png")} alt="banner" className='max-h-95'/>

        </div>

    </div>
  )
}

export default Banner