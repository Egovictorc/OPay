import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"

const HeaderContainer = () => {
    const { headerQuery, siteTitle } = useStaticQuery(graphql`
    query HeaderImage {
        headerQuery: contentfulHeader {
            title
            description {
                description
            }
            image {
              localFile {
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
              }
            }
          }

          siteTitle: site {
              siteMetadata {
                  title
              }
          }
    }`)

    // const image  = headerImage.image.localFile.childImageSharp.fluid;
    return (

        <Header {...headerQuery} {...siteTitle} />
    )
}

export default HeaderContainer;