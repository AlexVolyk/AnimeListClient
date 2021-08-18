import React, {Component} from "react";
import './header.css'
// import Login from '../Auth/userSign-Log/Login'
import {Modal} from 'react-bootstrap';
import SignUp from '../Auth/userSign-Log/SignUp'
import Mod from '../Auth/userSign-Log/Mod'

type booleans = {
    login: any,
    showLogin: boolean,
    showSignUp: boolean,
    show: any,
}
export default class Header extends Component<{}, booleans> {
constructor(props: any){
    super(props)

    this.state = {
        // login: 'assaasas',
        show: '',
        showLogin: false,
        showSignUp: false,
        login: this.setShowLogin,
    }
    this.setShowLogin = this.setShowLogin.bind(this)
    this.setShowSignUp = this.setShowSignUp.bind(this)
}

setShowLogin(): void{
    this.setState({
        showLogin: !this.state.showLogin
    })
    console.log(this.state.showLogin)
    console.log('asasasasasas')
}

setShowSignUp(){
    this.setState({
        showSignUp: !this.state.showSignUp
    })
    console.log(this.state.showSignUp)
}
    render(){

        // let smt: void;
        return(
            <div className="header">
                <div className="header-top">
                <button className="header-btn" onClick={this.setShowLogin}>Login</button>
                    {this.state.showLogin ? <Mod {...this.state}/> : null}
                    {/* <button className="header-btn" onClick={this.setShowLogin}>Login</button>
                    {this.state.showLogin ? <Login /> : null} */}
                    <button className="header-btn" onClick={this.setShowSignUp}>SignUp</button>
                    {this.state.showSignUp ? <SignUp /> : null}
                </div>
                <div className="header-bottom"></div>
            </div>
        )
    }
}