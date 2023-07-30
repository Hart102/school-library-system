import * as Icon from "react-bootstrap-icons"

// Books display container styling 
export const BooksContainer = ({ children }) => {
    return (
        <div className="row gap-5 justify-content-center profile-book-display w-100">
            <b className="text-center text-uppercase">Borrowed Books</b>
            {children}
        </div>
    )
}

// Book display component styling
export const BooksContent = ({ BookObject, onclick }) => {
    return (
        <div className="books-container col-md-11 d-lg-flex shadow-sm p-3 rounded">
            <div className="book-image-preview">
                <img src={`/uploads/${BookObject.filename}`} className="img-fluid rounded" alt="image" />
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center w-100 ms-lg-4">
                <div className="my-lg-0 my-3">
                    <b>{BookObject.title}</b>
                    <p className="my-0">Date Borrorwed: {BookObject.borrowedDate}</p>
                    <p className="my-0">Returning Date: {BookObject.bookReturningDate}</p>
                </div>

                <button className="btn" onClick={onclick}>
                    Return Book
                    <Icon.ArrowRight className="ms-3" />
                </button>
            </div>
        </div>
    )
}
