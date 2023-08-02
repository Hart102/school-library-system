import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideAddButton } from '../../Reducers/Book'
import Button from '../Button/Button'
import FormInput from '../FormInput'
import PopUp from '../Modal/PopUp'
import { PostRequest } from '../Modules/PostRequest'
import SearchBooks from '../Search/SearchBooks'
import SearchMembers from '../Search/SearchMembers'
import Title from '../Title'
import { getSingleBook } from '../../Reducers/Book'
import { getSingleMember } from '../../Reducers/membersReducer'

const LendBooks = () => {
    const dispatch = useDispatch();
    const { member } = useSelector((state) => state.members);
    const { value, book } = useSelector((state) => state.books);

    const [bookReturningDate, setBookReturningDate] = useState('')
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [clearInput, setClearInput] = useState('')

    const handleSubmit = () => {

        if (member && book && bookReturningDate) {

            PostRequest( // Borrow books function 
                "http://localhost:3000/api/lendBooks",
                {
                    bookId: book.id,
                    regNo: member.RegNo,
                    returningDate: bookReturningDate
                },

                setIsLoading,
                setIsModelOpen,
                setClearInput,
                setMessage,
            )
        }
    }

    useEffect(() => {
        dispatch( // Activate the add books and members icon
            hideAddButton(true)
        )

        // If request is successful, then clear object used in making request
        if(message.title == "success"){
            dispatch(getSingleBook(''))
            dispatch(getSingleMember(''))
            setMessage('')
        }
    }, [message])

    return (
        <>
            <section className="col-md-10 mx-auto p-lg-5 h-100">
                <div className='shadow-sm bg-white rounded d-flex flex-column p-lg-5 p-5 mx-auto'>
                    <div className="text-center">
                        <Title text="lend book"/>
                        <p className='mb-3 fw-light'>Member can only borrow four books at a time</p>
                    </div>
                    <SearchMembers />
                    <input type={"text"} value={member && member.RegNo} disabled />

                    <br /><SearchBooks />
                    <input type={"text"} value={book && book.title} disabled />

                    <br />
                    <div className="d-flex justify-content-between align-items-center">
                        <FormInput
                            type="date"
                            className="py-2"
                            label="Date to return book"
                            onchange={(e) => setBookReturningDate(e.target.value)}
                        />
                        <span>
                            <Button btnText={!isLoading ? "Loading..." : "Add"} onclick={handleSubmit} />
                        </span>
                    </div>
                </div>
            </section>
            <PopUp
                message={message.msg}
                title={message.title}
                action={isModelOpen}
                onclick={() => setIsModelOpen(false)}
            />
        </>

    )
}

export default LendBooks


