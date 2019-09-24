import React from "react"
import { Field, withFormik } from "formik"
import * as Yup from "yup"
import { Container, Row, Col } from "react-bootstrap"
import SectionHeading from "../sectionHeading"

const renderText = ({
    form: {errors, touched}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    field, // { name, value, onChange, onBlur }
    ...props})=> {
    return (
        <div className="">
            <label htmlFor={placeholder}> { placeholder}</label>
            <input {...props} {...field} />

            {touched[field.name] && errors[field.name] && (
          <p className="">
            {" "}
            {errors[field.name]}{" "}
          </p>
        )}

        </div>
    )
}

const SignInContainer = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;


    return (
        <Container as="section">
           <SectionHeading title={`sign into your account`} />

            <Row>
                <Col>
                <form onSubmit={handleSubmit} >
                    <field component={renderText} name="email" value={values.email} placeholder="Email Address"  type="text" onChange={handleChange} onBlur={handleBlur} />
                   
                    <field component={renderText} name="password" value={values.password} placeholder="Password"  type="text" onChange={handleChange} onBlur={handleBlur} />

                    <input type="submit"></input>
                </form>
                </Col>
            </Row>
        </Container>
    )
}

const schema = Yup.object().shape({
    email: Yup.string().required(`* Email must not be empty`),
    password: Yup.mixed().required(`* Password must not be empty`)
})

export default withFormik({
    mapPropsToValues: () => ({name: "", password: ""}),
    displayName: "SignIn form",
    validationSchema: schema
})(SignInContainer)