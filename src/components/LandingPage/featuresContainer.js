import React from "react"
import { graphql, StaticQuery } from "gatsby"
import OPayFeatures from "./features"




const FeaturesContainer = () => (
  <StaticQuery
    query={graphql`
        query OPayFeatures {
            OPayFeatures: allContentfulOPayFeatures {
                edges {
                  node {
                    id
                    description {
                        content
                        id
                    }
                    image {
                      localFile {
                        childImageSharp {
                          fixed(height: 500) {
                            ...GatsbyImageSharpFixed_withWebp
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
        `}

    render={(data) => {
      const features = data.OPayFeatures.edges;
      return (
        <OPayFeatures features={features} />
      )
    }
    }
  />
)


export default FeaturesContainer;