import React from "react"
import { Field, withFormik } from "formik"
import * as Yup from "yup"
import { Container, Row, Col } from "react-bootstrap"
import SectionHeading from "./sectionHeading"

const renderText = ({
    form: { errors, touched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    field, // { name, value, onChange, onBlur }
    ...props }) => {
    return (
        <div className="form-group">
            <label htmlFor={props.placeholder}> {props.placeholder}</label>
            <input {...props} {...field} className="form-control" />

            {touched[field.name] && errors[field.name] && (
                <p className="">
                    {" "}
                    {errors[field.name]}{" "}
                </p>
            )}
        </div>
    )
}

const OPayForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;


    return (
        <Container as="section" className="section">
            <SectionHeading title={props.title} className="form__heading" />
            <Row  className="row__class">
                <Col className="mx-auto" xs="11" sm="8" md="7" lg="6">
                    <form onSubmit={handleSubmit} >
                        <Field component={renderText} name="email" value={values.email} placeholder="Email Address" type="text" onChange={handleChange} onBlur={handleBlur} />

                        <Field component={renderText} name="password" value={values.password} placeholder="Password" type="text" onChange={handleChange} onBlur={handleBlur} />

                        <button type="submit" className="submit__btn ">sign in</button>
                    </form>
                </Col>
            </Row>

            <Row>
                <Col className="mx-auto text-center" xs="11" sm="8" md="7" lg="6">
                    <p className="first-letter">don't have an account? 
                    <span className="text-danger first-letter d-inline-block"> sign up</span></p>
                    <p className="text-danger first-letter">forgot password?</p>
                </Col>
            </Row>

        </Container>
    )
}

const schema = Yup.object().shape({
    email: Yup.string().email(`*Invalid email`).required(`* Email must not be empty`),
    password: Yup.mixed().required(`* Password must not be empty`)
})

export default withFormik({
    mapPropsToValues: () => ({ name: "", password: "" }),
    displayName: "OPayForm form",
    validationSchema: schema
})(OPayForm)