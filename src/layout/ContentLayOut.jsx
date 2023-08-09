import { Outlet } from "react-router-dom"
import PopUp from "../components/Modal/PopUp"

const ContentLayOut = ({ Children }) => {

    return (
        <div className="content">
            {Children} <Outlet />
            <PopUp />
        </div>
    )

}

export default ContentLayOut