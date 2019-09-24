import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Building from "../images/building.png"


const Loading  = () => (
    <Container >
        <Row css={`
        height: 400px;
        align-items: center;
    `}>
            <Col xs="6" sm="4" md="3" lg="2" xl="1" className="mx-auto loading" >
                <img src={Building} className="img-fluid" alt="building" />
             </Col>
        </Row>
    </Container>
)

export default Loading;