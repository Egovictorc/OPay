import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import classnames from "classnames"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"


const Footer = () => {

  const { socialIcons } = useStaticQuery(graphql`
    query SocialIcons{
        socialIcons: allContentfulSocialIcons {
            edges {
              node {
                  id
                  title
                image {
               localFile {
                 childImageSharp {
                   fixed(width: 22) {
                     ...GatsbyImageSharpFixed_withWebp
                   }
                 }
               }
                  
                }
               
              }
            }
          }
    }`)

  const icons = socialIcons.edges;
  return (
    <Container
      as="footer" 
      fluid="true" 
      className="px-5 footer" 
      css={`
      min-height: 400px; `}>
      <Row>
        <Col as="hr" />
      </Row>
      <Row className="justify-content-center justify-content-md-between ">
        <Col as="p" xs="auto" className="">
          <span className="text-capitalize">copyright &copy; {new Date().getFullYear()} oltranz ltd.</span> All rights reserved
        </Col>

        <Col as="ul" className="nav" xs="auto">
          {icons.map(({ node: { id, title, image: { localFile } } }) => (
            <li className="nav-item" key={id}>
              <a href="#" className="nav-link">
                <Image fixed={localFile.childImageSharp.fixed} alt={title} key={id} className={classnames("img-fluid", (title === "facebook") && "facebook-icon")} />
              </a>
            </li>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;