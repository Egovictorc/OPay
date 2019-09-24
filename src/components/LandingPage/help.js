import React from "react"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import Loading from "../loading"
import SectionHeading from "../sectionHeading"
import Line from "../../images/line.png"

const OPayHelp = ({ OPayFiles }) => (
    OPayFiles ? (<Container className="section" as="section">
        
        <SectionHeading title={`How OPay can help you`} />
        
        <Row>
            {OPayFiles.map(
                ({node: { id, title, description: { description }, image: { localFile } } }) => (
                <Col key={id} xs="8" sm="6" md="4" lg="3" className="mx-auto row__class">
                    <Image fixed={localFile.childImageSharp.fixed} className="mb-3" />
                    <h4 className="text-capitalize mb-3"> {title} </h4>
                    <img src={Line} alt="line" className="img-fluid mb-3" />
                    <p> {description} </p>
                </Col>
            ))}
        </Row>

    </Container>) : (
        <Loading />
    )
)

export default OPayHelp;

OPayHelp.propTypes = {
    OPayFiles: PropTypes.arrayOf(PropTypes.object)
}