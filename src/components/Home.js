import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import stock from "../images/Untitled-3.png"
import Heading from "./Heading";
import "../Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import QRcode from "../images/QR-code-600x600.png"
import healthWealth from "../images/iStock-1062274514.jpg"
import video from "../videos/Medical buddy solutions.mp4"
import paramedicPhoto from "../images/iStock-1131889468.jpg"
import techPhoto from "../images/iStock-588366224.jpg"
import {Container, Row, Col } from 'reactstrap';
import lockPhoto from "../images/istockphoto-913016600-1024x1024.jpg"
import healthCarePhoto from "../images/iStock-1182616138.jpg"
import cover from "../images/Frame 2.png"
import videoPreview from "../images/Capture.jpg";

import { Player } from 'video-react';


import Footer from "./Footer";
class Home extends Component {
    render() {
        return (
            <div className="container-fluid" id = "siteContainer" style={{font: "Roboto"}}>

            <Heading/>

                {window.innerWidth < 760 &&
                <>
                    <Row style={{backgroundColor: "#F8F8F8", marginLeft: "0px"}}>

                        {/*<Col>

                        <div id="healthBox"
                             style={{width: "39vw", float: "left", paddingLeft: "2vw", marginTop: "20vw"}}>
                            <h1 style={{fontSize: "3vw", fontWeight: "bold"}}>Health at your fingertips</h1>
                            <h2 style={{fontSize: "2vw"}} id="h1Subtext">Your health is your wealth! Be connected to
                                your heath information with a simple app! </h2>
                        </div>

                    </Col>*/}
                        <Col>
                            <img src={cover} style={{
                                marginLeft: "0*27vw",
                                height: "43vw",
                                paddingRight: "0px",
                                paddingTop: "3vw"
                            }}/>


                        </Col>

                    </Row>


                    <Row xs="1" sm="2" style={{
                        width: "100%",
                        paddingRight: "0px",
                        margin: "0px",
                        paddingTop: "3vw",
                        backgroundColor: "#5F0E78"
                    }}>
                        <Col style={{paddingLeft: "3vw", textAlign: "center"}}>

                            <h1 style={{fontSize: "5vw", color: "white", fontWeight: "bold"}}>
                                Innovate your relationship with your health data</h1>
                            <p style={{fontSize: "4vw", color: "white"}}>
                                The mission at Medical Buddy Solutions is to help people become more interactive with
                                their health information. By building your health journal you will have the ability to
                                advocate for you and your families best health. With a background in private homecare it
                                is evident that a better system was needed. We are striving to promote optimum wellness
                                through an interactive organizational personal health journal. Make Medical Buddy Solutions your "Medical Digital Asset"!
                            </p>
                        </Col>
                        <Col style={{margin: "auto", textAlign: "center"}}>
                            <img style={{width: "90vw"}} src={healthCarePhoto}/>
                        </Col>


                    </Row>

                    <Row style={{width: "100%", margin: "0px", paddingBottom: "2vw", backgroundColor: "#5F0E78"}}>

                        <Col style={{textAlign: "center", paddingTop: "3vw"}}>
                            <button
                                style={{fontSize: "4vw", width: "60vw", height:"3em", backgroundColor: "#f8f8f8", color: "#5F0E78"}}>
                                Download The App Now!
                            </button>
                        </Col>

                    </Row>

                    <Row xs="1" sm="2"
                         style={{margin: "0px", paddingTop: "6vw", paddingBottom: "7vw", backgroundColor: "#f8f8f8"}}>
                        <Col style={{paddingLeft: "3vw", textAlign: "center"}}>

                            <h1 style={{fontSize: "5vw", color: "#5F0E78", fontWeight: "bold"}}>
                                Health Data On the Fly!
                            </h1>

                            <p style={{fontSize: "4vw", color: "#5F0E78"}}>
                                Medical Buddy Solutions realizes the value of having the capability to
                                collaborate with medial professionals when times call for important medical details.
                                Being able to share with trusted partners is a recipe for your health success.
                            </p>
                            {/*
                             <div style={{margin: "auto",paddingLeft:"1vw",textAlign:"center", width: "56vw"}}>
                            <h1 style={{fontSize: "3vw", color: "#5F0E78"}}>
                                Health Data On the Fly!
                            </h1>


                                <h2 id="h1Subtext" style={{
                                fontSize: "2vw",
                                lineHeight: "3vw",
                                marginTop: "2.8333vw",
                                color: "#5F0E78"
                            }}>
                                All of us at Medical Buddy Solutions realize the value of having the capability to
                                collaborate with medial professionals when times call for important medical details, as
                                well as being able to share with trusted partners for the best possible medical
                                outcomes. having your digital data at your fingertips for your knowledge and success.
                                </h2>

                                <h2 id="h1Subtext" style={{
                                fontSize: "2vw",
                                marginTop: "2.8333vw",
                                lineHeight: "3vw",
                                color: "#5F0E78"
                            }}>
                                With our app and blockchain technology you will be able to keep track of your
                                appointments, manage your conditions, and edit what is seen when your QR code is
                                scanned.
                                </h2>
                                </div>*/}

                        </Col>
                        <Col style={{textAlign: "center", margin: "auto", paddingRight: "10px", paddingLeft: "10px"}}>
                            <Player style={{width: "25vw", paddingRight: "0px"}} src={video} poster={videoPreview}/>
                        </Col>
                    </Row>


                    <Row xs="1" sm="2" style={{
                        width: "100%",
                        margin: "0px",
                        paddingRight: "0px",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "centre", backgroundColor: "#5F0E78",
                        paddingTop: "3vw", paddingBottom: "1vw", marginLeft:"0px"
                    }}>
                        <Col style={{textAlign: "center"}}>
                            <Row style={{marginRight: "0px", marginLeft:"0px"}}>
                                <div style={{textAlign: "center", alignItems: "center", width: "100%"}}>
                                    <h1 style={{fontSize: "5vw", color: "white"}}>
                                        There when you need it
                                    </h1>
                                </div>
                            </Row>
                            <Row style={{marginRight: "0px", marginLeft:"0px"}}>
                                <div style={{
                                    textAlign: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    paddingTop: "3vw"
                                }}>
                                    <img src={paramedicPhoto} style={{width: "75vw"}}/>
                                </div>
                            </Row>

                            <Row style={{marginRight: "0px", textAlign:"center", marginLeft:"0px"}}>
                                <h2 id="h1Subtext"
                                    style={{fontSize: "4vw",  color: "white", padding: "4vw"}}>
                                    QR code technology allows for emergency responders to get the critical information
                                    that they need. By scanning the QR code our health conditions, medications,
                                    allergies
                                    and much more will be made available to the responder.
                                </h2></Row>
                        </Col>


                        <Col style={{   textAlign: "center"}}>
                            <Row style={{marginRight: "0px", marginLeft:"0px"}}>
                                <div style={{
                                    textAlign: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    fontWeight: "bold"
                                }}>
                                    <h1 style={{fontSize: "5vw", color: "white"}}>
                                        Easy to Use
                                    </h1>
                                </div>
                            </Row>
                            <Row style={{marginRight: "0px", marginLeft:"0px"}}>
                                <div style={{
                                    textAlign: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    paddingTop: "3vw"
                                }}>
                                    <img src={techPhoto} style={{width: "75vw", margin:"auto"}}/>
                                </div>
                            </Row>
                            <Row style={{marginRight: "0px", textAlign:"center", marginLeft:"0px"}}>
                                <h2 id="h1Subtext"
                                    style={{fontSize: "4vw",  color: "white", padding: "4vw"}}>
                                    Our intuitive app makes it easy to update your responder page and medical journal.
                                    With these two tools, you can manage and view your medical history with the click of
                                    a button. You are in control,
                                    optimize your health by tracking your data! </h2></Row>

                        </Col>

                    </Row>


                    {
                        /*
                        <Row xs="1" sm="2" style={{
                            backgroundColor: "white",
                            paddingTop: "5vw",
                            paddingBottom: "5vw",
                            width: "100%",
                            margin: "0px"
                        }}>

                            <Col style={{textAlign: "center"}}>
                                <img src={lockPhoto} style={{width: "25vw", height: "25vw", margin: "auto"}}/>
                            </Col>
                            <Col>
                                <h1 style={{fontSize: "2.25vw", color: "#5F0E78", fontWeight: "bold"}}>
                                    Your Records are Safe
                                </h1>
                                <p id="h1Subtext" style={{fontSize: "2vw", color: "#5F0E78"}}>
                                    Ei ullum iudico sit. Ut graecis delicata sed, ad vis noster assueverit. An vim clita
                                    sanctus, eam munere percipit mediocritatem ne, an illud iusto mnesarchum pri. Est
                                    tacimates
                                    recusabo et, mutat delenit eu mei, nonumy suscipit rationibus at qui. In usu enim ferri
                                    graecis, nemore scripta in mei.
                                </p>
                            </Col>
                        </Row>
                        */}

                    <Row xs="1" sm="2" style={{
                        width: "100%",
                        paddingRight: "0px",
                        margin: "0px",
                        paddingBottom: "3vw",
                        paddingTop: "3vw",
                        backgroundColor: "#F8F8F8",
                        gridAutoFlow: "row", marginLeft:"0px"
                    }}>
                        <Col style={{paddingLeft: "5vw", textAlign: "center"}}>

                            <h1 style={{fontSize: "5vw", color: "#5F0E78", fontWeight: "bold"}}>
                                Protect What Is Most Valuable
                            </h1>
                            <h2 style={{fontSize: "4vw",  color: "#5F0E78"}} id="h1Subtext">
                                Many people neglect their health in their busy lives. With our app, we make it easy to
                                track your appointments and record details regarding your health. Your health is your
                                wealth, protect the most valuable thing you own with Medical Buddy Solutions.
                            </h2>


                        </Col>

                        <Col style={{textAlign: "center", margin: "auto"}}>
                            <img src={healthWealth} style={{height: "60vw", width: "80vw"}}/>
                        </Col>


                    </Row>

                    <Row xs="1" sm="2" style={{
                        width: "100%",
                        paddingRight: "0px",
                        margin: "0px",
                        paddingBottom: "3vw",
                        paddingTop: "3vw",
                        backgroundColor: "#5F0E78",
                        gridAutoFlow: "row"
                    }}>
                        <Col style={{textAlign: "center", margin: "auto"}}>
                            <img src={QRcode} style={{width: "75vw"}}/>
                        </Col>

                        <Col style={{textAlign: "center"}}>

                            <h1 style={{fontSize: "5vw", marginTop: "5vw", color: "#F8F8F8", fontWeight: "bold"}}>
                                All Your Health Records Available in One Place!
                            </h1>

                            <h2 style={{fontSize: "4vw",  color: "#F8F8F8"}} id="h1Subtext">
                                Have you ever needed to get some information about your medical condition and didn’t
                                know where to even look to find it? What’s your blood type? What earlier conditions have
                                you had that may affect your current health? If you are one of the many that need to
                                have access to your medical records, we have the perfect solution for you.
                            </h2>
                            <h2 style={{fontSize: "4vw",  color: "#F8F8F8"}} id="h1Subtext">
                                Introducing Medical Buddy Solutions. You can now record all of your medical information
                                on a single app, then access it anytime and anywhere with a simple QR code. With this QR
                                code you will have your information available to your trusted health partners.
                            </h2>

                        </Col>
                    </Row>
                </>
                }

                {window.innerWidth >= 760 &&
                <>
                    <Row style={{backgroundColor: "#F8F8F8", marginLeft: "0px"}}>

                        {/*<Col>

                        <div id="healthBox"
                             style={{width: "39vw", float: "left", paddingLeft: "2vw", marginTop: "20vw"}}>
                            <h1 style={{fontSize: "3vw", fontWeight: "bold"}}>Health at your fingertips</h1>
                            <h2 style={{fontSize: "2vw"}} id="h1Subtext">Your health is your wealth! Be connected to
                                your heath information with a simple app! </h2>
                        </div>

                    </Col>*/}
                        <Col>
                            <img src={cover} style={{
                                marginLeft: "0*27vw",
                                height: "43vw",
                                paddingRight: "0px",
                                paddingTop: "3vw"
                            }}/>


                        </Col>

                    </Row>


                    <Row xs="1" sm="2" style={{
                        width: "100%",
                        paddingRight: "0px",
                        margin: "0px",
                        paddingTop: "3vw",
                        backgroundColor: "#5F0E78"
                    }}>
                        <Col style={{paddingLeft: "3vw"}}>

                            <h1 style={{fontSize: "2vw", color: "white", fontWeight: "bold"}}>
                                Innovate your relationship with your health data</h1>
                            <br/>
                            <p style={{fontSize: "2vw", color: "white"}}>
                                The mission at Medical Buddy Solutions is to help people become more interactive with
                                their health information. By building your health journal you will have the ability to
                                advocate for you and your families best health. With a background in private homecare it
                                is evident that a better system was needed. We are striving to promote optimum wellness
                                through an interactive organizational personal health journal. Make Medical Buddy Solutions your "Medical Digital Asset"!
                            </p>
                        </Col>
                        <Col style={{margin: "auto", textAlign: "center"}}>
                            <img style={{width: "45vw"}} src={healthCarePhoto}/>
                        </Col>


                    </Row>

                    <Row style={{width: "100%", margin: "0px", paddingBottom: "2vw", backgroundColor: "#5F0E78"}}>

                        <Col style={{textAlign: "center", paddingTop: "3vw"}}>
                            <button
                                style={{fontSize: "2vw", width: "30vw", backgroundColor: "#f8f8f8", color: "#5F0E78"}}>
                                Download The App Now!
                            </button>
                        </Col>

                    </Row>

                    <Row xs="1" sm="2"
                         style={{margin: "0px", paddingTop: "6vw", paddingBottom: "7vw", backgroundColor: "#f8f8f8"}}>
                        <Col style={{paddingLeft: "3vw"}}>

                            <h1 style={{fontSize: "2.25vw", color: "#5F0E78", fontWeight: "bold"}}>
                                Health Data On the Fly!
                            </h1>
                            <br/>
                            <br/>
                            <p style={{fontSize: "2vw", color: "#5F0E78"}}>
                                Medical Buddy Solutions realizes the value of having the capability to
                                collaborate with medial professionals when times call for important medical details.
                                Being able to share with trusted partners is a recipe for your health success.
                            </p>
                            {/*
                             <div style={{margin: "auto",paddingLeft:"1vw",textAlign:"center", width: "56vw"}}>
                            <h1 style={{fontSize: "3vw", color: "#5F0E78"}}>
                                Health Data On the Fly!
                            </h1>


                                <h2 id="h1Subtext" style={{
                                fontSize: "2vw",
                                lineHeight: "3vw",
                                marginTop: "2.8333vw",
                                color: "#5F0E78"
                            }}>
                                All of us at Medical Buddy Solutions realize the value of having the capability to
                                collaborate with medial professionals when times call for important medical details, as
                                well as being able to share with trusted partners for the best possible medical
                                outcomes. having your digital data at your fingertips for your knowledge and success.
                                </h2>

                                <h2 id="h1Subtext" style={{
                                fontSize: "2vw",
                                marginTop: "2.8333vw",
                                lineHeight: "3vw",
                                color: "#5F0E78"
                            }}>
                                With our app and blockchain technology you will be able to keep track of your
                                appointments, manage your conditions, and edit what is seen when your QR code is
                                scanned.
                                </h2>
                                </div>*/}

                        </Col>
                        <Col style={{textAlign: "center", margin: "auto", paddingRight: "10px", paddingLeft: "10px"}}>
                            <Player style={{width: "25vw", paddingRight: "0px"}} src={video} poster={videoPreview}/>
                        </Col>
                    </Row>


                    <Row xs="1" sm="2" style={{
                        width: "100%",
                        margin: "0px",
                        paddingRight: "0px",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "centre", backgroundColor: "#5F0E78",
                        paddingTop: "3vw", paddingBottom: "1vw"
                    }}>
                        <Col style={{paddingRight: "1vw", paddingLeft: "1vw"}}>
                            <Row style={{marginRight: "0px"}}>
                                <div style={{textAlign: "center", alignItems: "center", width: "100%"}}>
                                    <h1 style={{fontSize: "3vw", color: "white"}}>
                                        There when you need it
                                    </h1>
                                </div>
                            </Row>
                            <Row style={{marginRight: "0px"}}>
                                <div style={{
                                    textAlign: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    paddingTop: "3vw"
                                }}>
                                    <img src={paramedicPhoto} style={{width: "25vw"}}/>
                                </div>
                            </Row>
                            <br/>

                            <Row style={{marginRight: "0px"}}>
                                <h2 id="h1Subtext"
                                    style={{fontSize: "2vw", lineHeight: "3vw", color: "white", padding: "4vw"}}>
                                    QR code technology allows for emergency responders to get the critical information
                                    that they need. By scanning the QR code our health conditions, medications,
                                    allergies
                                    and much more will be made available to the responder.
                                </h2></Row>
                        </Col>


                        <Col style={{paddingRight: "1vw", paddingLeft: "1vw"}}>
                            <Row style={{marginRight: "0px"}}>
                                <div style={{
                                    textAlign: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    fontWeight: "bold"
                                }}>
                                    <br/>
                                    <br/>
                                    <h1 style={{fontSize: "3vw", color: "white"}}>
                                        Easy to Use
                                    </h1>
                                </div>

                                <div style={{
                                    textAlign: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    paddingTop: "3vw"
                                }}>
                                    <img src={techPhoto} style={{width: "25vw", height:"14vw"}}/>
                                </div>
                            </Row>
                            <br/>
                            <Row style={{marginRight: "0px"}}>
                                <h2 id="h1Subtext"
                                    style={{fontSize: "2vw", lineHeight: "3vw", color: "white", padding: "4vw"}}>
                                    Our intuitive app makes it easy to update your responder page and medical journal.
                                    With these two tools, you can manage and view your medical history with the click of
                                    a button. You are in control,
                                    optimize your health by tracking your data! </h2></Row>

                        </Col>

                    </Row>


                    {
                        /*
                        <Row xs="1" sm="2" style={{
                            backgroundColor: "white",
                            paddingTop: "5vw",
                            paddingBottom: "5vw",
                            width: "100%",
                            margin: "0px"
                        }}>

                            <Col style={{textAlign: "center"}}>
                                <img src={lockPhoto} style={{width: "25vw", height: "25vw", margin: "auto"}}/>
                            </Col>
                            <Col>
                                <h1 style={{fontSize: "2.25vw", color: "#5F0E78", fontWeight: "bold"}}>
                                    Your Records are Safe
                                </h1>
                                <p id="h1Subtext" style={{fontSize: "2vw", color: "#5F0E78"}}>
                                    Ei ullum iudico sit. Ut graecis delicata sed, ad vis noster assueverit. An vim clita
                                    sanctus, eam munere percipit mediocritatem ne, an illud iusto mnesarchum pri. Est
                                    tacimates
                                    recusabo et, mutat delenit eu mei, nonumy suscipit rationibus at qui. In usu enim ferri
                                    graecis, nemore scripta in mei.
                                </p>
                            </Col>
                        </Row>
                        */}

                    <Row xs="1" sm="2" style={{
                        width: "100%",
                        paddingRight: "0px",
                        margin: "0px",
                        paddingBottom: "3vw",
                        paddingTop: "3vw",
                        backgroundColor: "#F8F8F8",
                        gridAutoFlow: "row"
                    }}>
                        <Col style={{paddingLeft: "3vw"}}>

                            <h1 style={{fontSize: "2vw", marginTop: "5vw", color: "#5F0E78", fontWeight: "bold"}}>
                                Protect What Is Most Valuable
                            </h1>
                            <br/>
                            <h2 style={{fontSize: "2vw", lineHeight: "3vw", color: "#5F0E78"}} id="h1Subtext">
                                Many people neglect their health in their busy lives. With our app, we make it easy to
                                track your appointments and record details regarding your health. Your health is your
                                wealth, protect the most valuable thing you own with Medical Buddy Solutions.
                            </h2>
                            <br/>


                        </Col>

                        <Col style={{textAlign: "center", margin: "auto"}}>
                            <img src={healthWealth} style={{height: "30vw", width: "40vw"}}/>
                        </Col>


                    </Row>

                    <Row xs="1" sm="2" style={{
                        width: "100%",
                        paddingRight: "0px",
                        margin: "0px",
                        paddingBottom: "3vw",
                        paddingTop: "3vw",
                        backgroundColor: "#5F0E78",
                        gridAutoFlow: "row"
                    }}>
                        <Col style={{textAlign: "center", margin: "auto"}}>
                            <img src={QRcode} style={{height: "30vw"}}/>
                        </Col>

                        <Col style={{}}>

                            <h1 style={{fontSize: "2vw", marginTop: "5vw", color: "#F8F8F8", fontWeight: "bold"}}>
                                All Your Health Records Available in One Place!
                            </h1>
                            <br/>
                            <h2 style={{fontSize: "2vw", lineHeight: "3vw", color: "#F8F8F8"}} id="h1Subtext">
                                Have you ever needed to get some information about your medical condition and didn’t
                                know where to even look to find it? What’s your blood type? What earlier conditions have
                                you had that may affect your current health? If you are one of the many that need to
                                have access to your medical records, we have the perfect solution for you.
                            </h2>
                            <br/>
                            <h2 style={{fontSize: "2vw", lineHeight: "3vw", color: "#F8F8F8"}} id="h1Subtext">
                                Introducing Medical Buddy Solutions. You can now record all of your medical information
                                on a single app, then access it anytime and anywhere with a simple QR code. With this QR
                                code you will have your information available to your trusted health partners.
                            </h2>

                        </Col>
                    </Row>
                </>
                }

                <Footer/>

            </div>

        );
    }
}

export default Home;