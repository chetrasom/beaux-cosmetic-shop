import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 1,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // destructuring payload
            const { id, amount, product } = action.payload;

            // find match id
            const tempItem = state.cart.find((i) => i.id === id);

            // condition if existing item (item.id + color = increase quantity), else !item.id (Add New Item)
            if (tempItem) {
                // Existing Item in card
                const tempCart = state.cart.map((cartItem) => {
                    if (cartItem.id === id) {
                        let newAmount = cartItem.amount + amount;

                        if (newAmount > cartItem.maxStock) {
                            newAmount = cartItem.maxStock
                        }

                        return { ...cartItem, amount: newAmount }
                    } else {
                        return cartItem
                    }
                })

                // return
                state.cart = tempCart
            } else {
                // Add New Item Object
                const newItem = {
                    id: id,
                    name: product?.name,
                    amount,
                    image: product?.images.data[0].attributes.url,
                    price: product?.price,
                    maxStock: product?.stock,
                    category: product?.categories.data[0].attributes.name
                }

                // return
                state.cart = [...state.cart, newItem]
            }

            toast.success('Success! Item add to cart.')
        },
        removeItem: (state, action) => {
            const tempCart = state.cart.filter((item) => item.id !== action.payload);
            state.cart = tempCart;
            toast.error('Items Removed')
        },
        clearCart: (state, action) => {
            state.cart = [];
        },
        toggleAmount: (state, action) => {
            const { id, type } = action.payload;

            const tempCart = state.cart.map((item) => {

                if (item.id === id) {
                    // increase amount
                    if (type === 'INC') {
                        let newAmount = item.amount + 1
                        if (newAmount > item.maxStock) {
                            newAmount = item.maxStock
                        }
                        return { ...item, amount: newAmount }
                    }

                    // decrease amount
                    if (type === 'DEC') {
                        let newAmount = item.amount - 1
                        if (newAmount < 1) {
                            newAmount = 1
                        }
                        return { ...item, amount: newAmount }
                    }
                } else {
                    return item
                }
            });
            state.cart = tempCart;
        },
        countCartTotal: (state, action) => {
            const { total_items, total_amount } = state.cart.reduce((total, cartItem) => {
                // cartItem
                const { amount, price } = cartItem;

                // console.log(total) - total
                total.total_items += amount;
                total.total_amount += price * amount;

                // return total
                return total;
            }, {
                // default
                total_items: 0, total_amount: 0
            });

            return { ...state, total_items, total_amount }
        }
    },
});

export const { addToCart, removeItem, toggleAmount, clearCart, countCartTotal } = cartSlice.actions;

export const selectorCart = (state) => state.cart;

export default cartSlice.reducer;