import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";


class Reminders extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Appointments
                        </h2>
                        <p>
                                September 21, 2020 []
                        </p>
                    </Col>

                    </Row>
                <Row>
                    <Col>
                        <h2>Medications</h2>
                         <p> Insulin</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Time of Day: 7pm</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Days of the Week</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        S M T W T F S
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Reminders;