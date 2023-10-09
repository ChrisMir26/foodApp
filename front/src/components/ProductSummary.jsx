import { useSelector } from "react-redux";
import { cartProducts } from "../store/cart/cartSlice";
import ProductSummaryCard from "./ProductSummaryCard";

export const ProductSummary = () =>{
  const cart = useSelector(cartProducts);

  const isCartEmpty = cart.every((product) => product.amount === 0);

  return(
    <div className="min-h-[300px] p-5">
      <div >
        <div className="flex flex-col">
          {isCartEmpty ? (
            <h1>Your Cart is empty</h1>
          ) : (
            cart.map((product, index) => {
              // Solo retornamos la tarjeta si product.amount es diferente de 0
              if (product.amount !== 0) {
                return <ProductSummaryCard product={product} key={index} />;
              }
              return null;
            })
          )}
        </div>
      </div>
      </div>
   
  )
  }





