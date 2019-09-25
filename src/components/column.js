import React from "react"
import { Col } from "react-bootstrap"
import styled from "styled-components"

const styledColumn = `
    margin-bottom: 2.5rem;
    
    @media only screen and (max-width: 575px) {
    text-align: center !important;
    }

`
const Column = ({ children, ...props }) => (
    <Col {...props} xs="10" sm="6" md="4" lg="3" className="mx-auto row__class" css={styledColumn} >
        {children}
    </Col>
)

export const ColumnTitle = ({ title, ...props }) => (
    <h4 className="text-capitalize mb-3" {...props}> {title} </h4>
)


export default Column;