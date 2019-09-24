import React from "react"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"


const OPayHelp = ({ OPayFiles }) => (
    <Container className="gutter__section" as="section">
        <Row className="gutter__row">
            <Col as="h2" className="color__primary">
            How OPay can help you
            </Col>
        </Row>
        <Row>
            {OPayFiles.map(
                ({node: { id, title, description: { description }, image: { localFile } } }) => (
                <Col key={id} xs="8" sm="6" md="4" lg="3" className="mx-auto gutter__row">
                    <Image fixed={localFile.childImageSharp.fixed} className="mb-3" />
                    <h4 className="text-capitalize mb-3"> {title} </h4>
                    <p> {description} </p>
                </Col>
            ))}
        </Row>

    </Container>
)

export default OPayHelp;

OPayHelp.propTypes = {
    OPayFiles: PropTypes.arrayOf(PropTypes.object)
}