import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const Footer = ()=> {

    const { socialIcons } = useStaticQuery(graphql`
    query SocialIcons{
        socialIcons: allContentfulSocialIcons {
            edges {
              node {
                  id
                  title
                image {
                  fixed {
                    src
                  }
                  
                }
               
              }
            }
          }
    }`)
    return (
        <footer>
            
        </footer>
    )
}

export default Footer;