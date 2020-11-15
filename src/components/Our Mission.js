import React, {Component} from 'react';

import {Container, Row, Col } from 'reactstrap';
import Heading from "./Heading";
import Footer from "./Footer";
import healthCarePhoto from "../images/istockphoto-1182616138-2048x2048.jpg";
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
                <Row style ={{width:"100%", paddingRight:"0px", margin:"0px",paddingTop:"3vw", backgroundColor:"#5F0E78"}}>
                    <Col style={{paddingLeft:"3vw",}}>

                        <h1 style={{fontSize: "2.25vw", color:"white", fontWeight:"bold"}}>
                            Innovate your relationship with your health data</h1>
                        <p style={{ fontSize: "2vw", color: "white"}}>
                            Our mission is to help people become more interactive with their health information. By building your health journal you will have the ability to advocate for you and your families best health. With a background in private homecare it was evident that the need for a system was needed. We are striving to promote optimum wellness through an interactive organizational personal health journal. Our mission at Medical Buddy Solutions is to help others live their best life.
                        </p>
                    </Col>
                    <Col style={{margin:"auto"}}>
                        <img style={{width:"50vw", textAlign:"center"}} src ={healthCarePhoto}/>
                    </Col>


                </Row>

                 <br/>
                 <br/>
            </Container>
        );
    }
}

export default OurMission;