import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { descreaseBooksCountAction } from "../../Reducers/Book"
import { returnBookAction } from "../../Reducers/membersReducer"
import { ImagePreview } from "../Camera/Camera"
import { PostRequest } from "../Modules/PostRequest"
import { BooksContainer, BooksContent } from "./BooksContainer"
import ProfileContainer from './ProfileContainer'
import Text from './Text'
import ImagePath from "../ImagePath"
import PopUp from "../Modal/PopUp"





const Profile = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [member, setMember] = useState()
  const members = useSelector((state) => state.members.value);
  const booksList = useSelector((state) => state.books.value);
  const [borrowedBooks, setborrowedBooks] = useState('')


  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [requestObject, setRequestObject] = useState('')


  const returnBook = (Obj) => {// Register members function 
    setRequestObject(Obj)
    PostRequest(
      "http://localhost:3000/api/returnBooks", Obj,

      setIsLoading,
      setIsModalOpen,
      setIsLoading,
      setMessage,

      dispatch( // Dispatch action to return book
        returnBookAction({
          regNo: Obj.regNo,
          bookId: Obj.bookId
        })
      )
    )
  }



  useEffect(() => {
    if (!location.state) return navigation('/');

    if (members) {
      /* Find member from redux arrary using the id provided by location */
      const foundMember = members.success.find((member) => member._id == location.state)
      setMember(foundMember)

      /* find borrowed books from redux using 
      the id provided by the members record and attach a borrowed or returning date to the */
      if (booksList) {

        const books = [];
        booksList.success.map((book) => foundMember.books.map((article) => {
          if (book.id == article.id) {
            book = {
              ...book,
              borrowedDate: article.borrowedDate,
              bookReturningDate: article.bookReturningDate,
            }
            books.push(book)
            // if(books){
            //   books.splice(books.findIndex(book => book.id == requestObject.bookId), 1);
            // }
          }
          setborrowedBooks(books)
        }))
      }
    }

    // Dispatch action to reduce the total number of borrowed books when a book is return by a member
    if (message.title == "success") {
      dispatch(
        descreaseBooksCountAction(requestObject.bookId)
      )
    }

  }, [members, message])


  return (
    <div className="bg-white p-lg-5 p-3">
      <ImagePreview src={member && member.Profile} />
      <ProfileContainer>
        <div className="d-lg-flex justify-content-between">
          <div>
            <Text title={"name"} text={member && member.FullName} />
            <Text title={"Registration Number"} text={member && member.RegNo} />
            <Text title={"Department"} text={member && member.Department} />
          </div>
          <div>
            <Text title={"College"} text={member && member.College} />
            <Text title={"Email"} text={member && member.Email} />
            <Text title={"Year Of Admission"} text={member && member.YearOfAdmission} />
          </div>
        </div>

        <BooksContainer>
          {borrowedBooks && borrowedBooks.length < 1 ?
            <p className="ms-lg-5 ps-lg-4">Books will be displayed here once they're add.</p> :
            borrowedBooks && borrowedBooks.map((book, index) => {
              return (
                <BooksContent
                  key={index}
                  title={book.title}
                  disabled={isLoading}
                  filename={ImagePath(book.filename)}
                  borrowerdDate={book.borrowedDate}
                  returningDate={book.bookReturningDate}
                  onclick={() => returnBook({ _id: member._id, regNo: member.RegNo, bookId: book.id })}
                />
              )
            })
          }
        </BooksContainer>
      </ProfileContainer>

      <PopUp
        title={message.title}
        msg={message.msg}
        isModalOpen={isModalOpen}
        onclick={() => setIsModalOpen(false)}
      />
    </div>
  )

}

export default Profile