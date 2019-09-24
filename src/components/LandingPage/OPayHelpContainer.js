import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Loading from "../loading"
import OPayHelp from "./OpayHelp"


const OPayHelpContainer = () => (
    <StaticQuery
        query={graphql`
    query OPayHelp {
        OPayFiles: allContentfulOPayHelp {
            edges {
              node {
                title
                image {
                  localFile {
                    childImageSharp {
                      fixed(width: 80) {
                          ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
                id
                description {
                  description
                }
              }
            }
          }
    }`}

        render={
            (data) => {
                const OPayData = data.OPayFiles.edges;
                // console.log(`OPay data::::: `, data)

                return (
                  data ? (<OPayHelp OPayFiles={OPayData} />) : (<Loading />)
                )
            }
        }
    />
)

export default OPayHelpContainer;