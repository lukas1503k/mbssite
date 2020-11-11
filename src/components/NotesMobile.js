import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class NotesMobile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 style={{fontSize: "5vw"}}>
                            Notes
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <button  style={{backgroundColor: "#770E49",margin:"auto", color:"white", borderRadius:"0px",padding:"0px",height: "5vw", width:"5vw",fontSize:"3vw", marginRight:"0.4vw" }}>x </button> <input style ={{width: "65vw", height: "25vh"}} placeholder="" disabled = {true}/>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default NotesMobile;