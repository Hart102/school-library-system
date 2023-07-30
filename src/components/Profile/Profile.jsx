import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { ImagePreview } from "../Camera/Camera"
import PopUp from "../Modal/PopUp"
import { PostRequest } from "../Modules/PostRequest"
import { BooksContainer, BooksContent } from "./BooksContainer"
import Card from "./Card"
import ProfileContainer from './ProfileContainer'
import Text from './Text'
import { returnBookAction } from "../../Reducers/membersReducer"

const Profile = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [member, setMember] = useState()
  const members = useSelector((state) => state.members.value);

  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clearInput, setClearInput] = useState('')
  const [requestObject, setRequestObject] = useState('')


  const returnBook = (Obj) => {// Register members function 
    setRequestObject(Obj)
    PostRequest(
      "http://localhost:3000/api/returnBooks", Obj,

      setIsLoading,
      setIsModalOpen,
      setClearInput,
      setMessage,
      dispatch(returnBookAction({
        _id: Obj._id,
        bookId: Obj.bookId
      }))
    )
  }


  useEffect(() => {
    if (!location.state) return navigation('/');

    if (members) { // find member to be displayed
      let result = members.success.find((member) => member._id == location.state)
      setMember(result)
    }

    // Remove book from members record if it was successful removed from the database
    // if (message.title == "success") {
    //   dispatch(returnBookAction({
    //     _id: requestObject._id,
    //     bookId: requestObject.bookId
    //   }))
    // }

  }, [members])


  return (
    <div className="bg-white p-lg-5 p-3">
      <ImagePreview src={member && member.Profile} />
      <ProfileContainer>

        <Text title={"name"} text={member && member.FullName} />
        <Text title={"Registration Number"} text={member && member.RegNo} />
        <Text title={"Department"} text={member && member.Department} />
        <Text title={"College"} text={member && member.College} />
        <Text title={"Email"} text={member && member.Email} />
        <Text title={"Year Of Admission"} text={member && member.YearOfAdmission} />

        <BooksContainer>
          {member && member.books.length < 1 ?
            <p className="text-center">Books will be displayed here once they're add.</p> :
            member && member.books.map((book, index) => {
              return (
                <BooksContent
                  key={index}
                  BookObject={book}
                  onclick={() => returnBook({ _id: member._id, bookId: book.id })}
                />
              )
            })
          }
        </BooksContainer>
      </ProfileContainer>

      <PopUp
        action={isModalOpen}
        message={message.msg}
        title={message.title}
        onclick={() => setIsModalOpen(false)}
      />
    </div>
  )

}

export default Profile







{/* <>
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
      className="row gap-5 justify-content-center profile-book-display py- w-100">
      <b className="text-center">Books</b>
      {member && member.books.length < 1 ? <p>Books will be displayed here once they're add.</p> :
        member && member.books.map((book, index) => {
          return (
            <BooksContent
              key={index}
              BookObject={book}
              onclick={() => returnBook({ regNo: member.RegNo, bookId: book.id })}
            />
          )
        })
      }
    </div>
  </section>

  <PopUp
    action={isModalOpen}
    message={message.msg}
    title={message.title}
    onclick={() => setIsModalOpen(false)}
  />
</> */}