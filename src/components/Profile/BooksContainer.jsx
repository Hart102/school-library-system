import * as Icon from "react-bootstrap-icons"

// Books display container styling 
export const BooksContainer = ({ children }) => {
    return (
        <div className="row gap-3 justify-content-center profile-book-display w-100">
            <div className="col-md-11 ps-4 mt-5">
                <b className="text-uppercase ms-1">Borrowed Books</b>
            </div>
            {children}
        </div>
    )
}

// Book display component styling
export const BooksContent = ({ filename, title, borrowerdDate, returningDate, onclick }) => {
    return (
        <div className="books-container col-md-11 d-lg-flex shadow-sm p-3 rounded">
            <div className="book-image-preview">
                <img src={`/uploads/${filename}`} className="img-fluid rounded" alt="image" />
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center w-100 ms-lg-4">
                <div className="my-lg-0 my-3">
                    <b>{title}</b>
                    <p className="my-0">Date Borrorwed: {borrowerdDate}</p>
                    <p className="my-0">Returning Date: {returningDate}</p>
                </div>
                <button className="btn" onClick={onclick}>
                    Return Book
                    <Icon.ArrowRight className="ms-3" />
                </button>
            </div>
        </div>
    )
}


{/* <img src={`/uploads/${BookObject.filename}`} className="img-fluid rounded" alt="image" /> */ }


// {
//     booksList && booksList.success.map((book, index) => (
//         book.id == BookObject.id &&
//         <img
//             key={index}
//             src={`/uploads/${BookObject.filename}`}
//             className="img-fluid rounded" alt="image"
//         />
//     ))
// }