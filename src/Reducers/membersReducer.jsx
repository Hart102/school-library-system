import { createSlice } from "@reduxjs/toolkit";


export const membersSlice = createSlice({
    name: 'members',
    initialState: { value: '', member: '', borrowers: '' },

    reducers: {
        // This action was used in Api component 
        getMembers: (state, action) => {
            state.value = action.payload
        },

        // Add new members
        addMembers: (state, action) => {
            if (state.value.success) {
                state.value.success.push(action.payload);
            }
        },

        // This action was used in add member pages
        upDateMember: (state, action) => {
            state.value.success.map((member) => {
                if (member._id == action.payload._id) {
                    member.Profile = action.payload.url;
                    member.RegNo = action.payload.RegNo;
                    member.Email = action.payload.Email;
                    member.College = action.payload.College;
                    member.FullName = action.payload.FullName;
                    member.Department = action.payload.Department;
                    member.YearOfAdmission = action.payload.YearOfAdmission;
                }
            })
        },

        // This action was used in members componenet 
        getSingleMember: (state, action) => {
            state.member = action.payload;
        },

        // This action was used on the members component 
        deleteMember: (state, action) => {
            state.value.success =
                state.value.success.filter((member) => member._id !== action.payload);
        },

        // Add new books to members record 
        // This function was used in the lend books page
        borrowBooks: (state, action) => {
            if (state.value.success) {
                state.value.success.map((member) => {
                    if (member.RegNo == action.payload.regNo) {
                        member.books.push(action.payload.BorrowedBook)
                    }
                })
            }
        },

        // Return books action 
        // This function was used in the members profile page 
        returnBookAction: (state, action) => {
            if (state.value.success) {
                state.value.success.map((member) => {
                    if (member.RegNo == action.payload.regNo) {
                        member.books.splice(member.books.findIndex(book => book.id === action.payload.bookId), 1);
                    }
                })
            }
        },

        // This function was used in the borrowers component to get the total number of borrowers
        countBorrowers: (state, action) => {
            if (state.value.success) {
                state.borrowers = {success: action.payload}
            }
        }

    }
})


export const {
    getMembers,
    addMembers,
    upDateMember,
    getSingleMember,
    deleteMember,
    borrowBooks,
    returnBookAction,
    countBorrowers
} = membersSlice.actions;
export default membersSlice.reducer;

