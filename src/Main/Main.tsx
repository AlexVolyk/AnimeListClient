import React, {Component} from "react";
import Table from "./Table/Table";
import SignUp from '../User/userSign-Log/SignUp'
import Navbar from "../Navbar/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
    } from "react-router-dom";
import './main.css'
type props = {
    userToken: any,
    userId: any,
    gui: any,
    gut: any,
    gun: any,
    guia: any
}

type current = {

}

export default class Main extends Component<props, current>{
    render(){
        return(
            <div className="main">
                <div className="main-blend">
                    <div className="container-main">
                        {/* <Navbar />  */}
                        {/* <Router> */}
                            <Navbar {...this.props}/> 
                            {/* <Switch>
                            <Redirect from="/register" to="/" />
                                <Route path='/register'>
                                    <SignUp />
                                </Route>
                                <Route path='/'>
                                    <Table />
                                </Route>
                            </Switch>
                        </Router> */}
                        {/* <Table /> */}
                    </div>
                </div>
            </div>
        );
    };
};