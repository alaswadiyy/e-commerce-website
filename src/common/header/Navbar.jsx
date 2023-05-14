import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>
          <div className="navlink">
            <ul className='nav'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pages'>Pages</Link>
              </li>
              <li>
                <Link to='/user'>User account</Link>
              </li>
              <li>
                <Link to='/vendor'>Vendor account</Link>
              </li>
              <li>
                <Link to='/track'>Track my order</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}></button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar