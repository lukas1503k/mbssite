import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';
import heading from "../images/Heading.PNG";
import "../stylesheets/IllnessPage.css"
import {Dropdown} from "react-bootstrap";
import DropdownItem from "reactstrap/es/DropdownItem";
import DropdownMenu from "reactstrap/es/DropdownMenu";
import DropdownToggle from "reactstrap/es/DropdownToggle";
import Medications from "./Medications";
import Appointments from "./Appointments";
import Doctors from "./Doctors";
import Reminders from "./Reminders";
import Diagnosis from "./Diagnosis";
import Notes from "./Notes";
import Logo from "../images/Rectangle 1.png"
class MyIllnessPage extends Component {
    //8.417836%

    state = {
        selected: 0
    }
    setSelected = (selected) =>{
        this.setState({selected: selected})

    }


    getComponent(){
        switch(this.state.selected) {
            case 0:
                return <Medications/>
            case 1:
                return <Appointments/>
            case 2:
                return <Doctors/>
            case 3:
                return <Reminders/>
            case 4:
                return <Diagnosis/>
            case 5:
                return <Notes/>
        }
    }

    render() {


        let rowStyle = {textAlign:"center", marginTop: "1%",height:"8.8888888%"};
        return (
            <Container style = {{width: "100%", height: "100%"}}>
                <div id="heading" style={{backgroundColor:"#5F0E78", height:"8.4%", position:"static"}}>
                    {/*<img style={{height: "100%"}} src={heading}/>*/}
                    <img style = {{height:"100%", marginLeft: "30%"}}src={Logo} />
                    <a style ={{marginLeft:"1em"}}>
                        Medical Buddy Solutions
                    </a>
                </div>


                   <Row style = {rowStyle}>
                        <Col>
                            <h2 id={"selectHeading"}>Select Heading
                            <Dropdown style ={{display:"inline-block", marginLeft: "1em"}}>
                                <Dropdown.Toggle variant="success" >
                                    __________________
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onSelect={() => {
                                        console.log("Diabetes")
                                    }}>Diabetes</Dropdown.Item>
                                    <Dropdown.Item onSelect={() => {
                                        console.log("+")
                                    }}>Add Condition +</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </h2>

                        </Col>
                    </Row>
                <Row style = {rowStyle}>

                    <Col>
                        <button id = "unselectedButton"> Medications </button>
                    </Col>
                    <Col>
                        <button id = "unselectedButton"> Appointments </button>
                    </Col>
                </Row>

                <Row style = {rowStyle}>
                    <Col>
                        <button id = "unselectedButton">Doctor Info</button>
                    </Col>
                    <Col>
                        <button id = "unselectedButton"> Reminders </button>
                    </Col>
                </Row>
                <Row style = {rowStyle}>
                    <Col>
                        <button id = "unselectedButton">
                            Diagnosis
                        </button>
                    </Col>
                    <Col>
                        <button id = "unselectedButton">
                            Notes
                        </button>
                    </Col>
                </Row>

                <Medications></Medications>
                <Appointments/>
                <Doctors/>
                <Reminders/>
                <Diagnosis/>
                <Notes/>

            </Container>
        );
    }
}

export default MyIllnessPage;