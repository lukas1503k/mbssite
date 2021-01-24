import React, {Component} from 'react';

import {Container, Row, Col } from 'reactstrap';
import Heading from "./Heading";
import Footer from "./Footer";
import healthCarePhoto from "../images/istockphoto-1182616138-2048x2048.jpg";
import {Player} from "video-react";
import video from "../videos/Medical buddy solutions.mp4";
import videoPreview from "../images/Capture.jpg";

class OurMission extends Component {
    render() {
        return (
            <Container id = "siteContainer">
                <Heading/>

                {window.innerWidth < 760 && <> <Row style ={{marginLeft:"0px"}}>
                    <Col style={{paddingTop: "2vw"}}>

                        <h1 style={{paddingLeft:"0vw", fontSize: "7vw"}}>
                            Our Mission
                        </h1>
                        <center>
                            <div style={{textAlign:"center", width:"75vw",}}>
                                <Player src={video} poster = {videoPreview}/>
                            </div>
                            <br/>
                        </center>
                        <p style={{paddingLeft:"0vw" , paddingTop:"3vw", fontSize: "4vw", color: "#8514a7"}}>
                            Medical Buddy Solutions inception came from working in the community with all varieties of clients. We recognized that our clients did not have access to or recall basic health information. Our app will enable users to track health details.
                        </p>
                        <br/>
                        <p style={{paddingLeft:"0vw" , fontSize: "4vw", color: "#8514a7"}}>
                            While health care reform will keep changing, we can all document, organize and track our own personal health information. Introducing an innovative process to enable you to keep your own health information details on hand. From families to singles, never has it been more important to document and keep track of your information.
                        </p>
                        <br/>
                        <p style={{paddingLeft:"0vw" , fontSize: "4vw", color: "#8514a7"}}>
                            Adaptability to our healthcare systems is necessary, let MedicalBuddy Solutions be your strength to advocate and document your unique health details. Take charge of your health and your future join the MedicalBuddy Solutions community.
                        </p>

                    </Col>
                </Row>
                <Row style={{width:"100%", margin:"0px",paddingBottom:"2vw", backgroundColor:"white"}}>

                    <Col style={{textAlign:"center", paddingTop:"3vw"}}>
                        <button style = {{fontSize: "5vw", width: "75vw", height: "10vw", backgroundColor: "#5F0E78", color: "#f8f8f8"}}>
                            Download The App Now!
                        </button>
                    </Col>

                </Row>

                <br/>
                <br/>
                <Footer/>


                    </>}

                {window.innerWidth >= 760 && <><Row style ={{}}>
                    <Col style={{paddingTop: "2vw"}}>

                        <h1 style={{paddingLeft:"8vw", fontSize: "4vw"}}>
                            Our Mission
                        </h1>
                        <center>
                            <div style={{textAlign:"center", width:"50vw",}}>
                                <Player src={video} poster = {videoPreview}/>
                            </div>
                            <br/>
                            <br/>
                        </center>
                        <p style={{paddingLeft:"8vw" , paddingTop:"3vw", fontSize: "2vw", color: "#8514a7"}}>
                            Medical Buddy Solutions inception came from working in the community with all varieties of clients. We recognized that our clients did not have access to or recall basic health information. Our app will enable users to track health details.
                        </p>
                        <br/>
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#8514a7"}}>
                            While health care reform will keep changing, we can all document, organize and track our own personal health information. Introducing an innovative process to enable you to keep your own health information details on hand. From families to singles, never has it been more important to document and keep track of your information.
                        </p>
                        <br/>
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#8514a7"}}>
                            Adaptability to our healthcare systems is necessary, let MedicalBuddy Solutions be your strength to advocate and document your unique health details. Take charge of your health and your future join the MedicalBuddy Solutions community.
                        </p>

                    </Col>
                </Row>
                <Row style={{width:"100%", margin:"0px",paddingBottom:"2vw", backgroundColor:"white"}}>

                    <Col style={{textAlign:"center", paddingTop:"3vw"}}>
                        <button style = {{fontSize: "2vw",width: "30vw", backgroundColor: "#5F0E78", color:"#f8f8f8"}}>
                            Download The App Now!
                        </button>
                    </Col>

                </Row>

                <br/>
                <br/>
                <Footer/>
                </>}
            </Container>


        );
    }
}

export default OurMission;