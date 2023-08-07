import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../Reducers/Book';
import DeleteRequest from './Modules/DeleteRequest';
import { hideAddButton } from "../Reducers/Book"
import LoadingFunction from './Modules/LoadingFunction'
import ImagePath from './ImagePath';
import { modalAction, setMessageAction } from '../Reducers/ModalAction';



export const BooksTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const { value, isLendBookPage } = useSelector((state) => state.books);

    // Redirect to update Book update page with book data
    const updateBook = (book) => {
        navigate("/add/books", { state: book });
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

    if (message) {
        dispatch(
            setMessageAction({
                title: message.title,
                msg: message.msg
            })
        )
        dispatch(modalAction(true))
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
                    <th>TOTAL COPIES</th>
                    <th>BORROWED</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? <tr><td>Loading...</td></tr> :
                    value.success && value.success.map((book, index) => {
                        return (
                            <tr className="text-capitalize" role='button' key={index}>
                                <td>
                                    <img src={ImagePath(book.filename)} className='me-3' alt={book.filename} />
                                    {book.title}
                                </td>
                                <td className='pt-3'>{book.author}</td>
                                <td className='pt-3'>{book.totalBooks}</td>
                                <td className='pt-3'>{Number(book.count)}</td>
                                <td className='pt-3 d-flex flex-lg-row flex-column'>
                                    <Icon.Pencil
                                        className='mx-lg-4 my-lg-0 my-3'
                                        onClick={() => updateBook(book)}
                                    />

                                    <Icon.Trash
                                        title='Doublick to delete'
                                        onDoubleClick={() => deleteBooks({ id: book.id, filename: book.filename })}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </>
    )
}
