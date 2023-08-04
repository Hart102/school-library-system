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

    // Make a post request using the provided api and data
    let request, response;
    request = await axios.post(url, info);
    response = request.data;

    // set isLoading to true while the api call is still not resolved
    setIsLoading(true);

    /*if Successful, clear InputBoxes, dispatch actions in redux, 
    set isloading to false, display a model box for successful Message 
    and set the message that is displayed in model 
    */
    if (response.success) {
        clearInput()
        dispatchAction
        setIsLoading(false)
        isModalOpen(true)
        setMessage({ title: "success", msg: response.success })

        // If warning 
    } else if (response.warning) {
        isModalOpen(true)
        setIsLoading(false)
        setMessage({ title: "Warning", msg: response.warning })

    } else { // If not successfule

        isModalOpen(true)
        setIsLoading(false)
        setMessage({ title: "Error", msg: response.error })
    }
}
