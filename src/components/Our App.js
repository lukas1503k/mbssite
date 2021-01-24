import React, {Component} from 'react';
import Heading from "./Heading";
import {Container, Row, Col } from 'reactstrap';
import "../Home.css"

import AppScreen from "../images/App.PNG"
import AppImage from "../images/Rectangle 7.png"
import Lock from "../images/lock.png"
import App from "../App";
import MyIllnessPage from "./MyIllnessPage";
import MyIllnessPageMobile from "./MyIllnessPageMobile"
import Footer from "./Footer";

class OurApp extends Component {
    render() {
        return (
            <div  className="container-fluid" id = "siteContainer" style={{font: "Roboto"}} >

                <Heading/>
                {window.innerWidth < 760 && <>
                    <Row style={{paddingTop: "5vw", paddingBottom: "3vw"}}>
                        <Col style={{textAlign: "center"}}>
                            <h1 style={{fontSize: "7vw", color: "#5F0E78", fontStyle:"bold"}}> The App</h1>
                        </Col>
                    </Row>
                    <Row xs="1" sm="2" style = {{marginLeft:"0px"}}>
                        <Col style = {{width: "47.5833333vw", marginLeft: "0px"}}>
                            <h1 style={{ fontSize: "5vw"}}>My Emergency Page
                            </h1>
                            <h2 style={{ fontSize: "4.5vw", color: "#8514a7"}}>
                                M.E.D.I (Medical Emergency Data Information)
                            </h2>

                            <p style={{ fontSize: "4vw",  color: "#8514a7"}}>
                                Your emergency page serves as a quick view into your medical history. In case of an emergency, first responders can scan your QR code and get the information they need to help you.
                            </p>
                        </Col>
                        <Col style ={{ height: "150vw", textAlign:"center", padding: "0px"}}>
                            <img style = {{
                                float: "center",
                                width: "75vw",
                                height: "150vw",
                                paddingBottom: "10vw"
                            }}src ={AppScreen}/>
                            <br/>
                            <br/>
                            <br/>

                        </Col>
                    </Row>


                    {window.innerWidth < 760 &&<>
                        <Row style={{paddingTop: "5vw", backgroundColor: "#5F0E78", color: "white", marginRight: "0px"}}>
                            <h1 style={{paddingLeft: "10vw", fontSize: "5vw", width: "51.8333vw", color: "white"}}>
                                My Illness Page
                            </h1>
                            <p style={{paddingLeft: "10vw", paddingRight: "2vw", fontSize: "4vw",  color: "white"}}>
                                Your illness page allows you to keep track of your illnessess, medications and your appointments. With the app you can take notes about what happens at your appointment, so you can always remember exactly what your health care provider recommends you.                        </p>
                        </Row>
                        <Row style={{paddingTop: "5vw", backgroundColor: "#5F0E78", color: "white", marginLeft: "0px"}}>
                            <h1 style={{
                                paddingLeft: "10vw",
                                fontSize: "5vw",
                                color: "white",
                                textAlign: "center"
                            }}> Try It Out Here!</h1>
                            <MyIllnessPageMobile style={{paddingLeft: "5vw", borderColor:"black"}} />
                            <br/>
                            {/*<img style = {{float:"right", paddingRight:"7.75vw", width: "28.83333333vw", height: "44.8333vw"}}src ={AppImage}/>*/}
                        </Row>
                    </>
                    }
                    <Row style={{width: "100%", margin: "0px", paddingBottom: "2vw", backgroundColor: "#5F0E78"}}>

                        <Col style={{textAlign: "center", paddingTop: "3vw"}}>
                            <button style={{fontSize: "5vw", width: "75vw", height: "10vw", backgroundColor: "#f8f8f8", color: "#5F0E78"}}>
                                Download The App Now!
                            </button>
                        </Col>

                    </Row>
                    <Row xs= "1" sm = "2"style={{width: "99vw", paddingTop: "5vw"}}>
                        <Col style={{width: "51.833333vw"}}>
                            <h1 style={{paddingLeft: "5.41666vw", fontSize: "5vw", width: "51.8333vw"}}>
                                Security
                            </h1>
                            <p style={{paddingLeft: "5.41666vw", fontSize: "4vw", color: "#8514A7"}}>
                                All your data on the app is yours! Medical Buddy Solutions is unable to see any of your
                                private data. Thanks to the power of blockchain technology, your data is as safe as your
                                private key.
                            </p>
                        </Col>
                        <Col style={{width: "75vw"}}>
                            <img style={{float: "right", paddingRight: "7.75vw", width: "75vw"}} src={Lock}/>
                        </Col>
                    </Row>
                </>
                }

                {window.innerWidth >= 760 && <>
                <Row style={{paddingTop: "1vw"}}>
                    <Col style={{textAlign: "center"}}>
                        <h2 style={{fontSize: "4vw", color: "#5F0E78"}}> The App</h2>
                    </Col>
                </Row>
                    <Row >
                    <Col style = {{width: "47.5833333vw"}}>
                    <h1 style={{paddingLeft: "5.41666vw", fontSize: "3vw"}}>My Emergency Page
                    </h1>
                    <h2 style={{paddingLeft: "5.41666vw", fontSize: "1.5vw", color: "#8514a7"}}>
                    M.E.D.I (Medical Emergency Data Information)
                    </h2>
                    <br/>
                    <p style={{paddingLeft: "5.41666vw", fontSize: "2vw", width: "18em", color: "#8514a7"}}>
                    Your emergency page serves as a quick view into your medical history. In case of an emergency, first responders can scan your QR code and get the information they need to help you.
                    </p>
                    </Col>
                    <Col style ={{width: "28.83333333vw", height: "44.8333vw"}}>
                    <img style = {{
                    float: "right",
                    paddingRight: "7.75vw",
                    width: "28.83333333vw",
                    height: "44.8333vw",
                    paddingBottom: "10vw"
                }}src ={AppScreen}/>
                    <br/>
                    <br/>
                    <br/>

                    </Col>
                    </Row>

                    <Row style={{
                    paddingTop: "5vw",
                    paddingBottom: "2vw",
                    backgroundColor: "#5F0E78",
                    color: "white",
                    marginRight: "0px"
                }}>
                    <Col style = {{width: "51.833333vw"}}>
                    <h1 style={{paddingLeft: "5.41666vw", fontSize: "3vw", width: "51.8333vw", color: "white"}}>
                    My Illness Page
                    </h1>
                    <br/>
                    <p style={{paddingLeft: "5.41666vw", width: "18em", fontSize: "2vw", color: "white"}}>
                    Your illness page allows you to keep track of your illnessess, medications and your appointments. With the app you can take notes about what happens at your appointment, so you can always remember exactly what your health care provider tells you.
                    </p>
                    </Col>
                    <Col style ={{width: "28.83333333vw", height: "44.8333vw"}}>
                    <MyIllnessPage />
                    {/*<img style = {{float:"right", paddingRight:"7.75vw", width: "28.83333333vw", height: "44.8333vw"}}src ={AppImage}/>*/}
                    </Col>
                    </Row>

                <Row style={{width: "100%", margin: "0px", paddingBottom: "2vw", backgroundColor: "#5F0E78"}}>

                    <Col style={{textAlign: "center", paddingTop: "3vw"}}>
                        <button style={{fontSize: "2vw", width: "30vw", backgroundColor: "#f8f8f8", color: "#5F0E78"}}>
                            Download The App Now!
                        </button>
                    </Col>

                </Row>
                <Row style={{width: "99vw", paddingTop: "5vw"}}>
                    <Col style={{width: "51.833333vw"}}>
                        <h1 style={{paddingLeft: "5.41666vw", fontSize: "3vw", width: "51.8333vw"}}>
                            Security
                        </h1>
                        <br/>
                        <p style={{paddingLeft: "5.41666vw", fontSize: "2vw", color: "#8514A7"}}>
                            All your data on the app is yours! Medical Buddy Solutions is unable to see any of your
                            private data. Thanks to the power of blockchain technology, your data is as safe as your
                            private key.
                        </p>
                    </Col>
                    <Col style={{width: "28.83333333vw", height: "44.8333vw"}}>
                        <img style={{float: "right", paddingRight: "7.75vw",}} src={Lock}/>
                    </Col>
                </Row>
                </>
                }
                <Footer/>
            </div>
        );
    }
}

export default OurApp;