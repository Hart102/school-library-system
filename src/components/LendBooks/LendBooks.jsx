import * as Icon from 'react-bootstrap-icons'
import { SearchInput } from '../Search/SearchInput'
import Title from '../Title'
import FormInput from '../FormInput'
import FormLayout from '../../layout/FormLayout'

const LendBooks = () => {
    return (
        <FormLayout>
            <div className='px-lg-5'>
                <Title text='lend book' />
                <p className='my-3'>Member can only borrow four books at a time</p>
            </div>

            <div className="d-flex flex-wrap justify-content-around">
                <SearchInput size='col-md-5' placeholder={'Search for members...'} />
                <SearchInput size='col-md-5' placeholder={'Search for books...'} />
                <FormInput type="date" label="returning Date" />
            </div>

        </FormLayout>



        // <div className="container bg-white p-4">
        //     <div className='px-lg-5'>
        //         <Title text='lend book'/>
        //         <p className='my-3'>Member can only borrow four books at a time</p>
        //     </div>
        //     <div className='d-lg-flex justify-content-around'>
        //         <SearchInput size='col-md-5' placeholder={'Search for members...'}/>
        //         <SearchInput size='col-md-5' placeholder={'Search for books...'}/>
        //     </div>
        // </div>

    )
}

export default LendBooks