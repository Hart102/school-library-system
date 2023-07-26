import axios from "axios"

/* This module is used in making post requests, such as
registering of books and members, as all this api calls has the same logic 
*/
export const PostRequest = async (
    url,
    info,
    setIsLoading,
    isModalOpen,
    clearInput,
    setMessage,
    dispatchAction,
) => {
    let request, response;

    // Make a post request using the provided api and data
    request = await axios.post(url, info);
    response = request.data;

    // set isLoading to true while the api call is still not resolved
    setIsLoading(true);

    /*if Successful, clear InputBoxes, dispatch actions in redux, 
    set isloading to false, display a model box for successful Message 
    and set the message that is displayed in model */
    if (response.success) {
        clearInput()
        dispatchAction
        setIsLoading(false)
        isModalOpen(true)
        setMessage({
            title: "success",
            msg: response.success
        })

    } else {
        /* if not successfule, open the model and 
        display error Message, set isLoading to false */
        isModalOpen(true)
        setIsLoading(false)
        setMessage({
            title: "Error",
            msg: response.error
        })
    }
}
