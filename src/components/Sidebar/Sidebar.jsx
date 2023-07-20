import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { LinkObect } from './LinkObect';
import { Title } from '../Title';
import Button from '../Button/Button'


const Sidebar = ({ refName }) => {
    const closeSideBar = (sidebar) => {
        sidebar.classList.remove('openSideBar');
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
                    {LinkObect && LinkObect.map((link) => (
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
                        <Button className='btn bg-white shadow-sm border rounded-pill px-4 py-2' btnText='LOG OUT' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
{/* <img src={design} alt="" /> */ }
