import { createSlice } from "@reduxjs/toolkit";
// import { DemoBooks } from "../components/DemoData";

export const BookSlice = createSlice({
    name: "books",
    initialState: { value: [] },
    reducers: {
        getBooks: (state, action) => {
            state.value = action.payload
        },

        addBook: (state, action) => {
            state.value.push(action.payload);
        },

        updateBook: (state, action) => {
            state.value.map((book) => {
                if (book._id == action.payload._id) {
                    book.pages = action.payload.pages;
                    book.edition = action.payload.edition;
                    book.subject = action.payload.subject;
                    book.publisher = action.payload.publisher;
                    book.title = action.payload.title;
                    book.file = action.payload.file;
                    book.totalBooks = action.payload.totalBooks;
                }
            })
        },

        deleteBook: (state, action) => {
            state.value = state.value.filter((book) => book._id !== action.payload);
        }
    }
})

export const { getBooks, addBook, updateBook, deleteBook } = BookSlice.actions;
export default BookSlice.reducer;