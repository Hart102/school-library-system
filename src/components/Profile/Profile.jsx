import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ImagePreview } from "../Camera/Camera"
import BooksContainer from "./BooksContainer"
import Card from "./Card"

const Profile = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [member, setMember] = useState(location.state)

  useEffect(() => {
    if (!member) return navigation('/')
  }, [])

  return (
    <section className="bg-white d-flex flex-column align-items-center p-5 text-uppercase">
      <div className="text-center">
        <strong>{member && member.RegNo}</strong>
        <div className="my-3"><ImagePreview src={member && member.Profile} /></div>
        <strong>{member && member.FullName}</strong>
        <p>{member && member.Department}</p>
      </div>

      <div className="row g-4 w-100 py-4">
        <Card title={'College'} text={member && member.College} />
        <Card title={'Email'} text={member && member.Email} />
        <Card title={'Year Of Admission'} text={member && member.YearOfAdmission} />
      </div>

      <div
        className="row gap-5 justify-content-center profile-book-display py-5 w-100 text-center">
        <b>Books</b>
        {member && member.borrowed_books.length < 1 ? <p>Books will be displayed here once they're add.</p> :
          member && member.borrowed_books.map((book) => {
            return (
              <BooksContainer BookObject={book} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Profile


