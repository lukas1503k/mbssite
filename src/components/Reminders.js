import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";


class Reminders extends Component {

    daybutton = {width: "1.8vw", height:"1.8vw", marginLeft:".5vw"}

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2  style={{fontSize:"1.5vw"}}>
                            Reminders
                        </h2>
                        <p style={{fontSize:"1vw", paddingLeft:"1vw"}}>
                                September 21, 2020
                        </p>
                    </Col>

                    </Row>
                <Row>
                    <Col>
                        <h2 style={{fontSize:"1.5vw"}}>Medications</h2>
                         <p> Insulin</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Time of Day: <input placeholder="8am" disabled = {true}/></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Days of the Week</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button style={this.daybutton}>
                            S
                        </button>
                        <button style={this.daybutton}>
                            M
                        </button>
                        <button  style={this.daybutton}>
                            T
                        </button>
                        <button style={this.daybutton}>
                            W
                        </button>
                        <button style={this.daybutton}>
                            T
                        </button>
                        <button style={this.daybutton}>
                            F
                        </button>
                        <button style={this.daybutton}>
                            S
                        </button>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Reminders;