import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MembersData } from "../components/DemoData";

// const dispatch  = useDispatch();
// export const getUsers = createAsyncThunk('users/getUsers', async () => {
//     const response = await axios.get('http://localhost:8000/api/getAllMembers')
//     // return response.data
//     dispatch(getMember(response.data))
// }) 



// return
export const membersSlice = createSlice({
    name: 'members',
    initialState: { value: '', member: '' },

    reducers: {
        // This action was used in Api component 
        getMembers: (state, action) => {
            state.value = action.payload
        },

        addMembers: (state, action) => {
            state.value.success = state.value.success.push(action.payload)
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

        // Adding new book to members record 
        // This action was used in lend books page 
        borrowBooks: (state, action) => {
            state.value.success.map((member) => {
                if (member._id == action.payload._id) {
                    member.books.push(action.payload.book)
                }
            })
        },

        // Return book action 
        // This action was used in profile page 
        returnBookAction: (state, action) => {

            state.value.success = state.value.success.map((member) => {
                if(member._id == action.payload._id){
                    member.books = member.books.splice(member.books.findIndex(book => book.id === action.payload._id), 1);
                }
            })
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
    returnBookAction
} = membersSlice.actions;
export default membersSlice.reducer;

