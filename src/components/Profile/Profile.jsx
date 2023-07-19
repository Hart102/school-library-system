import { ImagePreview } from "../Camera/Camera"
import image from "../../assets/imgs/4.jpg"
import BookCover from '../../assets/books/Poster (4).png'
import Card from "./Card"
import * as Icon from "react-bootstrap-icons"

const Profile = () => {
  return (
    <section className="bg-white d-flex flex-column align-items-center p-5">
      <div className="text-center">
        <strong>Mouau/cmp/18/123</strong>
        <div className="my-3"><ImagePreview src={image} /></div>
        <strong>Hart Chikanma Justman</strong>
        <p>Computer science</p>
      </div>

      <div className="row g-4 w-100 py-4">
        <Card title={'College'} text={'colpas'} />
        <Card title={'Email'} text={'hartjust553@gmail.com'} />
        <Card title={'Year Of Admission'} text={'2018/2019'} />
      </div>

      <section className="row gap-5 justify-content-center profile-book-display py-5 w-100">
        <div className="col-md-5">
          <div className="book-image-preview">
            <img src={BookCover} className="img-fluid" alt="image" />
          </div>
            <b>More tales from shake spare</b>
            <p>Edition: 2003 Edition</p>
            <p></p>
        </div>
      </section>

    </section>
  )
}

export default Profile