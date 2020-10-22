import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Diagnosis extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Diagnosis
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Form: Type 1
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Condition Start Date: September 12, 2019
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Diagnosis;