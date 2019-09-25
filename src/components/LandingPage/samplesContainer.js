import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Samples from "./samples"

const SamplesContainer = ()=> {
    const { samples, samplesBg } = useStaticQuery(graphql`
    query OPaySamples{
        samples: allContentfulOPaySamples {
          edges {
            node {
              id
              title
              type
              description {
                content
              }
              image {
                title
                localFile {
                  childImageSharp {
                    fixed(width: 200, height: 150) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      samplesBg: file(relativePath: {eq: "samplesBg.png"}) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
      }`)

    const result = samples.edges;
    const { fluid }  = samplesBg.childImageSharp;
    return (
        <Samples sample={result} samplesBg={fluid} />
    )
} 

export default SamplesContainer;