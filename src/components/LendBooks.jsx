import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideAddButton } from '../Reducers/Book'
import Button from './Button'
import FormInput from './FormInput'
import { PostRequest } from './Modules/PostRequest'
import SearchBooks from './Search/SearchBooks'
import SearchMembers from './Search/SearchMembers'
import Title from './Title'
import { increaseBorrowedCount, getSingleBook } from '../Reducers/Book'
import { getSingleMember } from '../Reducers/membersReducer'
import { borrowBooks } from '../Reducers/membersReducer'
import PopUp from './Modal/PopUp'


const LendBooks = () => {
    const dispatch = useDispatch();
    const { member } = useSelector((state) => state.members);
    const { value, book } = useSelector((state) => state.books);

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [bookReturningDate, setBookReturningDate] = useState('')

    const handleSubmit = () => {
        const bookId = book.id;
        const regNo = member.RegNo;
        const BorrowedBook = value.success.find((book) => book.id == bookId)

        if (member && book && bookReturningDate) {

            PostRequest( // Borrow books function 
                "http://localhost:3000/api/lendBooks",
                {
                    bookId,
                    regNo,
                    returningDate: bookReturningDate
                },

                setIsLoading,
                setIsModelOpen,
                setIsModelOpen,
                setMessage,

                dispatch(
                    borrowBooks({
                        regNo,
                        BorrowedBook
                    })
                )

            )
        }
    }

    useEffect(() => {
        dispatch( // Activate the add books and members icon
            hideAddButton(true)
        )

        // If request is successful, then clear object used in making request
        if (message.title == "success") {
            dispatch(getSingleBook(''))
            dispatch(getSingleMember(''))
            dispatch(increaseBorrowedCount(book.id))
        }
    }, [message])

    return (
        <>
            <section className="col-md-10 mx-auto p-lg-5 h-100">
                <div className='shadow-sm bg-white rounded d-flex flex-column p-lg-5 p-5 mx-auto'>
                    <div className="text-center">
                        <Title text="lend book" />
                        <p className='mb-3'>Member can only borrow four books at a time</p>
                    </div>
                    <SearchMembers />
                    <div className='admin-form'>
                        <input type={"text"} className='fw-bold text-success form-control' value={member && member.RegNo} disabled />
                    </div>
                    <br /><SearchBooks />
                    <div className='admin-form'>
                        <input type={"text"} className='fw-bold text-success form-control' value={book && book.title} disabled />
                    </div>
                    <br />
                    <div className="d-flex justify-content-between align-items-center">
                        <FormInput
                            type="date"
                            className="py-2"
                            label="Date to return book"
                            onchange={(e) => setBookReturningDate(e.target.value)}
                        />
                        <span>
                            <Button
                                disabled={isLoading}
                                onclick={handleSubmit}
                                btnText={isLoading ? "Loading..." : "Add"}
                            />
                        </span>
                    </div>
                </div>
            </section>

            <PopUp
                title={message.title}
                msg={message.msg}
                isModalOpen={isModelOpen}
                onclick={() => setIsModelOpen(false)}
            />
        </>
    )
}

export default LendBooks


