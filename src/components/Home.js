import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import stock from "../images/istockphoto-611178972-2048x2048.jpg"
import Heading from "./Heading";
import "../Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import QRcode from "../images/QR-code-600x600.png"
import videoPreview from "../images/Capture.PNG"
import paramedicPhoto from "../images/istockphoto-1211390857-2048x2048.jpg"
import techPhoto from "../images/istockphoto-588366224-1024x1024.jpg"
import {Container, Row, Col } from 'reactstrap';
import lockPhoto from "../images/istockphoto-913016600-1024x1024.jpg"

import Footer from "./Footer";
class Home extends Component {
    render() {
        return (
            <Container id = "siteContainer" style={{font: "Roboto"}}>

            <Heading/>

                <Row style ={{width:"99vw", marginTop: "7.08333vw",paddingBottom:"5vw", paddingTop:"5vw",backgroundColor:"#5F0E78"}}>

                    <Col>

                        <div id="healthBox" style={{width:"39vw", float:"left", paddingLeft:"2vw", marginTop:"10vw"}}>
                            <h1 style = {{fontSize:"3vw"}}>Health at your fingertips</h1>
                            <h2 style = {{fontSize:"2vw"}} id="h1Subtext">Your health is your wealth! Be connected to your heath information with a simple app! </h2>
                        </div>

                    </Col>
                    <Col>
                        <img src={stock} style={{marginLeft: "27vw", width:"64vw", height:"28vw", paddingRight:"0px"}}/>

                    </Col>

                </Row>



                <Row style ={{width:"99vw", paddingRight:"0px", marginTop:"12.8333333333vw"}}>
                    <Col xs="4" style = {{paddingLeft: "4vw"}}>
                        <img src={QRcode} style={{width:"35vw", height:"40vw"}}/>
                    </Col>

                    <Col style = {{paddingRight:"0px"}}>

                            <h1 style = {{fontSize:"2vw", marginBottom:"4.166666vw"}}>
                                All Your Health Records Available in One Place!
                            </h1>

                            <h2 style = {{fontSize: "2vw", lineHeight:"3vw"}} id="h1Subtext">
                                Have you ever needed to get some information about your medical condition and didn’t know where to even look to find it? For example, what’s your blood type, what earlier conditions have you had that may affect your current health? If you are one of the many that need to have access to your medical records, we have the perfect solution for you.
                            </h2>

                            <h2 style = {{fontSize: "2vw", lineHeight:"3vw"}} id="h1Subtext">
                                With a simple QR code you can now access your medical data at a glance on your phone or tablet. This quick access will help you in medical emergencies or when need information for your health insurance, or you simply want to know what is recorded concerning your health.
                            </h2>

                    </Col>
                </Row>
                <br/>
                <Row style={{width:"99vw", paddingRight:"0px"}}>

                    <Col style={{textAlign:"center", paddingRight:"0px"}}>
                        <button style = {{fontSize: "2vw",width: "30vw"}}>
                            Download The App Now!
                        </button>
                    </Col>

                </Row>

                <Row style={{width: "99vw", paddingTop: "5vw",marginTop: "6vw", backgroundColor:"#5F0E78"}}>
                    <Col style={{paddingRight: "0px"}}>
                        <div style={{marginLeft: "6vw", width: "56vw"}}>
                            <h1 style={{fontSize:"3vw", color:"white"}}>
                                Health Data On the Fly!
                            </h1>

                            <h2 id="h1Subtext" style={{fontSize: "2vw", lineHeight:"3vw", marginTop:"2.8333vw", color:"white"}}>
                                All of us at Medical Buddy Solutions realize the value of having the capability to
                                collaborate with medial professionals when times call for important medical details, as
                                well as being able to share with trusted partners for the best possible medical
                                outcomes. having your digital data at your fingertips for your knowledge and success.
                            </h2>

                            <h2 id="h1Subtext" style={{fontSize: "2vw", marginTop:"2.8333vw", lineHeight:"3vw", color:"white"}}>
                                With our app and blockchain technology you will be able to keep track of your
                                appointments, manage your conditions, and edit what is seen when your QR code is
                                scanned.
                            </h2>
                        </div>
                    </Col>
                    <Col style={{paddingRight: "0px", paddingLeft: "0px"}}>
                        <img style={{width: "32vw", paddingRight: "0px"}} src={videoPreview}/>
                    </Col>
                </Row>

             <br/>
                <br/>
                <br/>
                <Row style={{
                    width: "99vw",
                    paddingRight: "0px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "centre"
                }}>
                    <Col style={{marginLeft: "9vw", marginRight: "9vw"}}>
                        <Row>
                            <div style={{textAlign: "center", alignItems: "center", width: "100%"}}>
                                <h1 style ={{fontSize: "3vw"}}>
                                    There when you need it
                                </h1>
                            </div>
                        </Row>
                        <Row>
                            <div style={{textAlign: "center", alignItems: "center", width: "100%"}}>
                                <img src={paramedicPhoto} style={{width: "25vw"}}/>
                            </div>
                        </Row>
                        <br/>

                        <Row>
                            <h2 id="h1Subtext" style={{fontSize: "2vw", lineHeight:"3vw"}}>
                                Our QR code technology allows for emergency responders to get the critical information
                                that they need. By scanning the QR code our health conditions, medications, allergies
                                and much more will be made available to the responder.
                            </h2></Row>
                    </Col>


                    <Col style={{marginLeft: "9vw", marginRight: "9vw"}}>
                        <Row>
                            <div style={{textAlign: "center", alignItems: "center", width: "100%"}}>
                                <h1 style ={{fontSize: "3vw"}}>
                                    Easy to Use
                                </h1>
                            </div>
                        </Row>
                        <Row>
                            <div style={{textAlign: "center", alignItems: "center", width: "100%"}}>
                                <img src={techPhoto} style={{width: "25vw"}}/>
                            </div>
                        </Row>
                        <br/>
                        <Row>
                            <h2 id="h1Subtext" style={{fontSize: "2vw", lineHeight:"3vw"}}>
                                Our intuitive app makes it easy to update your responder page, as well as your medical
                                journal. We let you manage your medical history quickly and easily. You are in control,
                                optimize your health by tracking your data! </h2></Row>

                    </Col>

                </Row>

                    <br style={{height: "14.666vw"}}/>



                <Row style = {{marginTop:"14.6666vw", backgroundColor:"#5F0E78", paddingTop:"5vw"}}>

                    <Col>
                        <img src={lockPhoto} style={{width: "25vw", height: "25vw", marginLeft: "10vw"}}/>
                    </Col>
                    <Col>
                        <h1 style={{fontSize: "2.25vw", color:"white"}}>
                            Your Records are Safe
                        </h1>
                        <p id="h1Subtext" style={{fontSize: "2vw", color:"white"}}>
                            Ei ullum iudico sit. Ut graecis delicata sed, ad vis noster assueverit. An vim clita
                            sanctus, eam munere percipit mediocritatem ne, an illud iusto mnesarchum pri. Est tacimates
                            recusabo et, mutat delenit eu mei, nonumy suscipit rationibus at qui. In usu enim ferri
                            graecis, nemore scripta in mei.
                        </p>
                    </Col>
                </Row>

            </Container>

        );
    }
}

export default Home;