import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMember } from '../../Reducers/membersReducer';
import { SearchFunction } from './SearchFunction';
import { SearchInput } from './SearchInput';
import { SearchResult, SearchResultContainer } from './SearchResult';

export const SearchMembers = () => {

    const inputRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [query, setQuery] = useState(null);
    const [result, setResult] = useState(null);
    const membersList = useSelector((state) => state.members.value);

    const handleSearch = (e) => {
        setQuery(e.target.value)
        if(membersList && membersList.success){
            setResult(SearchFunction(membersList.success, query))
        }
    }

    const updatePofile = (member) => {
        navigate('/dashboard/add/member', { state: member })
    }

    const removeMember = (id) => {
        dispatch(deleteMember(id));
        // Remove Search Results 
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

            {/*------ Display Search Results ------*/}
            <SearchResultContainer className={query ? 'd-block' : 'd-none'}>
                {result && result.map((member) => (
                    <div key={member._id}>
                        <SearchResult
                            name={member.FullName}
                            option={member.RegNo}
                            image={member.Profile}
                            onclick={() => updatePofile(member)}
                            ondoubleclick={() => removeMember(member._id)}
                        />
                    </div>
                ))}
            </SearchResultContainer>
        </>
    )
}