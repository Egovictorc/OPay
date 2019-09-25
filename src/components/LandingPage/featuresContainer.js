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
                background {
                  localFile {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                image {
                  localFile {
                    childImageSharp {
                      fixed(width: 350) {
                        ...GatsbyImageSharpFixed_withWebp
                      }
                    }
                  }
                }
                id
                description {
                  content
                }
              }
            }
          }
        }
      `}

    render={(data ) => {
      const features = data.OPayFeatures.edges;
      const {node: feature} = features.find( (node, index) => index === 0  )
      const { fluid } = feature.background.localFile.childImageSharp;
      return (
        <OPayFeatures features={features} featuresBg={fluid} />
      )
    }
    }
  />
)


export default FeaturesContainer;