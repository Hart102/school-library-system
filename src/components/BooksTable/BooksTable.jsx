import * as Icon from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../Reducers/Book';


export const BooksTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const booksList = useSelector((state) => state.books.value);

    const removeBook = (id) => {
        dispatch(deleteBook(id));
    }

    const updateBook = (book) => {
        navigate("/dashboard/add/books", { state: book });
    }

    return (
        <>
        <thead>
            <tr>
                <th>NAME</th>
                <th>PUBLISHER</th>
                <th>TOTAL BOOKS</th>
                <th>EDITION</th>
                <th>ACTION</th>
            </tr>
        </thead>


        <tbody>
            {booksList ? booksList.map((book) => (

                <tr className="text-capitalize" role='button' key={book._id}>
                    <td>
                        <img src={book.coverImage} className='me-3' />
                        {book.bookTitle}
                    </td>
                    <td className='pt-3'>{book.publisher}</td>
                    <td className='pt-3'>{book.totalBooks}</td>
                    <td className='pt-3'>{book.edition}</td>
                    <td className='pt-3'>
                        <Icon.Pencil className='me-4' onClick={() => updateBook(book)}/>
                        <Icon.Trash onDoubleClick={() => removeBook(book._id)}/>
                    </td>
                </tr>
            )) : null}
        </tbody>
        </>
    )
}