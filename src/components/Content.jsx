import { Outlet } from "react-router-dom"

const Content = ({ Children }) => {
  return (
    <div className="content">
      {Children} <Outlet />
    </div>
  )
}

export default Content