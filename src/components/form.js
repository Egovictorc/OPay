import React from "react"
import { Link } from "gatsby"
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
            <input {...field} {...props} className="form-control" aria-label={props.placeholder}/>

            {touched[field.name] && errors[field.name] && (
                <p className="helper-text">
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
            <Row className="row__class">
                <Col className="mx-auto" xs="11" sm="8" md="7" lg="6">
                    <form onSubmit={handleSubmit} >
                        <Field 
                        component={renderText} 
                        name="email" 
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Email Address" 
                        type="text"  />

                        <Field 
                        component={renderText} 
                        name="password" 
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Password" type="password" />

                        {props.confirmPassword &&
                            <Field component={renderText} 
                            value={values.confirmPassword}
                            onChange={handleChange}
                            type="password" 
                            name="confirmPassword" 
                            placeholder="Confirm Password" />
                        }
                        <button type="submit" className="submit__btn "> {props.btn} </button>
                    </form>
                </Col>
            </Row>

            <Row>
                {
                    props.confirmPassword ? (
                    <Col className="mx-auto text-center" xs="11" sm="8" md="7" lg="6">
                        <p className="first-letter">already have an account?&nbsp;
                  <Link to={props.path} className="text-danger first-letter d-inline-block nav__link">sign in </Link></p>
                    </Col>
                ) : (
                        <Col className="mx-auto text-center" xs="11" sm="8" md="7" lg="6">
                            <p className="first-letter">don't have an account?&nbsp;
                    <Link to={props.path} className="text-danger first-letter d-inline-block nav__link">sign up</Link></p>
                            <p className="text-danger first-letter">forgot password?</p>
                        </Col>
                    )
                }
            </Row>

        </Container>
    )
}

const schema = Yup.object().shape({
    email: Yup.string().email(`* Invalid email`).required(`* Email must not be empty`),
    password: Yup.mixed().required(`* Password must not be empty`)
})

export default withFormik({
    mapPropsToValues: () => ({ email: "", password: "", confirmPassword: "" }),
    displayName: "OPayForm form",
    validationSchema: schema
})(OPayForm)