import React, {Component} from 'react';

import {Container, Row, Col } from 'reactstrap';
import Heading from "./Heading";
import Footer from "./Footer";
import healthCarePhoto from "../images/istockphoto-1182616138-2048x2048.jpg";
import {Player} from "video-react";
import videoPreview from "../videos/Medical buddy solutions.mp4";
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
                        <center>
                        <div style={{textAlign:"center", width:"50vw"}}>
                         <Player src={videoPreview}/>
                        </div>
                        </center>
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#8514a7"}}>
                            Medical Buddy Solutions comes from the recognition for the need for a system like this. Our first hand experience in health care has shown that people don't know all that they should about their health. Our app hopes to solve this problem with our simple design that allows you to track every detail about your health.
                        </p>
                        <br/>
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#8514a7"}}>
                            While health care reform will keep changing, we can all document, organize and track our own personal health information. Introducing an innovative process to enable you to keep your own health information details on hand. From families to singles, never has it been more important to document and keep track of your information.
                        </p>
                        <br/>
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#8514a7"}}>
                            Adaptibility to our healthcare systems is necessary, let MedicalBuddy Solutions be your strength to advocate and document your unique health details. Take charge of your health and your future join the MedicalBuddy Solutions community.
                        </p>

                </Col>
                </Row>

                 <br/>
                 <br/>
                 <Footer/>
            </Container>
        );
    }
}

export default OurMission;