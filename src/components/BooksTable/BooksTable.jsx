import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../Reducers/Book';
import DeleteRequest from '../APIs/DeleteRequest';
import PopUp from '../Modal/PopUp';

export const BooksTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const booksList = useSelector((state) => state.books.value);

    const updateBook = (book) => {
        navigate("/dashboard/add/books", { state: book });
    }

    const deleteBooks = (Obj) => {
        DeleteRequest( //Delete Book function
            "http://localhost:3000/api/deleteBook", Obj,

            setIsLoading,
            setIsOpen,
            setMessage,
            dispatch(
                deleteBook(Obj.id)
            )
        )
    }
   
    useEffect(() => {
        if (booksList.success) {
            setIsLoading(false)

        } else if (booksList.error) {
            setIsOpen(true)
            setIsLoading(false)
            setMessage({ 
                title: 'Empty', 
                msg: booksList.error 
            })
        }
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
                    booksList.success && booksList.success.map((book, index) => {
                        return (
                            <tr className="text-capitalize" role='button' key={index}>
                                <td>
                                    <img src={`/uploads/${book.filename}`} className='me-3' />
                                    {book.title}
                                </td>
                                <td className='pt-3'>{book.author}</td>
                                <td className='pt-3'>{book.totalBooks}</td>
                                <td className='pt-3'>{book.edition}</td>
                                <td className='pt-3'>
                                    <Icon.Pencil className='me-4' onClick={() => updateBook(book)} />
                                    {isLoading ? <p>Deleting...</p> :
                                        <Icon.Trash onDoubleClick={() => deleteBooks({ id: book.id, filename: book.filename })} />
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <PopUp
                message={message.msg}
                title={message.title}
                action={isOpen}
                onclick={() => setIsOpen(false)}
            />
        </>
    )
}
