import React, {Component} from 'react';

import {Row,Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "./Heading";


class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#5F0E78", width:"99vw", marginTop:"10vw"}}>

                <Row style={{paddingTop:"3.333vw"}}>
                    <Col>

                    </Col>
                    <Col>
                        <h3>
                            Contact Information
                        </h3>
                    </Col>
                    <Col>
                        <h3>Links:</h3>
                        <ul>
                            <li>
                                About Us
                            </li>
                            <li>
                                Purchase Info
                            </li>
                            <li>
                                Contact Us
                            </li>
                        </ul>

                    </Col>

                </Row>

                <Row style ={{backgroundColor: "#282A2B", color: "#8C8989", padding:"1.4vw", paddingRight:"0vw", marginRight:"0vw"}}>
                    <Col>
                        <a style = {{fontSize:"1vw"}}>
                        ©Copyright 2019 - 2020 | Medical Buddy Solutions | All Rights Reserved
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;