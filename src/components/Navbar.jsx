import * as Icon from 'react-bootstrap-icons';

const Navbar = ({ onclick }) => {
  return (
    <nav className="d-flex justify-content-end bg-white shadow-sm py-3 px-3">
      <Icon.MenuButtonWide
        role='button'
        onClick={onclick}
        className='d-lg-none d-block'
      />
    </nav>
  )
}

export default Navbar