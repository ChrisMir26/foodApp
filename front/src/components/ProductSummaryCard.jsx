import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  incrementProductAmount,
  decrementProductAmount,
} from "../store/cart/cartSlice";

const ProductSummaryCard = ({ product }) => {
  const dispatch = useDispatch();

  


  return (
    // flex flex-col md:flex-row @sm:h-[420px] md:h-[220px]  w-full text-center sm:p-2 p-10 border-b border-b-gray-200 
    <div className="flex flex-col md:flex-row  border-b border-b-gray-200 pb-1 mb-1">

      <div className="">
        <img src={product.image} alt={product.name} className="h-[150px] w-[150px]"/>
      </div>
      <div className="">
      <div className="flex flex-col justify-center">
        <h3 className="font-bold t-2">{product.name}</h3>
        <p className="text-gray-600 w-[80%] mt-2">{product.description}</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="price">{`${product.price * product.amount}$`}</div>
        <div className="quantity w-full">
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
    </div>
  );
};

export default ProductSummaryCard;





// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import {
//   incrementProductAmount,
//   decrementProductAmount,
// } from "../store/cart/cartSlice";

// const ProductSummaryCard = ({ product }) => {
//   const dispatch = useDispatch();

  


//   return (
//     <div className="flex flex-col md:flex-row @sm:h-[4 20px] md:h-[220px]  w-full text-center sm:p-2 p-10 border-b border-b-gray-200 ">

//       <div className="product-image mr-2   rounded-lg  w-full sm:w-1/3">
//         <img src={product.image} alt={product.name} className=" h-[80%] @sm:w-[50%] md:h-[100%] md:w-[100%]  object-cover"/>
//       </div>
//       <div className="product-info text-left">
//         <h3 className="font-bold">{product.name}</h3>
//         <p className="text-gray-600">{product.description}</p>
//       </div>
//       <div className="product-price-qt flex flex-col items-center justify-center">
//         <div className="price">{`${product.price * product.amount}$`}</div>
//         <div className="quantity flex">
//           <button
//             className="p-1"
//             disabled={product.amount <= 0}
//              onClick={() => dispatch(decrementProductAmount(product._id))}
//           >
//             -
//           </button>
//           <span className="p-1 ">{product.amount}</span>
//           <button
//             className="p-1"
//             onClick={() => {
//               dispatch(incrementProductAmount(product._id));
//             }}
//           >
//             +
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSummaryCard;
