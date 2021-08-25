import React, {Component} from "react";
import './header.css'
// import Login from '../Auth/userSign-Log/Login'
import {Modal} from 'react-bootstrap';
import SignUp from '../Auth/userSign-Log/SignUp'
import Mod from '../Auth/userSign-Log/Mod'
import AdminLogin from '../Admin/AdminLogin'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    } from "react-router-dom";

type prop = {
    gut: any, 
    gun: any, 
    guia: any,
    userIsAdmin: boolean,
    gat: any,
    gaia: any
}

type booleans = {
    showLoginFunction: any,
    userShowLogin: boolean,
    adminShowLogin: boolean,
    adminShowLoginFunction: any
}

// const {username, usrt, usrtffff} = this.context
export default class Header extends Component<prop, booleans> {
constructor(props: any){
    super(props)

    this.state = {
        // login: 'assaasas',
        userShowLogin: false,
        showLoginFunction: this.setUserShowLogin,
        adminShowLogin: false,
        adminShowLoginFunction: this.setAdminShowLogin,
    }
    this.setUserShowLogin = this.setUserShowLogin.bind(this)
    this.setAdminShowLogin = this.setAdminShowLogin.bind(this)
}

setUserShowLogin = (): void => {
    this.setState({
        userShowLogin: !this.state.userShowLogin
    })
    console.log(this.state.userShowLogin)
}

setAdminShowLogin = (): void => {
    this.setState({
        adminShowLogin: !this.state.adminShowLogin
    })
    console.log(this.state.adminShowLogin)
}
    render(){
        // console.log(this.context, "CONTEXT")
        // console.log(context.usrt, "CONTEXT")

        // let smt: void;
// console.log(this.props.userIsAdmin, "NAVBAR ------------------------------")
        return(
            <div className="header">
                <div className="container-header">

                    <Router>                
                        <div className='logo'><NavLink to='/'>AnimeList</ NavLink></div>
                        {/* {this.props.userIsAdmin ? <NavLink to="/"><button className="header-btn header-btn-signup">Admin Login</button></ NavLink> : null}  */}
                        {this.props.userIsAdmin ? <button className="header-btn header-btn-signup" onClick={this.setAdminShowLogin}>Admin Login</button> : null} 
                        {/* <button className="header-btn header-btn-login" onClick={this.setAdminShowLogin}><NavLink to='/login'>Login</ NavLink></button> */}
                        {this.state.adminShowLogin ? <AdminLogin {...this.state} {...this.props} /> : null}
                        <div className="header-top">
                        {/* <button className="header-btn" onClick={this.setShowLogin}>Login</button>
                            {this.state.showLogin ? <Mod {...this.state} {...this.props} /> : null} */}
                            {/* <button className="header-btn" onClick={this.setShowLogin}>Login</button>
                            {this.state.showLogin ? <Login /> : null} */}
                            {/* <Router> */}
                        <button className="header-btn header-btn-login" onClick={this.setUserShowLogin}><NavLink to='/login'>Login</ NavLink></button>
                        {this.state.userShowLogin ? <Mod {...this.state} {...this.props} /> : null}
                        <NavLink to="/register"><button className="header-btn header-btn-signup">SignUp</button></ NavLink>
                        {/* {this.state.showSignUp ? <SignUp /> : null} */}

                        <Switch>
                            <Route path='/register'>
                                <SignUp />
                            </Route>
                        </Switch>
                    </div>
                    </Router>
                    {/* <div className="header-bottom"></div> */}
                </div>
            </div>
        )
    }
}