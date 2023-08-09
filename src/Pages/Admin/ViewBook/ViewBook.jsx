import "./Books.css"
import BookCover from '../../../assets/books/Poster (2).png'
import Text from '../../../components/Profile/Text'

const ViewBook = () => {
  return (
    <div className='bg-white p-lg-5'>
      <b className='text-uppercase'>More tales from shakespare</b>
      <div className="mt-5">
        <section className="d-flex">
          <div className="book-cover">
            <img src={BookCover} alt="image" className="img-fluid rounded" />
          </div>
          <article className="ms-3">
            <p className="my-1 py-0 text-primary">Author name</p>
            <p className="my-1 py-0">Publisher, Edition, Subject, 120 pages</p>
            <p>ISBN: GG2235HH5</p>
          </article>
        </section>
        <div className="book-details">
          <div className="col-md-9">
            <b>About The Book</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, soluta molestias accusantium deserunt molestiae iusto harum, exercitationem suscipit nesciunt quis deleniti est maiores omnis dolores eos sequi eveniet ab eligendi?</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default ViewBook