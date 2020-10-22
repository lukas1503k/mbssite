import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';

class Medications extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Medications:
                        </h2>
                    </Col>
                    <Col>
                        <button>
                            Add
                        </button>
                    </Col>
                </Row>
                <Row>
                   <Col>
                       <Row>
                           
                           <Col>
                       <p>
                           <button style={{backgroundColor: "#770E49", color:"white", borderRadius:"0px", }}>
                               x
                           </button>

                           Insulin
                       </p>
                           </Col>
                       </Row>
                       <ul>

                           <li>
                               Reaction/Side-effects:
                           </li>
                           <li>
                               <input/>
                           </li>
                           <li>
                               <div>
                                   <a>
                                       Dosage:
                                   </a>
                                   <input/>
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