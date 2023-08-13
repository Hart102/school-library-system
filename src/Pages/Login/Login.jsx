import axios from "axios"
import { useEffect, useState } from "react"
import './Login.css'
import { useNavigate } from "react-router-dom"
import { getAllBooks, getAllMembers } from "../../components/Modules/Api"

const Login = () => {
  const navigation = useNavigate()
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsloading] = useState(false)


  const handleSubmit = async (e) => {
    setIsloading(true)
    e.preventDefault();
    const request = await axios.post("http://localhost:3000/api/adminLogin", { password: password })
    const response = request.data


    if (response.success) {
      setIsloading(false)
      navigation('/dashboard')
      getAllBooks()
      getAllMembers()

    } else if (response.error) {
      navigation('/')
      setMessage(response.error)
      setIsloading(false)
    }
  }

  useEffect(() => {
    if (message) {
      setIsloading(false)
    }

    axios.get("http://localhost:3000/api/adminLogin").then((response) => {
      if (response.data.success) return navigation('/dashboard')
    })

  }, [message])

  return (
    <form className='login px-2'>
      <p className='fs-1 fw-bolder text-center text-white mx-auto'>Cloud based <br /> library managment system</p>
      <div className="col-lg-5 col-12">
        <input
          type="text"
          className='form-control py-3'
          placeholder='Enter password'
          onChange={(e) => setPassword(e.target.value.toLowerCase())}
        />
        <p className='text-danger text-center'>{message}</p>
      </div>
      <button
        type="submit" disabled={isLoading}
        className='btn btn-success py-2 px-5 text-white mx-auto my-3' onClick={handleSubmit}>
        {isLoading ? "LOADING..." : "LOGIN"}
      </button>
    </form>
  )
}

export default Login