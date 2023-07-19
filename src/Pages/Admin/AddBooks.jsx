import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addBook, updateBook } from "../../Reducers/Book";
import Button from "../../components/Button/Button";
import { FormInput } from "../../components/FormInput";
import { Title } from "../../components/Title";
import FormLayout from "../../layout/FormLayout";
import InputField from "../../components/InputField"


const AddBooks = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const booksList = useSelector((state) => state.books.value);
    const [bookToUpdate, setBookToUpdate] = useState(location.state);

    const [file, setFile] = useState('');
    const [pages, setPages] = useState('');
    const [edition, setEdtion] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [category, setCategory] = useState('');
    const [publisher, setPublisher] = useState('');
    const [totalBooks, setTotalBooks] = useState('');

    const clearInputs = () => {
        setFile('');
        setPages('');
        setEdtion('');
        setCategory('');
        setBookTitle('');
        setPublisher('');
        setTotalBooks('');
    }

    const bookObect = {
        bookTitle,
        publisher,
        edition,
        totalBooks,
        pages,
        category,
    }

    const SubmitForm = (event) => {
        event.preventDefault();
        if (bookToUpdate) {
            dispatch(
                updateBook({
                    ...bookObect,
                    _id: bookToUpdate._id
                })
            )
            clearInputs()
        } else {
            dispatch(addBook(bookObect))
            clearInputs()
        }
    }

    useEffect(() => {

        if (bookToUpdate) { // Update book function 
            setFile('');
            setPages(bookToUpdate.pages)
            setEdtion(bookToUpdate.edition)
            setBookTitle(bookToUpdate.bookTitle)
            setCategory(bookToUpdate.category)
            setPublisher(bookToUpdate.publisher)
            setTotalBooks(bookToUpdate.totalBooks)




            // console.log(bookToUpdate)
            console.log(formValues)
            // formValues[0].value = bookToUpdate.bookTitle

        }
    }, [])

    const [formValues, setFormValues] = useState([
        {
            label: 'book title',
            type: 'text',
            value: !bookToUpdate ? '' : bookToUpdate.bookTitle
        },
        {
            label: "publisher's name",
            type: 'text',
            value: ''
        }
    ])

    const handleChange = (e, index) => {
        const values = [...formValues];
        values[index][e.target.name] = e.target.value;
        setFormValues[values];
        console.log(values)
    }

    const inputData = [
        {
            label: 'book title',
            type: 'text',
            initialValue: '',
            value: bookToUpdate ? bookTitle : '',
        },
        {
            label: "publisher's name",
            type: 'text',
            value: ''
        }
    ]


    return (
        <FormLayout onsubmit={SubmitForm}>
            <Title text={bookToUpdate ? 'Edit book' : 'Add Book'} />


            <FormInput
                label="book title"
                type='text' value={bookTitle}
                onchange={(e) => setBookTitle(e.target.value.toLowerCase())}
            />

            <FormInput
                label="publisher's name"
                type='text' value={publisher}
                onchange={(e) => setPublisher(e.target.value.toLowerCase())}
            />

            <FormInput
                label='edition'
                type='text' value={edition}
                onchange={(e) => setEdtion(e.target.value.toLowerCase())}
            />

            <FormInput
                label='total Books'
                type='text' value={totalBooks}
                onchange={(e) => setTotalBooks(e.target.value.toLowerCase())}
            />

            <FormInput
                label='total number of book page'
                type='number' value={pages}
                onchange={(e) => setPages(e.target.value.toLowerCase())}
            />

            <FormInput
                label='category'
                type='text' value={category}
                onchange={(e) => setCategory(e.target.value.toLowerCase())}
            />

            <FormInput
                label='Upload book image'
                type='file' value={file}
                onchange={(event) => setFile(event.target.files[0])}
            />
            <Button
                type='type'
                btnText={bookToUpdate ? 'Edit book' : 'Add Book'}
            />
        </FormLayout>
    )
}

export default AddBooks