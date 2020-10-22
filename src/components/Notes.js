import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Notes extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Notes:
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <button>x </button> <input/>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Notes;