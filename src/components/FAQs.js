import React, {Component} from 'react';

import {Container, Row, Col } from 'reactstrap';
import Heading from "./Heading";
import Footer from "./Footer";

class FaQs extends Component {
    render() {
        return (
            <Container id = "siteContainer">
                <Heading/>
                <Row style ={{width:"99vw"}}>
                    <Col style={{paddingTop: "2vw"}}>

                        <h1 style={{paddingLeft:"8vw", fontSize: "4vw"}}>
                            FAQs
                        </h1>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <h2 style={{paddingLeft:"8vw" , fontSize: "3vw", color: "#5F0E78"}}>
                            Is my data safe?
                        </h2>
                        <br/>
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#26770E"}}>
                            Yes, your data is secured by blockchain.......
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

export default FaQs;