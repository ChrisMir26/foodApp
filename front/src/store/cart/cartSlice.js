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
      return {
        products: [...state.products, { ...action.payload, amount: 1 }],
      };
    },
    // Acción para vaciar el carrito
    clearCart: (state) => {
      return {
        products: [], // El carrito se vacía
      };
    },
    // Acción para incrementar la cantidad de un producto en el carrito
    incrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    },
    // Acción para decrementar la cantidad de un producto en el carrito
    decrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      };
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