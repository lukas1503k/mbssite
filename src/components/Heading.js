import React, {Component} from 'react';
import logo from "../images/Frame 5.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'reactstrap';
import hamburger from "../images/Hamburger_icon.svg";

class Heading extends Component {
    state = {
        selected:false
    }

    changeState = ()=>{
        let newState = this.state;
        newState.selected = !newState.selected;
        this.setState(newState)
    }
    render() {


       let liStyle ={display: "inline", paddingLeft: "1vw", color: "white", font:"Roboto", style:"normal", weight:"400", fontSize:"1.5vw"}
        let smallScreen = {display: "inline", paddingLeft: "3vw", color: "white", font:"Roboto", style:"normal", weight:"400", fontSize:"3.5vw"}


        return (
            <>
            {window.innerWidth >= 760 && <>
            <div style={{backgroundColor: "#5F0E78", width: "100%", padding: "0px", marginRight: "0px"}}>
                <Row style={{marginRight: "0px"}}>
                    <Col>
                        <img src={logo} style={{height: "15vw"}}/>
                    </Col>
                    <Col style={{
                        display: "flex",
                        alignItems: "center",
                        paddingRight: "0px"
                    }}>
                        <ul style={{paddingLeft: "0px"}}>
                            <li style={liStyle}>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li style={liStyle}>
                                <a href="/App">
                                    Our App
                                </a>
                            </li>
                            <li style={liStyle}>
                                <a href="/Mission">
                                    Our Mission
                                </a>
                            </li>
                            <li style={liStyle}>
                                <a href="/FAQs">
                                    FAQs
                                </a>
                            </li>
                            <li style={liStyle}>
                                <a href="/ContactUs">
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
        </>
    }

        {window.innerWidth < 760 && <>
            <div style={{backgroundColor: "#5F0E78", width: "100%", padding: "0px", marginRight: "0px"}}>
                <Row style={{marginRight: "0px"}}>
                    <Col>
                        <img src={logo} style={{height: "16vw"}}/>
                    </Col>
                    <Col>
                        <button style={{border: "none", boxShadow:"none", height:"32px", width:"32px", float: "right", paddingTop:"2vw"}} onClick={this.changeState}><img src={hamburger}/></button>
                    </Col>
                </Row>

                {this.state.selected === true &&
                <Row style={{paddingTop: "3.333vw"}}>
                    <Col style={{
                        textAlign: "center",
                        paddingRight: "0px"
                    }}>
                        <ul style={{paddingLeft: "0px"}}>
                            <li style={smallScreen}>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li style={smallScreen}>
                                <a href="/App">
                                    Our App
                                </a>
                            </li>
                            <li style={smallScreen}>
                                <a href="/Mission">
                                    Our Mission
                                </a>
                            </li>
                            <li style={smallScreen}>
                                <a href="/FAQs">
                                    FAQs
                                </a>
                            </li>
                            <li style={smallScreen}>
                                <a href="/ContactUs">
                                    Contact Us
                                </a>
                            </li>
                            <li style={smallScreen}>
                                Sign In
                            </li>

                        </ul>
                    </Col>
                </Row>}
            </div>
        </>
        }
        </>
        );
    }
}

export default Heading;