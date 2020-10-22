import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Appointments extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Appointments:
                        </h2>
                    </Col>
                    <Col>
                        <button>
                            Add
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>

                            <Col>
                                <p>
                                    <button style={{backgroundColor: "#770E49", color:"white", borderRadius:"0px", }}>
                                        x
                                    </button>

                                    September 21, 2020
                                </p>
                            </Col>
                        </Row>
                        <ul>

                            <li>
                                <p>Time: <input/></p>
                            </li>

                            <li>
                                <div>
                                    <a>
                                        Location:
                                        <input/>
                                    </a>

                                </div>
                            </li>
                            <li>
                                <div>
                                    <a>
                                        Purpose:
                                        <input/>
                                    </a>

                                </div>
                            </li>
                            <li>
                                <div>
                                    <a>
                                        Post Appointment Notes:
                                        <input/>
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

export default Appointments;