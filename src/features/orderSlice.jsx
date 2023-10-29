import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    address: '',
    phone: '',
    paymentMethod: '',
};

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        setOrderField: (state, action) => {
            // Update the state with data from action.payload.formData
            console.log(action.payload.formData)
            return {
                ...state,
                ...action.payload.formData,
            };
        },
        clearOrder: (state) => {
            // Reset all order fields to their initial state
            return initialState;
        },
    },
});

export const { setOrderField, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
