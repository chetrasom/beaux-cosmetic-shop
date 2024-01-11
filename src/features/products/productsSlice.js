import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL, STRAPI_API_TOKEN } from '../../utils/urls';

const initialState = {
    products: [],
    products_status: 'idle',
    products_error: null,
    single_product: [],
    single_status: 'idle',
    single_error: null,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (endpoint) => {
    const response = await axios.get(`${API_URL}${endpoint}`, {
        headers: {
            authorization: 'Bearer ' + STRAPI_API_TOKEN,
        },
    });

    const result = await response.data;

    return result?.data;
});

export const fetchSingleProduct = createAsyncThunk('', async (endpoint) => {
    const response = await axios.get(`${API_URL}${endpoint}`, {
        headers: {
            authorization: 'Bearer ' + STRAPI_API_TOKEN,
        },
    });

    const result = await response.data;

    return result?.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.products_status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products_status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.products_status = 'failed';
                state.products_error = action.error.message;
            })

            .addCase(fetchSingleProduct.pending, (state) => {
                state.single_status = 'loading';
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.single_status = 'succeeded';
                state.single_product = action.payload;
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.single_status = 'failed';
                state.single_error = action.error.message;
            })
    },
});

export const selectorProducts = (state) => state.products;

export default productsSlice.reducer;