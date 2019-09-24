import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Samples from "./samples"

const SamplesContainer = ()=> {
    // const { samples } = useStaticQuery(graphql`
    // query OPaySamples{
    //     samples: allContentfulOPaySamples {
    //         edges {
    //             node {
    //               id
    //               description {
    //                   content
    //                   id
    //               }
    //               image {
    //                 localFile {
    //                   childImageSharp {
    //                     fixed(height: 500) {
    //                       ...GatsbyImageSharpFixed_withWebp
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }     

    //     }
    // }`)

    // const result = samples.edges;
    return (
        <Samples />
    )
} 

export default SamplesContainer;