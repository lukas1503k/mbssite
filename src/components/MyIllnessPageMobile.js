import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';
import heading from "../images/Heading.PNG";
import "../stylesheets/IllnessPage.css"
import {Dropdown} from "react-bootstrap";
import DropdownItem from "reactstrap/es/DropdownItem";
import DropdownMenu from "reactstrap/es/DropdownMenu";
import DropdownToggle from "reactstrap/es/DropdownToggle";
import MedicationsMobile from "./MedicationsMobile";
import Appointments from "./Appointments";
import Doctors from "./Doctors";
import Reminders from "./Reminders";
import Diagnosis from "./Diagnosis";
import Notes from "./Notes";
import Logo from "../images/Rectangle 1.png"
import AppointmentsMobile from "./AppointmentsMobile";
import DoctorsMobile from "./DoctorsMobile";
import RemindersMobile from "./RemindersMobile";
import DiagnosisMobile from "./DiagnosisMobile";
import NotesMobile from "./NotesMobile";
class MyIllnessPage extends Component {
    //8.417836%

    state = {
        selected: 0
    }
    setSelected = (selected) =>{
        this.setState({selected: selected})

    }

    getStyle(idx){
        if(idx == this.state.selected){
            return "selectedButtonMobile"

        }
        return "unselectedButtonMobile"

    }

    getComponent(){
        switch(this.state.selected) {
            case 0:
                return <MedicationsMobile/>
            case 1:
                return <AppointmentsMobile/>
            case 2:
                return <DoctorsMobile/>
            case 3:
                return <RemindersMobile/>
            case 4:
                return <DiagnosisMobile/>
            case 5:
                return <NotesMobile/>
        }
    }

    render() {
        console.log(this.getStyle(1));

        let rowStyle = {textAlign:"center", marginTop: "1vw",height:"8.8888888%",marinBottom:"1vw"};
        return (
            <Container style = {{width: "95vw", height: "90vh", paddingLeft:"0vw", paddingRight:"0px", backgroundColor:"white",color:"black",borderColor:"black", borderStyle:"solid"}}>
                <div id="heading" style={{backgroundColor:"#5F0E78", height:"15vw", position:"static"}}>
                    {/*<img style={{height: "100%"}} src={heading}/>*/}
                    <img style = {{height:"10vw", marginLeft: "15%", marginTop:"2vw" }}src={Logo} />
                    <a style ={{marginLeft:"1em", marginTop:"6vw", fontSize: "5vw", color: "white" }}>
                        Medical Buddy Solutions
                    </a>
                </div>


                   <Row style = {rowStyle}>
                        <Col style={{margin:"auto"}}>
                            <h2 id={"selectHeading"} style={{fontSize:"4vw", margin:"auto"}}>
                                Select Heading

                            </h2>

                        </Col>

                       <Col style = {{margin:"auto"}}>
                           <button style ={{width: "20vw", color: "#5F0E78", backgroundColor: "white", fontSize:"3.5vw", paddingLeft:"0px", marginLeft:"0px"}}>
                               &#9660; Diabetes
                           </button>
                       </Col>
                    </Row>
                <Row style = {rowStyle}>

                    <Col>
                        <button id = {this.getStyle(0)} onClick={()=>{this.setSelected(0)}}> Medications </button>
                    </Col>
                    <Col>
                        <button id = {this.getStyle(1)} onClick={()=>{this.setSelected(1)}}> Appointments </button>
                    </Col>
                </Row>

                <Row style = {rowStyle}>
                    <Col>
                        <button id = {this.getStyle(2)} onClick={()=>{this.setSelected(2)}}>Doctor Info</button>
                    </Col>
                    <Col>
                        <button id = {this.getStyle(3)} onClick={()=>{this.setSelected(3)}}> Reminders </button>
                    </Col>
                </Row>
                <Row style = {rowStyle}>
                    <Col>
                        <button id = {this.getStyle(4)} onClick={()=>{this.setSelected(4)}}>
                            Diagnosis
                        </button>
                    </Col>
                    <Col>
                        <button id = {this.getStyle(5)} onClick={()=>{this.setSelected(5)}}>
                            Notes
                        </button>
                    </Col>
                </Row>
                {/*
                <Medications></Medications>
                <AppointmentsMobile/>
                <DoctorsMobile/>
                <RemindersMobile/>
                <DiagnosisMobile/>
                <NotesMobile/>
                */}
                {this.getComponent()}
            </Container>
        );
    }
}

export default MyIllnessPage;