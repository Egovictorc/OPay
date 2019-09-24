import React from "react"
import { Row, Col } from "react-bootstrap"
import classnames from "classnames"


const SectionHeading = ({title, className}) => (
    <Row className="row__class">
        <Col as="h2" className={classnames("color__primary", className && className)} >
            {title}
    </Col>
    </Row>
)

SectionHeading.defaultProps = {
    title: `Section heading`,
    style: ``
}
export default SectionHeading;