import React, {Component} from "react";
import Table from "./Table/Table";
import './main.css'

export default class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="container-main">
                    <Table />
                </div>
            </div>
        );
    };
};