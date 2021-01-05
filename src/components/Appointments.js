import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Appointments extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 style={{fontSize:"1.5vw"}}>
                            Appointments
                        </h2>
                    </Col>
                    <Col>
                        <button style={{height: "1.75vw", width:"5.25vw", padding:"0px"}}>
                            Add
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>

                            <Col>
                                <p>
                                    <button style={{backgroundColor: "#770E49", display: "inline-flex", alignItems: "center", color:"white", borderRadius:"0px", height: "1.5vw", width:"1.5vw", marginRight:"0.4vw" }}>
                                        x
                                    </button>

                                    September 21, 2020
                                </p>
                            </Col>
                        </Row>
                        <ul style={{listStyleType:"none"}}>

                            <li>
                                <p>Time: <input placeholder="11:15 am" disabled = {true}/></p>
                            </li>

                            <li>
                                <div>
                                    <a>
                                        Location:
                                        <input placeholder="Dr. Smith's office" disabled = {true}/>
                                    </a>

                                </div>
                            </li>
                            <li>
                                <div>
                                    <a>
                                        Purpose:
                                        <input placeholder="Go over the side effects of my insulin" disabled = {true}/>
                                    </a>

                                </div>
                            </li>
                            <li>
                                <div>
                                    <a>
                                        Post Appointment Notes:
                                        <input placeholder="Doctor told me that my reaction to the medicine was normal, it's not something I should be worried about" disabled = {true}/>
                                    </a>

                                </div>
                            </li>
                            <li>
                                <button style={{height: "1.75vw",  padding:"0px"}}>
                                    Begin Appointment Recording
                                </button>
                            </li>
                            {/*<li>
                                <div>
                                    <a>
                                        Appointment Recording:
                                        <input
                                            placeholder="Doctor told me that my reaction to the medicine was normal, it's not something I should be worried about"
                                            disabled={true}/>
                                    </a>

                                </div>
                            </li>*/}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Appointments;