import React from "react"
import { Row, Col } from "react-bootstrap"


const SectionHeading = ({style, title}) => (
    <Row className="row__class">
        <Col as="h2" className="color__primary">
            {title}
    </Col>
    </Row>
)

SectionHeading.defaultProps = {
    title: `Section heading`,
    style: ``
}
export default SectionHeading;