import React from "react"
import { Row, Col } from "react-bootstrap"
import classnames from "classnames"


const SectionHeading = ({title, className, ...props}) => (
    <Row className="row__class">
        <Col as="h2" className={classnames("color__primary offset-1 offset-sm-0", className && className)} >
            {title}
    </Col>
    </Row>
)

SectionHeading.defaultProps = {
    title: `Section heading`,
    style: ``
}
export default SectionHeading;