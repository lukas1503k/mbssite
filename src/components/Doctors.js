import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Doctors extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Doctors:
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

                                    Dr.
                                    <input/>
                                </p>
                            </Col>
                        </Row>
                        <ul>

                            <li>
                                <a>Phone Number:      <input/>
                                </a>
                            </li>
                            <li>
                                <div>
                                    <a>
                                        Location: <input/>
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

export default Doctors;