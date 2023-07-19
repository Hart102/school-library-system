import * as Icon from 'react-bootstrap-icons';

export const SearchInput = ({ inputRef, placeholder, onchange }) => {
    return (
        <form className="form-group d-flex align-items-center px-3 py-1 my-1 border rounded col-md-12">
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
