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

class OurApp extends Component {
    render() {
        return (
            <Container id = "siteContainer" >

                <Heading/>
               <Row style={{width:"99vw", paddingTop:"1vw"}}>
                   <Col style={{textAlign:"center"}}>
                       <h2 style={{fontSize:"4vw", color:"#5F0E78"}}> The App</h2>
                   </Col>
            </Row>
                <Row style={{width:"99vw"}}>
                    <Col style = {{width:"47.5833333vw"}}>
                         <h1 style={{paddingLeft: "5.41666vw" , fontSize: "3vw"}}>
                             My Emergency Page
                         </h1>
                        <p style={{paddingLeft: "5.41666vw", fontSize: "2vw", color:"#26770E"}}>
                            Your emergency page serves as a quick view into your medical history. In case of an emergency, first responders can scan your QR code and get the information they need to help you.
                        </p>
                    </Col>
                    <Col style ={{width: "28.83333333vw", height: "44.8333vw"}}>
                        <img style = {{float:"right", paddingRight:"7.75vw", width: "28.83333333vw", height: "44.8333vw"}}src ={AppScreen}/>

                    </Col>
                </Row>
                {window.innerWidth >= 760 &&
                <Row style={{width:"99vw", paddingTop:"5vw"}}>
                    <Col style = {{width:"51.833333vw"}}>
                        <h1 style={{paddingLeft: "5.41666vw", fontSize: "3vw", width: "51.8333vw"}}>
                            My Contact Page
                        </h1>
                        <p style={{paddingLeft: "5.41666vw" , fontSize: "2vw", color:"#26770E"}}>
                            Your illness page allows you to keep track of your illnessess, medications and your appointments. With out app you can take notes about what happens at your appointment, so you can always remember exactly what your health care provider tells you.                        </p>
                    </Col>
                    <Col style ={{width: "28.83333333vw", height: "44.8333vw"}}>
                        <MyIllnessPage />
                        {/*<img style = {{float:"right", paddingRight:"7.75vw", width: "28.83333333vw", height: "44.8333vw"}}src ={AppImage}/>*/}
                    </Col>
                </Row>
                }
                {window.innerWidth <= 760 &&
                    <>
                    <Row style={{width:"99vw", paddingTop:"5vw"}}>
                        <h1 style={{paddingLeft: "10vw", fontSize: "3vw", width: "51.8333vw"}}>
                            My Contact Page
                        </h1>
                        <p style={{paddingLeft: "10vw" , fontSize: "2vw", color:"#26770E"}}>
                            Your illness page allows you to keep track of your illnessess, medications and your appointments. With out app you can take notes about what happens at your appointment, so you can always remember exactly what your health care provider tells you.                        </p>
                    </Row>
                    <Row style={{width:"98vw", paddingTop:"5vw"}}>
                        <h1 style={{paddingLeft: "10vw" , fontSize: "3vw"}}> Try It Out Here</h1>
                        <MyIllnessPageMobile style={{paddingLeft:"5vw"}} />
                        {/*<img style = {{float:"right", paddingRight:"7.75vw", width: "28.83333333vw", height: "44.8333vw"}}src ={AppImage}/>*/}
                    </Row>
                    </>
                }

                <Row style={{width:"99vw", paddingTop:"5vw"}}>
                    <Col style = {{width:"51.833333vw"}}>
                        <h1 style={{paddingLeft: "5.41666vw", fontSize: "3vw", width: "51.8333vw"}}>
                            Security
                        </h1>
                        <p style={{paddingLeft: "5.41666vw" , fontSize: "2vw", color:"#26770E"}}>
                            All your data on the app is yours! Medical Buddy Solutions is unable to see any of your private data. Thanks to the power of blockchain technology, your data is as safe as your private key.
                        </p>
                    </Col>
                    <Col style ={{width: "28.83333333vw", height: "44.8333vw"}}>
                        <img style = {{float:"right", paddingRight:"7.75vw", width: "28.83333333vw", height: "28.83333333vw"}}src ={Lock}/>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default OurApp;