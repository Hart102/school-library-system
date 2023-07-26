import * as Icon from 'react-bootstrap-icons'
import { SearchInput } from '../Search/SearchInput'

import Title from  '../Title'

const LendBooks = () => {
    return (
        <div className="container bg-white p-4">
            <Title text='lend book'/>
                <p className='my-3'>Member can only borrow four books at a time</p>
            <div className='d-lg-flex justify-content-between'>
                <SearchInput placeholder={'Search for members'}/>
                <SearchInput placeholder={'Search for books'}/>
            </div>
        </div>

    )
}

export default LendBooks