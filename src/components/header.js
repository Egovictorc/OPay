import { Link } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import PlaystoreButton from "../images/playstore-button.png"


const Header = ({ title, description, image, siteMetadata }) => (
  <header className="header">
    <Navbar />
    <Container className="">
      <Row className="justify-content-around" css={`
      max-width: 1024px;
      position: relative;
      bottom: -80px;`}>
        <Col xs="12" md="5" lg="4">
          <Image fixed={image.localFile.childImageSharp.fixed} className="" />
        </Col>

        <Col className="p-5 text-white"  xs="12" md="7" lg="6">
          <h1 className="my-3"> {title} </h1>
          <p  className="mb-3"> {description.description} </p>
          <a href="#">
            <img src={PlaystoreButton} alt="playstore button" className="img-fluid playstore-button"  />
          </a>
        </Col>
      </Row>
    </Container>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
