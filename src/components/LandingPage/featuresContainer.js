import React from "react"
import { graphql, StaticQuery } from "gatsby"
import OPayFeatures from "./features"




const FeaturesContainer = () => (
  <StaticQuery
    query={graphql`
        query OPayFeatures {
        OPayFeatures: allContentfulOPayFeatures {
            features: edges {
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
                      fixed(width: 300) {
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
      const { features } = data.OPayFeatures;
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