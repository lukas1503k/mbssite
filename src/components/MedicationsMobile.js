import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';

class Medications extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 style={{fontSize: "5vw"}}>
                            Medications
                        </h2>
                    </Col>
                    <Col>
                        <button style={{height: "6vw", width:"11vw", padding:"0px", fontSize: "3vw"}}>
                            Add
                        </button>
                    </Col>
                </Row>
                <Row>
                   <Col>
                       <Row>
                           
                           <Col>
                       <p style={{fontWeight:"bold"}}>
                           <button style={{backgroundColor: "#770E49",margin:"auto", color:"white", borderRadius:"0px",padding:"0px",height: "5vw", width:"5vw",fontSize:"3vw", marginRight:"0.4vw" }}>
                               x
                           </button>

                           Insulin
                       </p>
                           </Col>
                       </Row>
                       <ul style={{listStyleType:"none"}}>

                           <li>
                               Reaction/Side-effects:
                           </li>
                           <li>
                               <input style={{width:"60vw"}} placeholder="None" disabled = {true}/>
                           </li>
                           <li style={{paddingTop:"0.5vw" }}>
                               <div>
                                   <a>
                                       Dosage:
                                   </a>
                                   <input style={{width:"60vw", marginLeft: "0.4vw"}} placeholder="Check email from Dr. Smith" disabled = {true}/>
                               </div>
                           </li>
                       </ul>
                   </Col>
                </Row>
            </Container>
        );
    }
}

export default Medications;