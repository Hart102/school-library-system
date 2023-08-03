import axios from "axios";
import { redirect, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux";
import { getMembers } from "../../Reducers/membersReducer";
import { getBooks } from "../../Reducers/Book";
import { getSession } from "../../Reducers/AdminSession";

let response;

export const initializeSession = async () => {
    const dispatch = useDispatch();
    // const location = useLocation();
    const response = await axios.get("http://localhost:3000/api/adminLogin")

    // if login is successful or if session exist redirect user to dashboard
    if(!response.data.error){
        dispatch(getSession(response.data.success))
        // location('/dashboard')
    }
}

export const getAllMembers = async () => { //Get all member from the database
    const dispatch = useDispatch();
    response = await axios.get('http://localhost:3000/api/getAllMembers')
    dispatch(getMembers(response.data))
}

export const getAllBooks = async () => { //Get all books from the database
    const dispatch = useDispatch();
    response = await axios.get('http://localhost:3000/api/getAllBooks')
    dispatch(getBooks(response.data))
}
