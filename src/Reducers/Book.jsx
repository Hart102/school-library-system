import { createSlice } from "@reduxjs/toolkit";
// import { DemoBooks } from "../components/DemoData";

export const BookSlice = createSlice({
    name: "books",
    initialState: { value: '', error: '' },
    reducers: {
        getBooks: (state, action) => {
            if (action.payload && action.payload.error) {
                return state.error = action.payload
            }
            state.value = action.payload.success
        },

        addBook: (state, action) => {
            state.value.push(action.payload);
        },

        updateBook: (state, action) => {
            state.value.map((book) => {
                if (book._id == action.payload._id) {
                    book.ISBN = action.payload.ISBN
                    book.title = action.payload.title
                    book.pages = action.payload.pages
                    book.author = action.payload.author
                    book.length = action.payload.length
                    book.subject = action.payload.subject
                    book.edition = action.payload.edition
                    book.publisher = action.payload.publisher
                    book.totalBooks = action.payload.totalBooks
                    book.description = action.payload.description
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