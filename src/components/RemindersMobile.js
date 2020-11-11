import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";


class RemindersMobile extends Component {

    daybutton = {padding:"0px", width: "8vw", height:"8vw", marginLeft:"2vw", fontSize: "5vw"}

    selectedButton = {padding:"0px", width: "8vw", height:"8vw", marginLeft:"2vw", fontSize: "5vw", backgroundColor: "white", color: "#5F0E78", borderColor:"#5F0E78"}

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2  style={{fontSize: "5vw"}}>
                            Reminders
                        </h2>
                        <p style={{fontSize:"4vw", paddingLeft:"2vw"}}>
                                September 21, 2020
                        </p>
                    </Col>

                    </Row>
                <Row>
                    <Col>
                        <h2 style={{fontSize: "5vw"}}>Medications</h2>
                         <p style={{fontWeight:"bold"}}> Insulin</p>
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
                        <button style={this.selectedButton}>
                            S
                        </button>
                        <button style={this.daybutton}>
                            M
                        </button>
                        <button  style={this.selectedButton}>
                            T
                        </button>
                        <button style={this.daybutton}>
                            W
                        </button>
                        <button style={this.selectedButton}>
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

export default RemindersMobile;