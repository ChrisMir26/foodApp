import { createSlice } from "@reduxjs/toolkit";

// Definimos el estado inicial del carrito
const initialState = {
  products: [], // Inicialmente, el carrito está vacío
};

// Creamos un "slice" de Redux llamado "cart"
export const cartSlice = createSlice({
  name: "cart", // Nombre del "slice"
  initialState, // Estado inicial del "slice"
  reducers: {
    // Acción para agregar un producto al carrito
    addToCart: (state, action) => {
      const productInCart = state.products.find(product => product._id === action.payload._id);

      if (productInCart) {
        // Si el producto ya está en el carrito, incrementa su cantidad
        productInCart.amount += 1;
      } else {
        // Si el producto no está en el carrito, agrégalo con una cantidad de 1
        state.products.push({ ...action.payload, amount: 1 });
      }
    },
    // Acción para vaciar el carrito
    clearCart: (state) => {
      return {
        products: [], // El carrito se vacía
      };
    },
    // Acción para incrementar la cantidad de un producto en el carrito
    incrementProductAmount: (state, action) => {
      const product = state.products.find((p) => p._id === action.payload);
      if (product) {
        product.amount += 1;
      }
    },
    // Acción para decrementar la cantidad de un producto en el carrito
    decrementProductAmount: (state, action) => {
      const product = state.products.find((p) => p._id === action.payload);
      if (product && product.amount > 1) {
        product.amount -= 1;
      }
      else{
        state.products = state.products.filter((item) => item._id !== action.payload);
      }
    },
  },
});

// Exportamos las acciones generadas automáticamente por createSlice
export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

// Exportamos el reducidor generado automáticamente por createSlice
export default cartSlice.reducer;


export const cartProducts = state => state.cart.products