import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Doctors extends Component {
    state = {
        names:[],
        number:[],
        location:[],
        doctorCount:0
    }
    componentDidMount() {
        this.addNewDoctor()
        console.log(this.state)
    }

    addNewDoctor = () =>{

        let newstate = this.state;
        newstate["names"].push("Smith");
        newstate["number"].push(9999999999);
        newstate["location"].push("123 This Way");
        newstate["doctorCount"] = this.state.doctorCount+1;

    }

    removeDoctor = (idx)=>{
        let newstate = this.state;
        newstate["names"].splice(idx);
        newstate["number"].splice(idx);
        newstate["location"].splice(idx);
        newstate["doctorCount"] = this.state.doctorCount-1;



    }
    render() {
        console.log(this.state);
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 style={{fontSize:"1.5vw"}}>
                            Doctors
                        </h2>
                    </Col>
                    <Col>
                        <button onClick={this.addNewDoctor} style={{height: "1.75vw", width:"5.25vw", padding:"0px"}}>
                            Add
                        </button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Row>

                            <Col>
                                <p style={{fontWeight: "bold"}}>
                                    <button style={{backgroundColor: "#770E49", display: "inline-flex", alignItems: "center", color:"white", borderRadius:"0px", height: "1.5vw", width:"1.5vw", marginRight:"0.4vw" }}>
                                        x
                                    </button>

                                    Dr. Smith
                                </p>
                            </Col>
                        </Row>
                        <ul style={{listStyleType:"none"}}>

                            <li>
                                <p>Phone Number:      <input placeholder="(123) 456-7890" disabled = {true}/>
                                </p>
                            </li>
                            <li>
                                <div>
                                    <p>
                                        Office Address: <input placeholder="404 This Way/ Near the mall" disabled = {true}/>
                                    </p>
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