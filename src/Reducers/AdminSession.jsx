import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: 'session',
    initialState: { value: '' },

    reducers: {
        getSession: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { getSession } = sessionSlice.actions;

export default sessionSlice.reducer;