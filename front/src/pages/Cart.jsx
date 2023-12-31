import Tabs, { tabs } from "../components/Tabs";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { cartProducts } from "../store/cart/cartSlice";
import useTabSwitch from "../hooks/useTabSwitch";
import AddressForm from "../components/AddressForm";
import { ProductSummary } from "../components/ProductSummary";
import { StripeWrapper } from "../components/PaymentForm";

const Cart = () => {
  const cart = useSelector(cartProducts);
  const tabs = ["Summary", "Delivery", "Payment"];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, "Summary");

  const isCartEmpty = cart.every((product) => product.amount === 0);

  // if (!cart || cart?.length === 0) {
  //   return (
  //     <div className="bg-white h-full text-black flex  justify-center p-4">
  //       <h1>Your Cart is empty</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white h-auto text-black  mt-2 border  border-gray-200 p-10  m-auto mb-5  md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
      <div className={`tabs ${currentTab !== "Summary" ? "hidden" : ""}`}>
        <ProductSummary />
        <div className="flex justify-end p-2">
          {isCartEmpty ? (
            ""
          ) : (
            <Button
              variant="dark"
              className="flex items-center"
              onClick={() => handleTabSwitch("Delivery")}
            >
              <span className="mr-1">Next</span>
            </Button>
          )}
        </div>
      </div>
      <div className={`tabs ${currentTab !== "Delivery" ? "hidden" : ""}`}>
        <AddressForm onTabSwitch={handleTabSwitch} />
      </div>
      <div className={`tabs ${currentTab !== "Payment" ? "hidden" : ""}`}>
        <StripeWrapper />
      </div>
    </div>
  );
};

export default Cart;
