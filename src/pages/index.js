import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeaderContainer from "../components/headerContainer"
import HelpContainer from "../components/LandingPage/helpContainer"
import FeaturesContainer from "../components/LandingPage/featuresContainer"
import SamplesContainer from "../components/LandingPage/samplesContainer"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Get Paid Fast, secure and Reliable" />
    <HeaderContainer />
    <HelpContainer />
    <SamplesContainer />
    <FeaturesContainer />
    <Footer />
    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)



export default IndexPage
