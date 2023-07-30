import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateBook } from "../../Reducers/Book";
import { PostRequest } from "../../components/Modules/PostRequest";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput";
import PopUp from "../../components/Modal/PopUp";
import Title from "../../components/Title";
import FormLayout from "../../layout/FormLayout";


const AddBooks = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const [bookToUpdate, setBookToUpdate] = useState(location.state);

    const [id, setId] = useState('')
    const [file, setFile] = useState('');
    const [ISBN, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState('');
    const [author, setAuthor] = useState('');
    const [length, setLength] = useState('');
    const [edition, setEdtion] = useState('');
    const [subject, setSubject] = useState('');
    const [publisher, setPublisher] = useState('');
    const [totalBooks, setTotalBooks] = useState('');
    const [description, setDescription] = useState('');

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const formData = new FormData();
    formData.append('id', id);
    formData.append('isbn', ISBN);
    formData.append('file', file);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('length', length);
    formData.append('subject', subject);
    formData.append('edition', edition);
    formData.append('publisher', publisher);
    formData.append('totalBooks', totalBooks);
    formData.append('description', description);
    // Capture the name of the old image to replaced if the user provides a new image
    formData.append('oldFileName', bookToUpdate && bookToUpdate.filename)

    const clearInputs = () => {
        setIsbn('');
        setFile('');
        setPages('');
        setTitle('');
        setLength('');
        setAuthor('');
        setEdtion('');
        setSubject('');
        setPublisher('');
        setTotalBooks('');
        setDescription('');
    }


    const SubmitForm = (event) => {
        event.preventDefault();

        // Books registration function 
        if (!bookToUpdate) {
            PostRequest(
                "http://localhost:3000/api/registerBooks", formData,

                setIsLoading,
                setIsModalOpen,
                clearInputs,
                setMessage,

                // dispatch(
                //     addBook({
                //         file,
                //         ISBN,
                //         pages,
                //         title,
                //         length,
                //         author,
                //         edition,
                //         subject,
                //         publisher,
                //         totalBooks,
                //         description,
                //     })
                // ),
            )

        } else {
            // Update book function 
            PostRequest(
                "http://localhost:3000/api/editBook", formData,

                setIsLoading,
                setIsModalOpen,
                clearInputs,
                setMessage,

                dispatch(
                    updateBook({
                        id,
                        ISBN,
                        pages,
                        title,
                        length,
                        author,
                        edition,
                        subject,
                        publisher,
                        totalBooks,
                        description
                    })
                )
            )
        }
    }

    useEffect(() => {
        if (bookToUpdate) { // Update book function 
            setId(bookToUpdate.id)
            setIsbn(bookToUpdate.ISBN)
            setTitle(bookToUpdate.title)
            setPages(bookToUpdate.pages)
            setLength(bookToUpdate.length)
            setFile(bookToUpdate.filename)
            setAuthor(bookToUpdate.author)
            setEdtion(bookToUpdate.edition)
            setSubject(bookToUpdate.subject)
            setPublisher(bookToUpdate.publisher)
            setTotalBooks(bookToUpdate.totalBooks)
            setDescription(bookToUpdate.description)
        }
    }, [bookToUpdate])






    return (
        <>
            <FormLayout onsubmit={SubmitForm}>
                <Title text={bookToUpdate ? 'update book' : 'Add Book'} />


                <FormInput
                    label="title"
                    type='text' value={title || ''}
                    onchange={(e) => setTitle(e.target.value.toLowerCase())}
                />

                <FormInput
                    label="author"
                    type='text' value={author || ''}
                    onchange={(e) => setAuthor(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='edition'
                    type='text' value={edition || ''}
                    onchange={(e) => setEdtion(e.target.value.toLowerCase())}
                />

                <FormInput
                    label="publisher"
                    type='text' value={publisher || ''}
                    onchange={(e) => setPublisher(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='total copy'
                    type='text' value={totalBooks || ''}
                    onchange={(e) => setTotalBooks(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='length'
                    type='number' value={length || ''}
                    onchange={(e) => setLength(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='subject'
                    type='text' value={subject || ''}
                    onchange={(e) => setSubject(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='ISBN'
                    type='text' value={ISBN || ''}
                    onchange={(e) => setIsbn(e.target.value.toLowerCase())}
                />

                <FormInput
                    type='file'
                    className='custom-file-input'
                    onchange={(e) => setFile(e.target.files[0])}
                />

                <textarea
                    value={description || ''}
                    className="form-control1 border fw-light col-md-7 me-lg-5 ms-lg-2 py-3"
                    placeholder="Write book description"
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>

                <Button
                    type='type'
                    btnText={isLoading ? 'Loading...' : bookToUpdate ? 'Update Book' : 'Add Book'}
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