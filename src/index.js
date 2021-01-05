import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import Home from "./components/Home"
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import OurApp from "./components/Our App";
import MyIllnessPageMobile from "./components/MyIllnessPageMobile";
//import OurApp from "./components/Our App";
import "video-react/dist/video-react.css";
import "../src/stylesheets/wrapperStyling.css"
import OurApp from "./components/Our App";
import FaQs from "./components/FAQs";
import { ReactComponent as Logo } from './logo.svg';

//
import { BrowserRouter, Route, Switch} from "react-router-dom";
import OurMission from "./components/Our Mission";
import Home from "./components/Home";
import Contact from "./components/Contact";
const routing = (
    <div>
    <BrowserRouter forceRefresh={true}>
        <Switch>

            <Route path="/Mission" component={OurMission}/>
            <Route path="/FAQs" component={FaQs}/>
            <Route path="/App" component={OurApp}/>
            <Route path = "/ContactUs" component={Contact}/>

            <Route exact path="/" component={Home} />



        </Switch>
    </BrowserRouter>
    </div>
)

ReactDOM.render(
   routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
