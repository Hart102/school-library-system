import * as Icon from 'react-bootstrap-icons'
import { SearchInput } from '../Search/SearchInput'
import Title from '../Title'
import FormInput from '../FormInput'
import FormLayout from '../../layout/FormLayout'
import { useState } from 'react'

const LendBooks = () => {
    const [error, setError] = useState('')
    const errorStyle = "border: 1px solid red"
    return (
        <FormLayout>
            <div className='px-lg-5'>
                <Title text='lend book' />
                <p className='mb-5'>Member can only borrow four books at a time</p>

                <div className="d-flex flex-wrap justify-content-between">
                    <SearchInput size='col-md-5' placeholder={'Search for members...'} />
                    <SearchInput size='col-md-5' placeholder={'Search for books...'} />
                </div>

                <div className="my-3">
                    <FormInput type="date" label="Date to return book" className="py-2"/>

                </div>
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