import React from 'react'
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Form from "../components/form"

const data = {
    title: `sign in to your account`,
    btn: "sign in",
    confirmPassword: false
}

const signup = () => {
    return (
        <Layout>
            <Navbar primary/>
            <Form {...data} />
            
        </Layout>
    )
}

export default signup
