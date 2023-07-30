import * as Icon from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

export const SearchResultContainer = ({ children, className }) => {
    return (
        <section className={className}>
            <div className="search-result">
                <p className='fw-bold text-dark my-1'>Recent Search</p>
                {children}
            </div>
        </section>
    )
}

export const SearchResult = ({
    image,
    option,
    name,
    onclick,
    getIdFunction,
    ondoubleclick
}) => {
    const { isLendBookPage } = useSelector((state) => state.books);

    return (
        <div className="d-lg-flex align-items-center justify-content-between 
        border-bottom rounded shadow-sm mb-2 px-3 py-lg-0 py-2 w-100" role='button'>
            <div className="d-flex align-items-center">
                <div><img src={image} alt="image" /></div>
                <div className="ms-4 mt-3">
                    <p className="my-0 text-capitalize">{option}</p>
                    <p className='fw-bold text-dark'>{name}</p>
                </div>
            </div>
            <article className="d-flex align-items-center">
                <div className="d-flex">
                    <Icon.Plus 
                        role='button' 
                        className={!isLendBookPage ? 'd-none': 'd-block'} onClick={getIdFunction}/>
                    <Icon.Pencil role='button' className='mx-4' onClick={onclick} />
                    <Icon.Trash role='button' onDoubleClick={ondoubleclick} />
                </div>
            </article>
        </div>
    )
}
