import React, {Component} from "react";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
import './footer.css'

type aaa = {
    smt: string
}
export default class Footer extends Component<{}, aaa> {
    constructor(props: any){
        super(props)
        this.state = {
            smt: 'sss'
        }
    }
    render(){
        return(

            <div className="footer">
                <p>&copy; By Alex Volyk</p>
            </div>
        );
    };
};