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
            <input type="text" {...props} {...field} />

            {touched[field.name] && errors[field.name] && (
          <p className="">
            {" "}
            {errors[field.name]}{" "}
          </p>
        )}

        </div>
    )
}

const SignIn = (props) => {

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
                    <field component={renderText} name="email" value={} placeholder="Email Address" />
                </form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn