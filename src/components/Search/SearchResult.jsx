import * as Icon from 'react-bootstrap-icons';

export const SearchResultContainer = ({ children, className }) => {
    return (
        <section className={className}>
            <div className="search-result bg-white py-4 px-4 col-md-6">
                <p className='fw-bold text-dark my-1'>Recent Search</p>
                {children}
            </div>
        </section>
    )
}

export const SearchResult = ({ image, option, name, onclick, ondoubleclick }) => {
    return (
        <div className="d-flex align-items-center border-bottom rounded shadow-sm mb-2" role='button'>
            <div><img src={image} alt="image" /></div>
            <article className="col-lg-10 col-12 d-flex align-items-center justify-content-between">
                <div className="ms-4 mt-3">
                    <p className="my-0 text-capitalize">{option}</p>
                    <p className='fw-bold text-dark'>{name}</p>
                </div>
                <div className="d-flex">
                    <Icon.Pencil
                        role='button'
                        className='me-4'
                        onClick={onclick}
                    />
                    <Icon.Trash
                        role='button'
                        onDoubleClick={ondoubleclick}
                    />
                </div>
            </article>
        </div>
    )
}
