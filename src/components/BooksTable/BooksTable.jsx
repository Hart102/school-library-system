import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../Reducers/Book';
import DeleteRequest from '../Modules/DeleteRequest';
import PopUp from '../Modal/PopUp';
import { hideAddButton } from "../../Reducers/Book"
import LoadingFunction from '../Modules/LoadingFunction'


export const BooksTable = ({ displayAddIcon }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const { value, isLendBookPage } = useSelector((state) => state.books);

    // Redirect to update Book update page with book data
    const updateBook = (book) => {
        navigate("/dashboard/add/books", { state: book });
    }

    //Delete Book function
    const deleteBooks = (Obj) => {
        DeleteRequest(
            "http://localhost:3000/api/deleteBook", Obj,

            setIsLoading,
            setIsOpen,
            setMessage,
            dispatch(
                deleteBook(Obj.id)
            )
        )
    }

    // Load Data
    useEffect(() => {
        LoadingFunction(
            value,
            setIsLoading,
            setIsOpen,
            setMessage,
            dispatch(
                hideAddButton(false)
            )
        )
    }, [value])



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
                    value.success && value.success.map((book, index) => {
                        return (
                            <tr className="text-capitalize" role='button' key={index}>
                                <td>
                                    <img src={`/uploads/${book.filename}`} className='me-3' />
                                    {book.title}
                                </td>
                                <td className='pt-3'>{book.author}</td>
                                <td className='pt-3'>{book.totalBooks}</td>
                                <td className='pt-3'>{book.edition}</td>
                                <td className='pt-3 d-flex flex-lg-row flex-column'>
                                    <Icon.Pencil
                                        className='mx-lg-4 my-lg-0 my-3'
                                        onClick={() => updateBook(book)}
                                    />
                                    {
                                        isLoading ? <p>Deleting...</p> :
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
