import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import DashboardLayout from "./component/dashboardLayout/Dashboard";
import Calender from "./screen/calender/Calender";
import Home from "./screen/home/Home";
import Onboarding from "./screen/onboarding/Onboarding";
import Recruitment from "./screen/recruitment/Recruitment";
import Report from "./screen/report/Report";
import Setting from "./screen/settings/Setting";

const Controller = () =>{
    return(
        <Router>
            <DashboardLayout>
                <Switch>
                    <Route path = "/recruitment" render = {(props) => <Recruitment {...props} />} />
                    <Route path = "/onboarding" render = {(props) => <Onboarding {...props} />} />
                    <Route path = "/reports" render = {(props) => <Report {...props} />} />
                    <Route path = "/calender" render = {(props) => <Calender {...props} />} />
                    <Route path = "/settings" render = {(props) => <Setting {...props} />} />
                    <Route path = "/" render = {(props) => <Home {...props} />} />
                </Switch>
            </DashboardLayout>
        </Router>
    );
}

export default Controller;