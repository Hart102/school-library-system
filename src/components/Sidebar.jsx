import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import Title from './Title';
import Button from './Button'
import axios from 'axios';


const LinkObect = [
    { location: '/dashboard', text: 'members', icon: Icon.People },
    { location: '/books', text: 'books', icon: Icon.Book },
    { location: '/borrowers', text: 'borrowers', icon: Icon.People },
    { location: '/add/member', text: 'add members', icon: Icon.PersonAdd },
    { location: '/add/books', text: 'add books', icon: Icon.BookmarkPlus },
    { location: '/lendBooks', text: 'lend books', icon: Icon.DatabaseFillAdd },
]


const Sidebar = ({ refName }) => {
    const navigation = useNavigate()
    const closeSideBar = (sidebar) => {
        sidebar.classList.remove('openSideBar');
    }

    const handleLogout = async () => {
        const request = await axios.get("http://localhost:3000/api/admin/destroySession")
        if(request.data.success) return navigation("/")
    }

    return (
        <div className='sidebar shadow-sm bg-white px-2' ref={refName}>
            <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex align-items-bottom w-100">
                    <Icon.DashSquare size={20} className='mb-1 me-3' />
                    <Title text='DASHBOARD' />
                </div>
                <Icon.Arrow90degLeft
                    className='d-lg-none d-block'
                    onClick={() => closeSideBar(refName.current)}
                />
            </div>
            <div className="d-flex flex-column justify-content-between h-100">
                <ul className='list-unstyled d-flex flex-column justify-content-around  py-4'>
                    {LinkObect.map((link) => (
                        <li className='nav-item text-capitalize' key={link.text} onClick={() => closeSideBar(refName.current)}>
                            <Link to={link.location} className='nav-link my-1 p-2 rounded-pill px-4' key={link.text}>
                                <link.icon size={20} className='mb-1 me-2' />
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='d-flex flex-column justify-content-center h-50'>
                    <div className='px-4'>
                        <Button
                            btnText='LOG OUT'
                            onclick={() => handleLogout()}
                            className='btn bg-white shadow-sm border rounded-pill px-4 py-2'
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
{/* <img src={design} alt="" /> */ }
