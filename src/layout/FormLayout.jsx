import { Outlet } from "react-router-dom"

const FormLayout = ({ children, onsubmit, className }) => {
    return (
        <div className="container py-lg-0 px-lg-5 h-100" onSubmit={onsubmit}>
            <form className={`row bg-white  py-5 p-lg-5 px-2 ${className}`} encType="multipart/form-data">
                {children}
                <Outlet />
            </form>
        </div>
    )
}

export default FormLayout