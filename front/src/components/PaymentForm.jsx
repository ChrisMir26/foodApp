import {
  CardElement,
  useElements,
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartProducts } from "../store/cart/cartSlice";
import { getAddress, clearAddress } from "../store/userInfo/addressSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import config from "../config.js"



const stripePromise = loadStripe(config.STRIPE_PUBLISHABLE_KEY);


export const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

const PaymentForm = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector(cartProducts);
  const address = useSelector(getAddress);
  const navigate = useNavigate();
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!stripe || !elements || !cart?.length || !address) {
      return;
    }
    setLoading(true);
    try {
        console.log(process.env.REACT_APP_STRIPE_URL)
      const response = await fetch(`${config.STRIPE_URL}/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          orderItems: cart,
          userId: "",
          shippingAddress: address,
        }),
      });
  
      // Check if the response is OK
      if (!response.ok) {
        const text = await response.text();
        console.error("Failed request:", text);
        throw new Error(`Request failed: ${text}`);
      }
  
      const responseData = await response.json();
  
      const { error: backeEndError, clientSecret } = responseData;
  
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });
  
      if (backeEndError || stripeError) {
        setError(backeEndError || stripeError);
      } else if (paymentIntent.status === "succeeded") {
        dispatch(clearAddress());
        dispatch(clearCart());
        navigate("/payment-success");
      }
    } catch (err) {
      console.log(err);
    }
  
    setLoading(false);
  };
  

  return (
    <form
      className="md:-2/3 md:mx-auto px-2 pt-1"
      id="payment-form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">
        Please enter your card details
      </label>
      <div className="my-4">
        <CardElement id="card-element" />
      </div>
      <div className="flex justify-center p-2">
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Pay Now"}
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;
