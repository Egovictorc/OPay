import React, { useState } from "react"
import { Link } from "gatsby"
import { Nav, Container } from "react-bootstrap"

const pageLinks = [
    {title: `how it works`, path: `/`},
    {title: `developer`, path: `/`},
    {title: `sign in`, path: `/signin/`},
    {title: `sign up`, path: `/signup`},
]
const Navbar = () => {

    const [nav, setNav] = useState({
        show: false,
        className: "navbar-collapse collapse ",
      })
    
      const handleNav = () => {
        setNav({
          show: !nav.show,
          className: nav.show ? "collapse navbar-collapse" : "navbar-collapse show",
        })
      }

    return (
        <nav className="navbar navbar-expand-md navbar-light container">
        <Link
          to="/"
          className="navbar-brand"
          title="egovictor-opay.netlify.com"
          className="mb-2 mb-md-0 text-capitalize text-white"
        >
            {/* OPay Logo */}
          {/* <img
            src={}
            alt="OPay logo"
            className="img-fluid"
            style={{ maxWidth: "50px", maxHeight: `auto`, margin: "auto" }}
          /> */} 
          
        </Link>
  
        <button
          onClick={handleNav}
          className="btn btn-light bg-light rounded-circle navbar-toggler" aria-label="menu"
        >
          <span className="navbar-toggler-icon" > </span>
        </button>
  
        <div className={nav.className}>
          <ul className="navbar-nav m-0 ml-md-auto">
            {pageLinks.map(page => (
              <li
                className="nav-item mx-auto mb-md-0 ml-md-2"
                style={{}}
                key={page.id}
              >
                <Link
                  to={page.path}
                  className="nav-link text-capitalize"
                  style={{
                    fontFamily: `'Raleway', sans-serif`,
                    color: `#f9f9f9`,
                  }}
                  activeStyle={{ color: `#a1a1a1` }}
                >
                  {page.title} 
                  <span className="nav-indicator"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;