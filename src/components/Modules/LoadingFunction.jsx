/*
Loading function
This module was used in membersTable Component and booksTable component 
*/
const LoadingFunction = (
    requestData,
    setIsLoading,
    setIsModelOpen,
    setMessage,
    dispatchAction,
) => {

    if(requestData.success){
        setIsLoading(false)

    }else if(requestData.error){
        setIsLoading(false)
        setIsModelOpen(true)
        setMessage({
            title: 'Error',
            msg: requestData.error
        })
        dispatchAction
    }
}

export default LoadingFunction