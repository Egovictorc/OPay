import React from "react"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import Background from "gatsby-background-image"
import { Container, Row, Col } from "react-bootstrap"
import Badge from "../../images/badge.png"
import PlaystoreButton from "../../images/playstore-button.png"
import Loading from "../loading"


const OPayFeatures = ({ features, featuresBg }) => (
    features ? (
    <Background fluid={featuresBg}>
    <Container className="section" as="section">
        {features.map(
            ({ node: { image: { localFile }, description, id } }) => (
                <Row key={id} className="justify-content-center justify-content-lg-around">
                    <Col xs="auto" md="5" lg="4" xl="3">
                        <Image fixed={localFile.childImageSharp.fixed} />
                    </Col>

                    <Col sm="10" md="7" lg="5">
                        <div css={`
                            height: 500px;
                            max-width: 400px;
                            background: #fff;
                            border-radius: 5px;
                            padding-left: 2.5rem;
                            box-shadow: 2px 2px 2px 2px #e1e1e1`}>
                            <h4 className="text-capitalize row__class">
                                <img src={Badge} alt="badge" css={`
                                width: 50px; 
                                height: auto;
                                margin-right: 2rem`} />
                                features
                            </h4>

                            <ul className="px-0">
                                {description.map((data, index) => (
                                    <li key={`${data}-${index}`} className="styled__list mb-3">
                                        <span className="styled__bullet"></span>{data.content}
                                    </li>
                                ))}

                                <li className="styled__list mt-5">
                                    <img src={PlaystoreButton} alt="Playstore logo" className="playstore-button" />
                                </li>
                            </ul>
                            
                        </div>
                    </Col>
                </Row>
            )
        )}
    </Container>
    </Background>
    ) : (
            <Loading />
        )
)

export default OPayFeatures;

OPayFeatures.propTypes = {
    features: PropTypes.arrayOf(PropTypes.object)
}