import * as Icon from 'react-bootstrap-icons';

const Navbar = ({ onclick }) => {
  return (
    <nav className="d-flex justify-content-end bg-white shadow-sm py-3 px-3">
      {/* <form className="form-group d-flex align-items-center px-3 py-1 border rounded col-md-10">
        <Icon.Search />
        <input
          type="search"
          placeholder="Seacrh..."
          className="form-control bg-transparent border-0"
        />
      </form> */}
      <Icon.MenuButtonWide
        role='button'
        onClick={onclick}
        className='d-lg-none d-block'
      />
    </nav>
  )
}

export default Navbar