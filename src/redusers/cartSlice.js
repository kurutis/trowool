import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity, selectedColor } = action.payload; 
            const item = state.items.find(item => item.id === id && item.selectedColor === selectedColor);
            if (item) {
                item.quantity += quantity; 
            } else {
                state.items.push({ ...action.payload }); 
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id || item.selectedColor !== action.payload.selectedColor);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;