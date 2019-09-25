import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Samples from "./samples"

const SamplesContainer = ()=> {
    const { samples } = useStaticQuery(graphql`
    query OPaySamples{
        samples: allContentfulOPaySamples {
          edges {
            node {
              id
              title
              description {
                content
              }
              image {
                title
                localFile {
                  childImageSharp {
                    fixed(width: 200) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }`)

    const result = samples.edges;
    return (
        <Samples sample={result} />
    )
} 

export default SamplesContainer;