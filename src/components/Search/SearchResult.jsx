import { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';

export const SearchResultContainer = ({ children, className }) => {
    return (
        <section className={className}>
            <div className="search-result bg-white py-4 px-4 col-md-12">
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
    addBook,
    onclick,
    ondoubleclick
}) => {

    return (
        <div className="d-flex align-items-center justify-content-between border-bottom rounded shadow-sm mb-2 px-3" role='button'>
            <div className="d-flex align-items-center">
                <div><img src={image} alt="image" /></div>
                <div className="ms-4 mt-3">
                    <p className="my-0 text-capitalize">{option}</p>
                    <p className='fw-bold text-dark'>{name}</p>
                </div>
            </div>
            <article className="d-flex align-items-center">
                <div className="d-flex">
                    <Icon.Plus role='button' onClick={addBook}/>
                    <Icon.Pencil role='button' className='mx-4' onClick={onclick} />
                    <Icon.Trash role='button' onDoubleClick={ondoubleclick} />
                </div>
            </article>
        </div>
    )
}
