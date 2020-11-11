    import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class DiagnosisMobile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 style={{fontSize: "5vw"}}>
                            Diagnosis
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Form: <input placeholder="Type 1" disabled = {true}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Condition Diagnosis Date:
                        <input placeholder="September 12, 2019" disabled = {true}/>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DiagnosisMobile;