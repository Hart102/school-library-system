import axios from "axios";
import { useDispatch } from "react-redux";
import { getMembers } from "../../Reducers/membersReducer";

export const getAllMembers = async () => {
    const dispatch = useDispatch();
    const response = await axios.get('http://localhost:8000/api/getAllMembers')
    dispatch(getMembers(response.data))
}