import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';

class Medications extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 style={{fontSize: "1.5vw"}}>
                            Medications
                        </h2>
                    </Col>
                    <Col>
                        <button style={{height: "1.5vw", width:"5.25vw", padding:"0px"}}>
                            Add
                        </button>
                    </Col>
                </Row>
                <Row>
                   <Col>
                       <Row>
                           
                           <Col>
                       <p style={{fontWeight:"bold"}}>
                           <button style={{backgroundColor: "#770E49", color:"white", borderRadius:"0px", padding:"0px",height: "1.5vw", width:"1.5vw", marginRight:"0.4vw" }}>
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
                               <input placeholder="None" disabled = {true}/>
                           </li>
                           <li style={{paddingTop:"0.5vw" }}>
                               <div>
                                   <a>
                                       Dosage:
                                   </a>
                                   <input style={{width:"9vw", marginLeft: "0.4vw"}} placeholder="Check email from Dr. Smith" disabled = {true}/>
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