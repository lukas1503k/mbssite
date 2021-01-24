import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';
import Heading from "./Heading";
import Footer from "./Footer";


class Contact extends Component {
    render() {
        return (
            <Container id = "siteContainer" style={{font: "Roboto"}}>
                    <Heading/>

                {window.innerWidth >= 760 && <>
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
                    <button style={{marginLeft: "46vw",fontSize:"2vw",marginTop:"2vw",width:"10vw",fontColor:"#FFFFFFFFF"}}>
                    Submit
                    </button>
                    <br/>
                    <br/>
                    <br/></>}
                {window.innerWidth < 760 && <>
                <Row style ={{paddingLeft:"2.5vw", marginTop: "2vw", marginLeft:"0px"}}>
                <h1 style = {{fontSize:"5vw", fontWeight:"bold"}}>
                    Contact Us
                </h1>
                </Row>
                    <Row style ={{paddingLeft:"5vw", marginTop: "2vw", marginLeft:"0px"}}>

                    <h2 style ={{fontSize:"5vw", color: "rgb(95, 14, 120)"}}> Email:  <input/></h2>
                    </Row>
                    <Row style ={{paddingLeft:"5vw", marginTop: "2vw", marginLeft:"0px"}}>

                    <h2 style ={{fontSize:"5vw", color: "rgb(95, 14, 120)"}}> Question/Concern:  </h2>
                    </Row>
                    <Row style ={{paddingLeft:"5vw", marginLeft:"0px"}}>
                    <input style={{height: "20vw", width:"75vw"}}/>
                    </Row>
                    <button style = {{marginLeft:"5vw",fontSize: "5vw", width: "30vw", height: "10vw", backgroundColor: "#5F0E78", color: "#f8f8f8", marginTop:"5vw"}}>
                    Submit
                    </button>
                    <br/>
                    <br/>
                    <br/></>}

                    <Footer/>
            </Container>
            );
    }
}

export default Contact;