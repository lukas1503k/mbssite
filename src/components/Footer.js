import React, {Component} from 'react';

import {Row,Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "./Heading";


class Footer extends Component {
    render() {
        let liStyle ={display: "inline", paddingLeft: "3vw", color: "white", font:"Roboto", style:"normal", weight:"400", fontSize:"1.25vw"}

        return (
            <div style={{backgroundColor:"#5F0E78", width:"99vw"}}>

                <Row style={{paddingTop:"3.333vw"}}>
                    <Col style={{
                        textAlign:"center",
                        paddingRight:"0px"}}>
                        <ul style={{paddingLeft:"0px"}}>
                            <li style={liStyle}>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li style={liStyle}>
                                <a href ="/App">
                                    Our App
                                </a>
                            </li>
                            <li style={liStyle}>
                                <a href ="/Mission">
                                    Our Mission
                                </a>
                            </li>
                            <li style={liStyle}>
                                <a href ="/FAQs">
                                    FAQs
                                </a>
                            </li>
                            <li style={liStyle}>
                                <a href ="/ContactUs">
                                    Contact Us
                                </a>
                            </li>
                            <li style={liStyle}>
                                Sign In
                            </li>

                        </ul>
                    </Col>
                </Row>

                <Row style ={{backgroundColor: "#282A2B", color: "#8C8989", padding:"1.4vw", paddingRight:"0vw", marginRight:"0vw"}}>
                    <Col>
                        <a style = {{fontSize:"1vw"}}>
                        ©Copyright 2019 - 2021 | Medical Buddy Solutions | All Rights Reserved
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;