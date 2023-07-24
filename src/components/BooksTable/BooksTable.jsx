import { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../Reducers/Book';
import PopUp from '../Modal/PopUp';
import axios from 'axios';

export const BooksTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const membersList = useSelector((state) => state.books.value);

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
        if (membersList) {
            setIsLoading(false)

        } else if (membersList.error) {
            setIsOpen(true)
            setIsLoading(false)
            setMessage({ title: 'Network Error', err: error })
        }
    }, [membersList])



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
                    membersList.success && membersList.success.map((book, index) => {
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
