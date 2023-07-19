import { createSlice } from "@reduxjs/toolkit";
import { DemoBooks } from "../components/DemoData";

export const BookSlice = createSlice({
    name: "books",
    initialState: { value: DemoBooks },
    reducers: {
        addBook: (state, action) => {
            state.value.push(action.payload);
        },

        updateBook: (state, action) => {
            state.value.map((book) => {
                if (book._id == action.payload._id) {
                    book.pages = action.payload.pages;
                    book.edition = action.payload.edition;
                    book.category = action.payload.category;
                    book.publisher = action.payload.publisher;
                    book.bookTitle = action.payload.bookTitle;
                    book.coverImage = action.payload.coverImage;
                    book.totalBooks = action.payload.totalBooks;
                }
            })
        },

        deleteBook: (state, action) => {
            state.value = state.value.filter((book) => book._id !== action.payload);
        }
    }
})

export const { addBook, updateBook, deleteBook } = BookSlice.actions;
export default BookSlice.reducer;