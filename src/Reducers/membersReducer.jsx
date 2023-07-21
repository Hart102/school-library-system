import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    initialState: { value: [] },

    reducers: {
        getMembers: (state, action) => {
            state.value = action.payload
        },

        addMembers: (state, action) => {
            state.value.success = state.value.success.push(action.payload)
        },

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

        deleteMember: (state, action) => {
            state.value = state.value.filter((member) => member._id !== action.payload);
        },
    }
})


export const { getMembers, addMembers, upDateMember, deleteMember } = membersSlice.actions;
export default membersSlice.reducer;