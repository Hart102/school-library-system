import axios from "axios"

// This is a delete request module
const DeleteRequest = async (
    url,
    id,
    isLoading,
    isModelOpen,
    setMessage,
    dispatchAction,
) => {

    let request, response;
    // Make a delete request 
    request = await axios.post(url, id);
    response = request.data;

    // if the request is not yet resolved set isloading to true
    isLoading(true)

    /* if the request is resolved and successful, set isloading to false,
     open the model box to display a successful message and set the successful message */
    if (response.success) {
        isLoading(false)
        isModelOpen(true)
        setMessage({
            title: "Success",
            msg: "Record Deleted Successfully"
        })
        dispatchAction

    } else if (response.error) {
        isLoading(false)
        isModelOpen(true)
        setMessage({
            title: "Error",
            msg: response.error
        })
    }
}

export default DeleteRequest