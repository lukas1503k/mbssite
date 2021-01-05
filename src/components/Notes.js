import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Notes extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 style={{fontSize:"1.5vw"}}>
                            Notes
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <button style={{backgroundColor: "#770E49", display: "inline-flex", alignItems: "center", color:"white", borderRadius:"0px",height: "1.5vw", width:"1.5vw", marginRight:"0.4vw" }}>x </button> <input style ={{width: "16vw", height: "8vw"}} placeholder="" disabled = {true}/>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Notes;