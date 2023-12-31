import axios from "axios";
import { redirect, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux";
import { getMembers } from "../../Reducers/membersReducer";
import { getBooks } from "../../Reducers/Book";

let response;
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
