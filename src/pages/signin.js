import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Form from "../components/form"

const data = {
    title: `sign in to your account`,
    btn: "sign in",
    confirmPassword: false,
    path: "/signup/"
}

const signin = () => {
    return (
        <Layout>
            <SEO title="Sign In" />
            <Navbar primary/>
            <Form {...data} />
        </Layout>
    )
}

export default signin
