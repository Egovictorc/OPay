import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import styled from "styled-components"


const headerStyle = `
background-color: #00AEB5;
min-height: 577px;

`
const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `#00AEB5`,
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
    css={headerStyle}
  >
    <Navbar />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
