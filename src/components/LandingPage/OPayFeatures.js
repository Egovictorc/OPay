import React from "react"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Badge from "../../images/badge.png"
import PlaystoreButton from "../../images/playstore-button.png"


const OPayFeatures = ({ features }) => (
    <Container>
        {features.map(({ node: { image: { localFile }, description, id } }) => (
            <Row key={id}>
                <Col>
                    <Image fixed={localFile.childImageSharp.fixed} />
                </Col>

                <Col>
                    <div className="" css={`
                    height: 500px;
                    max-width: 400px;
                    padding-left: 3rem;
                    box-shadow: 2px 2px 3px #e1e1e1`}>
                        <h4 className="text-capitalize gutter__row">
                            <img src={Badge} alt="badge" css={`
                      width: 50px; 
                      height: auto;
                      margin-right: 2rem`} />
                            features
                      </h4>
                        <ul css={`
                  max-width: `} className="p-0">
                            {description.map(data => (
                                <li key={data.id} className="styled__list mb-3">
                                    <span className="styled__bullet"></span>{data.content}
                                </li>
                            ))}

                            <li className="styled__list">
                                <img src={PlaystoreButton} alt="Playstore logo" className="playstore-button" />
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        )
        )}
    </Container>
)

export default OPayFeatures;

OPayFeatures.propTypes = {
    features: PropTypes.arrayOf(PropTypes.object)
}