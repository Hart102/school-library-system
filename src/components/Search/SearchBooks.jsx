import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../Reducers/Book';
import { SearchFunction } from './SearchFunction';
import { SearchInput } from './SearchInput';
import { SearchResult, SearchResultContainer } from './SearchResult';

export const SearchBooks = () => {

    const inputRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [query, setQuery] = useState(null);
    const [result, setResult] = useState(null);
    const booksList = useSelector((state) => state.books.value);

    const handleSearch = (e) => {
        setQuery(e.target.value)
        setResult(SearchFunction(booksList, query))
    }

    const updateBook = (book) => {
        navigate("/dashboard/add/books", { state: book });
    }

    const removeBook = (id) => {
        dispatch(deleteBook(id));
        // Remove Search Result 
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
                            name={book.bookTitle}
                            option={book.edition}
                            image={book.coverImage}
                            onclick={() => updateBook(book)}
                            ondoubleclick={() => removeBook(book._id)}
                        />
                    </div>
                )) : null}
            </SearchResultContainer>
        </>
    )
}
