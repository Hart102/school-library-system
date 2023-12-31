import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBook, getSingleBook } from '../../Reducers/Book';
import { SearchFunction } from './SearchFunction';
import { SearchInput } from './SearchInput';
import { SearchResult, SearchResultContainer } from './SearchResult';
import ImagePath from '../ImagePath';


const SearchBooks = () => {

    const inputRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [query, setQuery] = useState(null);
    const [result, setResult] = useState(null);
    const booksList = useSelector((state) => state.books.value);

    const handleSearch = (e) => {
        setQuery(e.target.value)
        setResult(SearchFunction(booksList.success, query))
    }

    const updateBook = (book) => {
        navigate("/add/books", { state: book });
    }

    const removeBook = (id) => {
        dispatch(deleteBook(id));
        // Remove Search Result 
        inputRef.current.value = ''
        setQuery('')
    }

    /* The work of this function is to select the book who wants to borrow book 
    This function takes the id of push the id's of the member who wants borrow book
    and the id  of the book the member wants to borrow to the reducer where it is joined together,
    to be used in making an Api call to the server.
    */
    const selectBook = (book) => {
        dispatch(getSingleBook(book))
        inputRef.current.value = ''
        setQuery('')
    }


    return (
        <>
            <SearchInput
                inputRef={inputRef}
                placeholder='Search books by name ...'
                onchange={(event) => handleSearch(event)}
            />

            {/*----- Display Search Results  -----*/}
            <SearchResultContainer className={query ? 'd-block' : 'd-none'}>
                {result ? result.map((book) => (
                    <div key={book._id}>
                        <SearchResult
                            name={book.title}
                            option={book.edition}
                            image={ImagePath(book.filename)}
                            onclick={() => updateBook(book)}
                            getIdFunction={() => selectBook({title: book.title, id: book.id})}
                            ondoubleclick={() => removeBook(book.id)}
                        />
                    </div>
                )) : null}
            </SearchResultContainer>
        </>
    )
}
export default SearchBooks;