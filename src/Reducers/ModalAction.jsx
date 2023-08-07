import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: "modal",
    initialState: { message: { title: '', body: '' }, isModalOpen: false },
    reducers: {
        modalAction: (state, action) => {
            if(action.payload){
                state.isModalOpen = action.payload;
                // state.message.title = action.payload.title
                // state.message.body = action.payload.msg
            }
        },

        setMessageAction: (state, action) => {
            if(action.payload && state.isModalOpen == true){
                state.message.title = action.payload.title
                state.message.body = action.payload.msg
            }
        }
    }
})

export const { modalAction, setMessageAction } = ModalSlice.actions;
export default ModalSlice.reducer; 