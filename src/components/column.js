import React from "react"
import { Col } from "react-bootstrap"

const Column = ({ children, ...props }) => (
    <Col {...props} xs="8" sm="6" md="4" lg="3" className="mx-auto row__class">
        {children}
    </Col>
)

export const ColumnTitle = ({ title, ...props }) => (
    <h4 className="text-capitalize mb-3" {...props}> {title} </h4>
)


export default Column;