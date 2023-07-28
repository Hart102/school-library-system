import { Outlet } from "react-router-dom"

const ContentLayOut = ({ Children }) => {

    return (
        <div className="content">
            {Children} <Outlet />
        </div>
    )

}

export default ContentLayOut