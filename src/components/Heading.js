import React, {Component} from 'react';
import logo from "../images/Heading.PNG"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'reactstrap';

class Heading extends Component {

    render() {
       let liStyle ={display: "inline", paddingLeft: "1.333vw", color: "white", font:"Roboto", style:"normal", weight:"400"}
        return (
            <div style = {{backgroundColor:"#5F0E78", width:"99vw", padding:"0px", marginRight:"0px"}}>
                <Row style ={{marginRight: "0px"}}>
                    <Col>
                        <img src={logo} style = {{height:"10vw"}}/>
                    </Col>
                    <Col style={{display:"flex",
                        alignItems:"center",
                        paddingRight:"0px"}}>
                        <ul >
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
            </div>
        );
    }
}

export default Heading;