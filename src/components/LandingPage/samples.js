import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionHeading from "../sectionHeading"


const Samples = ({sample})=> {
    console.log(`samples:::: `, sample)
    return (
        <Container>
            <SectionHeading title={`Meet Samples`} />

      <Row>
          <Col>
             {/* {sample.map(({node: {id, sample}}) => <div key={id} >
             <img src={sample.content[0].data.target.fields.file.en_US.url} alt={id} />
         </div>)}

            {JSON.stringify(sample, null, 4)}
            hello from samples */}
            </Col>
      </Row>
        </Container>

    )
}

 
export default Samples;