import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
    name: "books",
    initialState: { value: [], book: '', isLendBookPage: false },
    reducers: {
        getBooks: (state, action) => {// Get all books from data base
            state.value = action.payload
        },

        // This function was used in add books page 
        addBook: (state, action) => {// Add new books
            if (state.value.success) {
                state.value.success.push(action.payload);
            }
        },

        // This function was used in add books page
        updateBook: (state, action) => {// Update existing books
            state.value.success.map((book) => {
                if (book.id == action.payload.id) {

                    book.ISBN = action.payload.ISBN
                    book.title = action.payload.title
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

        // This function was used in books table page
        deleteBook: (state, action) => {// Delete books
            state.value.success =
                state.value.success.filter((book) => book.id !== action.payload);
        },

        // This function was use in lend books page
        getSingleBook: (state, action) => {// get single book
            state.book = action.payload;
        },

        // This function was used in lend books page 
        // @DESC: it increases the number of borrowed books
        increaseBorrowedCount: (state, action) => {
            if (state.value.success) {
                state.value.success.map((book) => {
                    if (book.id == action.payload) {
                        book.count += 1;
                    }
                })
            }
        },

        // This function was used in profile page 
        // @DESC: it descrease the number of borrowed books
        descreaseBooksCountAction: (state, action) => {
            if (state.value.success) {
                state.value.success.map((book) => {
                    if (book.id == action.payload) {
                        book.count -= 1;
                    }
                })
            }
        },

        // This function was used in members component and lend books page
        hideAddButton: (state, action) => {// Display borrow book btn
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
    increaseBorrowedCount,
    descreaseBooksCountAction,
    hideAddButton
} = BookSlice.actions;
export default BookSlice.reducer;
