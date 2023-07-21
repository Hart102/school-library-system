import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addBook, updateBook } from "../../Reducers/Book";
import Button from "../../components/Button/Button";
import { FormInput } from "../../components/FormInput";
import PopUp from "../../components/Modal/PopUp";
import { Title } from "../../components/Title";
import FormLayout from "../../layout/FormLayout";


import axios from "axios";

const AddBooks = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const booksList = useSelector((state) => state.books.value);
    const [bookToUpdate, setBookToUpdate] = useState(location.state);

    const [file, setFile] = useState('');
    const [pages, setPages] = useState('');
    const [edition, setEdtion] = useState('');
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [publisher, setPublisher] = useState('');
    const [totalBooks, setTotalBooks] = useState('');
    const [author, setAuthor] = useState('')
    const [length, setLength] = useState('')
    const [ISBN, setIsbn] = useState('')

    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const formData = new FormData();
    formData.append('isbn', ISBN);
    formData.append('file', file);
    formData.append('length', length);
    formData.append('edition', edition);
    formData.append('subject', subject);
    formData.append('title', title);
    formData.append('publisher', publisher);
    formData.append('totalBooks', totalBooks);




    const clearInputs = () => {
        setFile('');
        setPages('');
        setEdtion('');
        setSubject('');
        setTitle('');
        setPublisher('');
        setTotalBooks('');
    }


    let api, response, data;

    const registerBooks = async () => {
        api = 'http://localhost:8000/api/registerBooks'
        response = await axios.post(api, formData)
        data = response.data

        if (data.success) {
            dispatch(
                addBook({
                    ISBN,
                    pages,
                    edition,
                    subject,
                    title,
                    author,
                    publisher,
                    totalBooks,
                    file: file.name
                })
            )

            clearInputs()
            setIsLoading(false)
            setMessage({ title: 'Success', msg: data.success })

        } else {
            console.log(data)
        }
    }

    const SubmitForm = (event) => {
        event.preventDefault();
        registerBooks()

    }

    const getFile = (event) => {
        setFile(event)
    }

    useEffect(() => {

        if (bookToUpdate) { // Update book function 
            setPages(bookToUpdate.pages)
            setEdtion(bookToUpdate.edition)
            setFile(bookToUpdate.cover)
            setSubject(bookToUpdate.subject)
            setTitle(bookToUpdate.title)
            setPublisher(bookToUpdate.publisher)
            setTotalBooks(bookToUpdate.totalBooks)
        }
    }, [])








    return (
        <>
            <FormLayout onsubmit={SubmitForm}>
                <Title text={bookToUpdate ? 'update book' : 'Add Book'} />


                <FormInput
                    label="title"
                    type='text' value={title}
                    onchange={(e) => setTitle(e.target.value.toLowerCase())}
                />

                <FormInput
                    label="author"
                    type='text' value={author}
                    onchange={(e) => setAuthor(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='edition'
                    type='text' value={edition}
                    onchange={(e) => setEdtion(e.target.value.toLowerCase())}
                />

                <FormInput
                    label="publisher"
                    type='text' value={publisher}
                    onchange={(e) => setPublisher(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='total copy'
                    type='text' value={totalBooks}
                    onchange={(e) => setTotalBooks(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='length'
                    type='number' value={length}
                    onchange={(e) => setLength(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='subject'
                    type='text' value={subject}
                    onchange={(e) => setSubject(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='ISBN'
                    type='text' value={ISBN}
                    onchange={(e) => setIsbn(e.target.value.toLowerCase())}
                />

                <FormInput
                    type='file'
                    onchange={(e) => setFile(e.target.files[0])}
                />

                <Button
                    type='type'
                    btnText={bookToUpdate ? 'Edit book' : 'Add Book'}
                />
            </FormLayout>
            <PopUp
                action={isModalOpen}
                message={message.msg}
                title={message.title}
                onclick={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default AddBooks

 // if (bookToUpdate) {
        //     dispatch(
        //         updateBook({
        //             pages,
        //             edition,
        //             subject,
        //             title,
        //             publisher,
        //             totalBooks,
        //             // ...bookObect,
        //             // _id: bookToUpdate._id
        //         })
        //     )
        //     clearInputs()
        // } else {
        //     dispatch(addBook(bookObect))
        //     clearInputs()
        // }