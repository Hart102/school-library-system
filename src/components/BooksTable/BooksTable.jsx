import { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../Reducers/Book';
import PopUp from '../Modal/PopUp';

export const BooksTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const booksList = useSelector((state) => state.books.value);

    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const removeBook = (id) => {
        dispatch(deleteBook(id));
    }

    const updateBook = (book) => {
        navigate("/dashboard/add/books", { state: book });
    }

    useEffect(() => {
        if (booksList.success) {
            // setMembers(booksList.success)
            setIsLoading(false)

        } else if (booksList.error) {
            setIsOpen(true)
            setIsLoading(false)
            setMessage({ title: 'Network Error', err: booksList.error })
        }
        console.log(booksList.success.file            )
    }, [booksList])

    return (
        <>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>AUTHOR</th>
                    <th>TOTAL BOOKS</th>
                    <th>EDITION</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? <tr><td>Loading...</td></tr> :
                    booksList.success && booksList.success.map((book) => {
                        return (
                            <tr className="text-capitalize" role='button' key={book._id}>
                                <td>
                                    <img src={"public/1689935223251-tools.jpeg"} className='me-3' />
                                    {book.title}
                                </td>
                                <td className='pt-3'>{book.author}</td>
                                <td className='pt-3'>{book.totalBooks}</td>
                                <td className='pt-3'>{book.edition}</td>
                                <td className='pt-3'>
                                    <Icon.Pencil className='me-4' onClick={() => updateBook(book)} />
                                    <Icon.Trash onDoubleClick={() => removeBook(book._id)} />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <PopUp
                message={message.err}
                title={message.title}
                action={isOpen}
                onclick={() => setIsOpen(false)}
            />
        </>
    )
}

