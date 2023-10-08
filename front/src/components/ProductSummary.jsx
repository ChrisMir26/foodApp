import { useSelector } from "react-redux";
import { cartProducts } from "../store/cart/cartSlice";
import ProductSummaryCard from "./ProductSummaryCard";

export const ProductSummary = () =>{
  const cart = useSelector(cartProducts);


  return(
    <div>
        <div className="flex flex-col ">
            { cart && cart?.map((product, index) => {
                return (
                    <ProductSummaryCard product={product} key={index} />
                )
            })}
        </div>

    </div>
  )
  }