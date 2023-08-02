import axios from "axios"
import { useState } from "react"
import Title from "../../components/Title"

const Login = () => {
    const [message, setMessage] = useState('')
    const [Password, setPassword] = useState('')
    const [isLoading, setIsloading] = useState(false)

    const handleSubmit = async () => {
        const request = await axios.post("http://localhost:3000/api/adminLogin", Password)
        const response = request.data

        !response ? setIsloading(true) : setIsloading(false)

        if (response.error) return setMessage(response.error)
    }

    return (
        <section
            className="mx-auto p-lg-5 d-flex align-items-center"
            style={{ height: "100vh", width: "100%" }}>
            <div className='bg-white rounded d-flex 
            flex-column align-items-center justify-content-center mx-auto col-md-5 p-lg-5 shadow'>
                <Title text="admin Login" />
                <div className="d-flex my-5">
                    <input
                        type="text"
                        className="form-control border-0 border-bottom border-left py-0"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn" onClick={handleSubmit}>{isLoading ? "Loading..." : "Login"}</button>
                </div>
                <p className="text-danger">{message}</p>
            </div>
        </section>
    )
}

export default Login