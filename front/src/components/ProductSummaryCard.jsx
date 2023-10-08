import { useDispatch } from "react-redux";
import {
  incrementProductAmount,
  decrementProductAmount,
} from "../store/cart/cartSlice";

const ProductSummaryCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row @sm:h-[4 20px] md:h-[220px]  w-full text-center sm:p-2 p-10 border-b border-b-gray-200 ">

      <div className="product-image mr-2   rounded-lg  w-full sm:w-1/3">
        <img src={product.image} alt={product.name} className=" h-[80%] @sm:w-[50%] md:h-[100%] md:w-[100%]  object-cover"/>
      </div>
      <div className="product-info text-left">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
      <div className="product-price-qt flex flex-col items-center justify-center">
        <div className="price">{`${product.price}$`}</div>
        <div className="quantity flex">
          <button
            className="p-1"
            disabled={product.amount <= 0}
             onClick={() => dispatch(decrementProductAmount(product._id))}
          >
            -
          </button>
          <span className="p-1 ">{product.amount}</span>
          <button
            className="p-1"
            onClick={() => {
              dispatch(incrementProductAmount(product._id));
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSummaryCard;
