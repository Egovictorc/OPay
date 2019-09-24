import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeaderContainer from "../components/headerContainer"
import OPayHelpContainer from "../components/LandingPage/OPayHelpContainer"
import OPayFeaturesContainer from "../components/LandingPage/OPayFeaturesContainer"


const IndexPage = () => (
  <Layout>
    <SEO title="Get Paid Fast, secure and Reliable" />
    <HeaderContainer />
    <OPayHelpContainer />
    <OPayFeaturesContainer />
    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)



export default IndexPage
