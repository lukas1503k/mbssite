import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class AppointmentsMobile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 style={{fontSize: "5vw"}}>
                            Appointments
                        </h2>
                    </Col>
                    <Col>
                        <button style={{height: "6vw", width:"11vw", padding:"0px", fontSize: "3vw"}}>
                            Add
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>

                            <Col>
                                <p>
                                    <button  style={{backgroundColor: "#770E49",margin:"auto", color:"white", borderRadius:"0px",padding:"0px",height: "5vw", width:"5vw",fontSize:"3vw", marginRight:"0.4vw" }}>
                                        x
                                    </button>

                                    September 21, 2020
                                </p>
                            </Col>
                        </Row>
                        <ul style={{listStyleType:"none"}}>

                            <li>
                                <p style={{marginBottom:"0px"}}>Time: <input style={{width:"60vw", marginBottom:"1vw"}} placeholder="11:15 am" disabled = {true}/></p>
                            </li>

                            <li>
                                <div>
                                    <a>
                                        Location:
                                        <input style={{width:"60vw", marginBottom:"1vw"}} placeholder="Dr. Smith's office" disabled = {true}/>
                                    </a>

                                </div>
                            </li>
                            <li>
                                <div>
                                    <a>
                                        Purpose:
                                        <input style={{width:"60vw", marginBottom:"1vw"}} placeholder="Discuss my diet" disabled = {true}/>
                                    </a>

                                </div>
                            </li>
                            <li>
                                <div>
                                    <a>
                                        Post Appointment Notes:
                                        <input style={{width:"60vw", marginBottom:"1vw"}} placeholder="Got referred to a specialist" disabled = {true}/>
                                    </a>

                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AppointmentsMobile;