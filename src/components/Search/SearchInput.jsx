import * as Icon from 'react-bootstrap-icons';

export const SearchInput = ({ size, inputRef, placeholder, onchange }) => {
    return (
        <form className={`form-group d-flex align-items-center px-3 py-1 my-1 border rounded ${size}`}>
            <Icon.Search />
            <input
                ref={inputRef}
                type="search"
                placeholder={placeholder}
                className="form-control bg-transparent border-0"
                onChange={onchange}
            />
        </form>
    )
}
