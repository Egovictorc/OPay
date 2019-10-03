import React from "react"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import Loading from "../loading"
import SectionHeading from "../sectionHeading"
import Column, { ColumnTitle } from "../column"
import Line from "../../images/line.png"

const OPayHelp = ({ OPayFiles }) => (
    OPayFiles ? (<Container className="section" as="section">
        <SectionHeading title={`How OPay can help you`} className="offset-1  offset-sm-0" />
        
        <Row>
            {OPayFiles.map(
                ({node: { 
                    id, 
                    title, 
                    description: { description }, 
                    image: { localFile } } 
                }) => (
                <Column key={id}>
                    <Image fixed={localFile.childImageSharp.fixed} className="mb-3" alt={title} />
                    <ColumnTitle title={title} />
                    <img src={Line} alt="line" className="img-fluid mb-3" />
                    <p> {description} </p>
                </Column>
            ))}
        </Row>
    </Container>
    ) : (
        <Loading />
    )
)

export default OPayHelp;

OPayHelp.propTypes = {
    OPayFiles: PropTypes.arrayOf(PropTypes.object)
}