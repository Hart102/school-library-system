import * as Icon from "react-bootstrap-icons"

const BooksContainer = ({ BookObject }) => {
    return (
        <div className="col-md-9 d-lg-flex shadow-sm p-3">
            <div className="book-image-preview">
                <img src={BookObject.coverImage} className="img-fluid rounded" alt="image" />
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center w-100 ms-lg-4">
                <div className="my-lg-0 my-3">
                    <b>{BookObject.title}</b>
                    <p className="my-0">Date Borrorwed: {BookObject.borrowedDate}</p>
                    <p className="my-0">Returning Date: {BookObject.returninDate}</p>
                </div>
               
                <button className="btn">
                    Return
                    <Icon.ArrowRight className="ms-3" />
                </button>
            </div>
        </div>
    )
}

export default BooksContainer