import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../products/productsSlice";

const initialState = {
    filtered_products: [],  // for sort
    all_products: [],       // for filters
    sort: "price-lowest",   // controlled select input
    filters: {
        text: '',
        product_type: 'all',
        brand: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    },
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        // Sorts
        updateSort: (state, action) => {
            state.sort = action.payload
        },
        sortProducts: (state) => {
            const { sort, filtered_products } = state;

            let tempProducts = [];

            if (sort === 'price-lowest') {
                tempProducts = filtered_products.sort((a, b) => {
                    return a?.attributes?.price - b?.attributes?.price
                })
            }

            if (sort === 'price-highest') {
                tempProducts = filtered_products.sort((a, b) => {
                    return b?.attributes?.price - a?.attributes?.price
                })
            }

            if (sort === 'name-a') {
                tempProducts = filtered_products.sort((a, b) => {
                    return a?.attributes?.name.localeCompare(b?.attributes?.name)
                })
            }

            if (sort === 'name-z') {
                tempProducts = filtered_products.sort((a, b) => {
                    return b?.attributes?.name.localeCompare(a?.attributes?.name)
                })
            }

            state.filtered_products = tempProducts;
        },

        // Filters
        updateFilters: (state, action) => {
            const { name, value } = action.payload
            return { ...state, filters: { ...state.filters, [name]: value } }
        },
        clearFilters: (state) => {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    product_type: 'all',
                    brand: 'all',
                    price: state.filters.max_price,
                    shipping: false,
                }
            }
        },
        filtersProducts: (state) => {
            const { all_products } = state;
            const { text, product_type, brand, price, shipping } = state.filters;

            let tempProducts = [...all_products];

            // Filtering

            // Text
            if (text) {
                tempProducts = tempProducts.filter((product) => {
                    return product?.attributes?.name.toLowerCase().startsWith(text)
                })
            }

            // Product_type or Category
            if (product_type !== 'all') {
                tempProducts = tempProducts.filter((product) => {
                    return product?.attributes?.product_type === product_type
                })
            }

            // Brand
            if (brand !== 'all') {
                tempProducts = tempProducts.filter((product) => {
                    return product?.attributes?.brand === brand
                })
            }

            // Price
            tempProducts = tempProducts.filter((product) => product?.attributes?.price <= price);

            // Shipping
            if (shipping) {
                tempProducts = tempProducts.filter((product) => {
                    return product?.attributes?.shipping === true
                })
            }

            // return
            state.filtered_products = tempProducts;
        },
    },
    // Load data
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                let maxPrice = action.payload.map((product) => product?.attributes?.price);
                maxPrice = Math.max(...maxPrice);

                state.filtered_products = [...action.payload] // copy filtered_products
                state.all_products = [...action.payload]      // copy all_products

                state.filters = {
                    ...state.filters,
                    max_price: maxPrice,
                    price: maxPrice,
                }
            })
    }
});

export const { 
    updateSort, sortProducts,
    updateFilters, clearFilters, filtersProducts,
    changePage
} = filtersSlice.actions;

export const selectorFilters = (state) => state.filters;

export default filtersSlice.reducer;