import React from "react"
import { graphql, StaticQuery } from "gatsby"
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
                console.log(`OPay data::::: `, data)

                return (
                    <OPayHelp OPayFiles={OPayData} />
                )
            }
        }
    />
)

export default OPayHelpContainer;