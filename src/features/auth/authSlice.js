import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

// const getLocalStorage = () => {
//     let getSignIn = localStorage.getItem('isLogin')
//     if (getSignIn) {
//         return JSON.parse(localStorage.getItem('isLogin'))
//     } else {
//         return []
//     }
// }

const initialState = {
    // isLogin: getLocalStorage(),
    myUser: null,
    signInLoader: false,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInLocalStorage: () => {
            localStorage.setItem('isLogin', true);
            toast.success('User login')
        },
        signOutLocalStorage: (state) => {
            localStorage.removeItem('isLogin');
            state.myUser = false;
            toast.info('Logout successfully!')
        },

        getUserLocalStorage: (state) => {
            // state.myUser = localStorage.getItem('isLogin');
            state.myUser = JSON.parse(localStorage.getItem('isLogin'))
        }
    },
});

export const { signInLocalStorage, signOutLocalStorage, getUserLocalStorage } = authSlice.actions;

export const selectorAuth = (state) => state.auth;

export default authSlice.reducer;