import { useRef } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar/Navbar"


const MainLayout = () => {
  const sideBarRef = useRef(null);

  const openSideBar = (sidebar) => {
    sidebar.classList.add('openSideBar');
  };

  return (
    <div className="mainLayout">
      <Sidebar refName={sideBarRef} />
      <Navbar
        onclick={() => openSideBar(sideBarRef.current)}
      />
      <Outlet />
    </div>
  )
}

export default MainLayout 