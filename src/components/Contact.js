import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';
import Heading from "./Heading";
import Footer from "./Footer";


class Contact extends Component {
    render() {
        return (
            <Container id = "siteContainer" style={{font: "Roboto"}}>
                    <Heading/>
                    <Row style ={{paddingLeft:"2.5vw", marginTop: "2vw"}}>
                        <h1>
                        Contact Us
                        </h1>
                    </Row>
                    <Row style ={{paddingLeft:"5vw", marginTop: "2vw"}}>

                       <h2 style ={{fontSize:"2vw", color: "rgb(95, 14, 120)"}}> Email:  <input/></h2>
                    </Row>
                <Row style ={{paddingLeft:"5vw", marginTop: "2vw"}}>

                    <h2 style ={{fontSize:"2vw", color: "rgb(95, 14, 120)"}}> Question/Concern:  </h2>
                </Row>
                <Row style ={{paddingLeft:"5vw"}}>
                    <input style={{height: "10vw", width:"50vw"}}/>
                </Row>
                <button style={{marginLeft: "46vw",fontSize:"2vw",marginTop:"2vw",width:"10vw",fontColor:"#FFFFFFFFFf"}}>
                    Submit
                </button>
                    <Footer/>
            </Container>
            );
    }
}

export default Contact;