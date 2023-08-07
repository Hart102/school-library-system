import axios from "axios"
import { useEffect, useRef } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import PopUp from "../components/Modal/PopUp"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const MainLayout = () => {
  const navigation = useNavigate()
  const sideBarRef = useRef(null);

  const openSideBar = (sidebar) => {
    sidebar.classList.add('openSideBar');
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/adminLogin").then((response) => {
      if(!response.data.success) return navigation('/')
    })
  },[])

  
  return (
    <>
      <PopUp />
      <div className="mainLayout">
        <Sidebar refName={sideBarRef} />
        <Navbar
          onclick={() => openSideBar(sideBarRef.current)}
        />
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout 