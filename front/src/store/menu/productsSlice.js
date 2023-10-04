import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Definición del estado inicial de la slice
const initialState = {
    products: [], // Almacena los productos obtenidos
    error: null,  // Almacena errores en caso de que ocurran
    status: 'idle', // Indica el estado actual de la solicitud
}

// Creación de la slice de Redux
export const productsSlice = createSlice({
    name: 'products', // Nombre de la slice
    initialState, // Estado inicial
    reducers: {}, // Reductores para actualizar el estado de manera síncrona (ninguno en este caso)
    extraReducers: (builder) => {
        // Manejo de acciones asincrónicas generadas por createAsyncThunk
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'fulfilled'; // Cambia el estado a 'fulfilled' cuando la solicitud tiene éxito
            state.products = action.payload.data[0].products; // Actualiza la lista de productos con los datos recibidos
        });

        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'pending'; // Cambia el estado a 'pending' mientras la solicitud está en progreso
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'error'; // Cambia el estado a 'error' si la solicitud falla
            state.error = action.error.message; // Almacena el mensaje de error
        });
    },
});

// Exporta una acción que no hace nada, ya que no hay reductores definidos
export const { getProducts } = productsSlice.actions

// Exporta el reductor generado por createSlice
export default productsSlice.reducer

// Define una acción asincrónica utilizando createAsyncThunk
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    // Realiza una solicitud HTTP para obtener datos de productos
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products-by-categories`);

    if (!response.ok) {
        throw new Error('Failed to fetch products'); // Lanza un error si la solicitud no tiene éxito
    }

    const data = await response.json(); // Convierte la respuesta en formato JSON
    return data; // Devuelve los datos para que se almacenen en el estado
});

// Selector para obtener la lista de productos desde el estado
export const selectAllProducts = state => state.products.products;






























// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// const initialState = {
//     products: [],
//     error: null,
//     status: 'idle',
// }

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchProducts.fulfilled, (state, action) => {
//             state.status = 'fulfilled';
//             state.products = action.payload.data[0].products;
//           });
          
//         builder.addCase(fetchProducts.pending, (state, action) => {
//             state.status = 'pending';
//         });
//         builder.addCase(fetchProducts.rejected, (state, action) => {
//             state.status = 'error';
//             state.error = action.error.message;
//         });
//     },
// });

// export const { getProducts } = productsSlice.actions

// export default productsSlice.reducer

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products-by-categories`);

//     if (!response.ok) {
//         throw new Error('Failed to fetch products');
//     }

//     const data = await response.json();
//     return data;
// });

// export const selectAllProducts = state => state.products.products;




