import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebar: false,
    isCartSidebar: false,
    isFilterSidebar: false,
    isSearchBox: false,
    grid_view: true,
}

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.isSidebar = true
        },
        closeSidebar: (state) => {
            state.isSidebar = false
        },
        openCartSidebar: (state) => {
            state.isCartSidebar = true
        },
        closeCartSidebar: (state) => {
            state.isCartSidebar = false
        },
        openFilterSidebar: (state) => {
            state.isFilterSidebar = true
        },
        closeFilterSidebar: (state) => {
            state.isFilterSidebar = false
        },
        openSearchBox: (state) => {
            state.isSearchBox = true
        },
        closeSearchBox: (state) => {
            state.isSearchBox = false
        },
        setGridView: (state) => {
            state.grid_view = true
        },
        setListView: (state) => {
            state.grid_view = false
        }
    },
});

export const { 
    openSidebar, closeSidebar, 
    openCartSidebar, closeCartSidebar,
    openFilterSidebar, closeFilterSidebar,
    openSearchBox, closeSearchBox,
    setGridView, setListView
} = toggleSlice.actions;

export const selectorToggle = (state) => state.toggle;

export default toggleSlice.reducer;