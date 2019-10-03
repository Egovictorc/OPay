import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Loading from "../loading"
import OPayHelp from "./help"


const OPayHelpContainer = () => (
  <StaticQuery
    query={graphql`
    query OPayHelp {
        OPayFiles: allContentfulOPayHelp {
            helpItems: edges {
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
        const { helpItems } = data.OPayFiles;
        // console.log(`OPay data::::: `, data)

        return (
          <OPayHelp OPayFiles={helpItems} />
        )
      }
    }
  />
)


export default OPayHelpContainer;