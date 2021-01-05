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
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#8514A7"}}>
                            Yes, your data is secured through your private key. As long as that is kept private, so is your data.
                        </p>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 style={{paddingLeft:"8vw" , fontSize: "3vw", color: "#5F0E78"}}>
                            Is there a monthly fee or subscription?
                        </h2>
                        <br/>
                        <p style={{paddingLeft:"8vw" , fontSize: "2vw", color: "#8514A7"}}>
                            For adult accounts, you make your one time payment of $30 you will have access to the platform for life.
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