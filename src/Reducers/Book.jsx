import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
    name: "books",
    initialState: { value: [], book: '', isLendBookPage: false },
    reducers: {
        getBooks: (state, action) => {
            state.value = action.payload
        },

        addBook: (state, action) => { //Not working for now
            if (state.value.success) {
                state.value.success.push(action.payload.bookObject);
            }
        },

        updateBook: (state, action) => {
            state.value.success.map((book) => {
                if (book.id == action.payload.id) {

                    book.ISBN = action.payload.ISBN
                    book.title = action.payload.title
                    book.pages = action.payload.pages
                    book.filename = action.payload.file
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
            state.value.success = 
            state.value.success.filter((book) => book.id !== action.payload);
        },


        getSingleBook: (state, action) => {
            state.book = action.payload;
        },

        hideAddButton: (state, action) => {
            state.isLendBookPage = action.payload
        }
    }
})

export const { 
    getBooks, 
    addBook, 
    updateBook,
    getSingleBook,
    deleteBook, 
    hideAddButton 
} = BookSlice.actions;
export default BookSlice.reducer;
