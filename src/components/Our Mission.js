import React, {Component} from 'react';

import {Container, Row, Col } from 'reactstrap';
import Heading from "./Heading";
import Footer from "./Footer";
class OurMission extends Component {
    render() {
        return (
            <Container id = "siteContainer">
                <Heading/>
                <Row style ={{width:"100vw"}}>
                <Col style={{paddingTop: "2vw"}}>

                        <h1 style={{paddingLeft:"8vw", fontSize: "4vw"}}>
                            Our Mission
                        </h1>
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#26770E"}}>
                            While health care reform will keep changing, we can all document, organize and track out own personal health information. Introducing an inovative process to enable you to keep your own health information details on hand. From families to singles, never has it been more important to document and keep track of your information.
                        </p>
                        <br/>
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#26770E"}}>
                            Adaptibility to our healthcare systems is necessary, let MedicalBuddy Solutions be your strength to advocate and document your unique health details. Take charge of your health and your future join the MedicalBuddy Solutions community.
                        </p>

                </Col>
                </Row>


                 <br/>
                 <br/>
            </Container>
        );
    }
}

export default OurMission;