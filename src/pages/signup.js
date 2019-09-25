import React from 'react'
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Form from "../components/form"
import SEO from "../components/seo"

const data = {
    title: `sign up to continue`,
    btn: "register now",
    confirmPassword: true,
    path: "/signin/"
}

const signup = () => {
    return (
        <Layout>
            <SEO title="Sign Up" />
            <Navbar primary/>
            <Form {...data} />
            
        </Layout>
    )
}

export default signup
