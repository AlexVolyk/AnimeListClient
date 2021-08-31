import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import './main.css'

type props = {
    userToken: string,
    userId: any,
    gui: Function,
    gut: Function,
    gun: Function,
    guia: Function,
    lou: Function,
}

type current = {

}

export default class Main extends Component<props, current>{
    render(){
        return(
            <div className="main">
                <div className="main-blend">
                    <div className="container-main">
                        <Navbar {...this.props}/> 
                    </div>
                </div>
            </div>
        );
    };
};