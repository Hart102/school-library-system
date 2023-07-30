import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ImagePreview } from "../Camera/Camera"
import { BooksContainer, BooksContent } from "./BooksContainer"
import Card from "./Card"
import { useSelector } from "react-redux"
import { PostRequest } from "../Modules/PostRequest"
import PopUp from "../Modal/PopUp"
import ProfileContainer from './ProfileContainer'

const Profile = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [member, setMember] = useState()
  const members = useSelector((state) => state.members.value);

  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clearInput, setClearInput] = useState('')


  const returnBook = (Obj) => {
    PostRequest( // Register members function 
      "http://localhost:3000/api/returnBooks", Obj,

      setIsLoading,
      setIsModalOpen,
      setClearInput,
      setMessage,
    )
  }


  useEffect(() => {
    if (!location.state) return navigation('/');

    if (members) { // find member to be displayed
      let result = members.success.find((member) => member._id == location.state)
      setMember(result)
    }

  }, [members])

  // /api/returnBooks

  return (

    <>
      <ProfileContainer>
        {/* <div className="mt-3 mb-5"><ImagePreview src={member && member.Profile} /></div>
        <Text title={'Name'} text={member && member.FullName} />
        <Text title={'Registration Number'} text={member && member.RegNo} />
        <Text title={'Department'} text={member && member.Department} />
        <Text title={'College'} text={member && member.College} />
        <Text title={'Email'} text={member && member.Email} />
        <Text title={'Year Of Admission'} text={member && member.YearOfAdmission} />
        <Text title={'Email'} text={member && member.Email} /> */}


       <div
          className="row gap-5 justify-content-center profile-book-display py- w-100">
          <b className="text-center">Books</b>
          {member && member.books.length < 1 ? <p>Books will be displayed here once they're add.</p> :
            member && member.books.map((book, index) => {
              return (
                <BooksContainer
                  key={index}
                  BookObject={book}
                  onclick={() => returnBook({ regNo: member.RegNo, bookId: book.id })}
                />
              )
            })
          }
        </div>


        {/* <BooksContent>
          {member && member.books.map((book, index) => {
            return (
              <p key={index} >{book.title}</p>
            )
          })}

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
        </BooksContent> */}

        {/* <div
          className="row gap-5 justify-content-center profile-book-display py- w-100">
          <b className="text-center">Books</b>
          {member && member.books.length < 1 ? <p>Books will be displayed here once they're add.</p> :
            member && member.books.map((book, index) => {
              return (
                <BooksContainer
                  key={index}
                  BookObject={book}
                  onclick={() => returnBook({ regNo: member.RegNo, bookId: book.id })}
                />
              )
            })
          }
        </div> */}
      </ProfileContainer>

      <PopUp
        action={isModalOpen}
        message={message.msg}
        title={message.title}
        onclick={() => setIsModalOpen(false)}
      />
    </>































    // <>
    //   <section className="bg-white d-flex flex-column align-items-center p-5 text-uppercase">
    //     <div className="text-center">
    //       <strong>{member && member.RegNo}</strong>
    //       <div className="my-3"><ImagePreview src={member && member.Profile} /></div>
    //       <strong>{member && member.FullName}</strong>
    //       <p>{member && member.Department}</p>
    //     </div>

    //     <div className="row g-4 w-100 py-4">
    //       <Card title={'College'} text={member && member.College} />
    //       <Card title={'Email'} text={member && member.Email} />
    //       <Card title={'Year Of Admission'} text={member && member.YearOfAdmission} />
    //     </div>

    //     <div
    //       className="row gap-5 justify-content-center profile-book-display py- w-100">
    //       <b className="text-center">Books</b>
    //       {member && member.books.length < 1 ? <p>Books will be displayed here once they're add.</p> :
    //         member && member.books.map((book, index) => {
    //           return (
    //             <BooksContent
    //               key={index}
    //               BookObject={book}
    //               onclick={() => returnBook({ regNo: member.RegNo, bookId: book.id })}
    //             />
    //           )
    //         })
    //       }
    //     </div>
    //   </section>

    //   <PopUp
    //     action={isModalOpen}
    //     message={message.msg}
    //     title={message.title}
    //     onclick={() => setIsModalOpen(false)}
    //   />
    // </>
  )
}

export default Profile


