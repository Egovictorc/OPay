import React from "react"
import Image from "gatsby-image"
import Background from "gatsby-background-image"
import { Container, Row, Col } from "react-bootstrap"
import SectionHeading from "../sectionHeading"
import Column, { ColumnTitle } from "../column"


const Samples = ({ sample, samplesBg }) => {

    return (
        <Background fluid={samplesBg}>
            <Container>
                {/* MEET SAMPLE */}
                <SectionHeading title={`Meet Sample`} className=" offset-1  offset-sm-0 offset-md-4 offset-lg-3" />

                <Row>
                    {
                        sample.map(({ node }) => {
                            const image = node.image ? node.image.localFile.childImageSharp.fixed : null;
                            const contents = node.description;
                            const title = node.title;
                            const type = node.type;
                            // description && (console.log(`description:::: `, description.description))

                            return (
                                (node.type === "more") ? (
                                    <Column key={node.id}>
                                        {contents && contents.map(
                                            ({ content, id }) => (
                                                <p key={id}> {content}
                                                    {title && <ColumnTitle title={title} />}
                                                    {<span className="d-block text-capitalize color__primary">learn more</span>}
                                                </p>))}
                                        {image && <Image fixed={image} alt={title} />}
                                    </Column>
                                ) : (
                                        <Column key={node.id}>
                                            {image && <Image fixed={image} alt={title} />}
                                            {title && <ColumnTitle title={title} />}
                                            {contents && contents.map(
                                                ({ content, id }) => <p key={id}> {content} </p>
                                            )}
                                        </Column>
                                    ))
                        })}
                </Row>
            </Container>
        </Background>
    )
}


export default Samples;