import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"

const HeaderContainer = () => {
    const { headerImage } = useStaticQuery(graphql`
    query HeaderImage {
        headerImage: contentfulHeader {
            image {
              localFile {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
              }
            }
          }
    }`)

    const image  = headerImage.image.localFile.childImageSharp.fluid;
    return (

        <Header {...image} />
    )
}