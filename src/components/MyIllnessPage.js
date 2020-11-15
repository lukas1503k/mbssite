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

    getStyle(idx){
        if(idx == this.state.selected){
            return "selectedButton"

        }
        return "unselectedButton"

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
        console.log(this.getStyle(1));

        let rowStyle = {textAlign:"center", marginTop: "1vw",height:"8.8888888%",marinBottom:"1vw"};
        return (
            <Container style = {{float:"right", borderColor:"black", borderStyle:"solid", borderWidth:"thin", paddingLeft:"0vw", paddingRight:"0px", width: "28.83333333vw", height: "44.8333vw",backgroundColor:"white", color:"black"}}>
                <div id="heading" style={{backgroundColor:"#5F0E78", height:"4.3333vw", position:"static"}}>
                    {/*<img style={{height: "100%"}} src={heading}/>*/}
                    <img style = {{height:"3vw", marginLeft: "15%", marginTop:".5vw" }}src={Logo} />
                    <a style ={{marginLeft:"1em", marginTop:"5vw", fontSize: "1vw", color: "white" }}>
                        Medical Buddy Solutions
                    </a>
                </div>


                   <Row style = {rowStyle}>
                        <Col style={{margin:"auto"}}>
                            <h2 id={"selectHeading"} style={{fontSize:"1vw", margin:"auto"}}>
                                Select Heading

                            </h2>

                        </Col>

                       <Col>
                           <button style ={{width: "9vw", color: "#5F0E78", backgroundColor: "white"}}>
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
                <Appointments/>
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