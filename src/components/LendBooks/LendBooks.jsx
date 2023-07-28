import Button from '../Button/Button'
import FormInput from '../FormInput'
import SearchBooks from '../Search/SearchBooks'
import SearchMembers from '../Search/SearchMembers'
import Title from '../Title'

const LendBooks = () => {


    // const [id, setId] = useState({membersId: '', bookId: ''})

    // const addBookToUserRecord = (bookId) => {
    //     console.log(id)
    // }

    return (
        <section className="bg-white p-5 h-100">
            <div className='col-md-9 d-flex flex-column p-lg-5 h-100'>
                <Title text='lend book' />
                <p className='mb-3 fw-light'>Member can only borrow four books at a time</p>
                <SearchMembers  /> <br /><SearchBooks />
                <br />
                <div className="d-flex justify-content-between align-items-center">
                    <FormInput type="date" label="Date to return book" className="py-2" />
                    <span><Button btnText="Add" /></span>
                </div>
            </div>
        </section>

    )
}

export default LendBooks


