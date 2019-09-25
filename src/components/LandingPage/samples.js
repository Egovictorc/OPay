import React from "react"
import Image from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import SectionHeading from "../sectionHeading"
import Column, { ColumnTitle } from "../column"


const Samples = ({ sample }) => {

    return (
        <Container>
            <SectionHeading title={`Meet Samples`} className="offset-md-4 offset-lg-3" />

            <Row>

                {
                    sample.map(({ node }) => {
                        const image = node.image ? node.image.localFile.childImageSharp.fixed : null;
                        const contents =  node.description;
                        const title = node.title;
                        // description && (console.log(`description:::: `, description.description))

                        return (<Column key={node.id}>
                            {image && <Image fixed={image} alt={title} />}
                            {title && <ColumnTitle title={title} />}
                            {contents && contents.map( ({content, id}) => <p key={id}> {content} 
                            {(node.id === "b97baf0b-a002-561a-be6e-982a7d999739") && <span className="d-block text-capitalize color__primary">learn more</span>} </p>)}
                        </Column>)
                    })}
            </Row>
        </Container>

    )
}


export default Samples;