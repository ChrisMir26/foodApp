import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cart");
const initialState = {
  products: storedCart ? JSON.parse(storedCart) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.products.find((product) => product._id === action.payload._id);

      if (productInCart) {
        productInCart.amount += 1;
      } else {
        state.products.push({ ...action.payload, amount: 1 });
      }

      // Guarda el estado actualizado en el localStorage
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      // Borra el carrito del localStorage al vaciarlo
      localStorage.removeItem("cart");
    },
    incrementProductAmount: (state, action) => {
      const product = state.products.find((p) => p._id === action.payload);
      if (product) {
        product.amount += 1;
        // Guarda el estado actualizado en el localStorage
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
    decrementProductAmount: (state, action) => {
      const product = state.products.find((p) => p._id === action.payload);
      if (product && product.amount > 1) {
        product.amount -= 1;
      } else {
        state.products = state.products.filter((item) => item._id !== action.payload);
      }

      // Guarda el estado actualizado en el localStorage
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;

// Exporta cartProducts
export const cartProducts = state => state.cart.products;