import React, {Component} from "react";
import './header.css'
import Login from '../User/userSign-Log/Login'
import AdminLogin from '../Admin/AdminLogin'
import {
    BrowserRouter as Router,
    NavLink,
    } from "react-router-dom";

type props = {
    gut: Function, 
    gun: Function, 
    guia: Function,
    userIsAdmin: boolean,
    gat: Function,
    gaia: Function,
    gui: Function,
}

type booleans = {
    showLoginFunction: Function,
    userShowLogin: boolean,
    adminShowLogin: boolean,
    adminShowLoginFunction: Function,
}

export default class Header extends Component<props, booleans> {
constructor(props: any){
    super(props)

    this.state = {
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
    // console.log(this.state.userShowLogin)
}

setAdminShowLogin = (): void => {
    this.setState({
        adminShowLogin: !this.state.adminShowLogin
    })
    // console.log(this.state.adminShowLogin)
}
    render(){

        return(
            <div className="header">                        
            {this.props.userIsAdmin ? <button className="header-btn header-btn-signup admin-login-btn" onClick={this.setAdminShowLogin}>Admin Login</button> : null} 
                <div className="container-header">
                    <Router>                
                        <div className='logo'><a href='/'>AnimeList</a></div>

                        {this.state.adminShowLogin ? <AdminLogin {...this.state} {...this.props} /> : null}

                        <div className="header-top">
                        <button className="header-btn header-btn-login" onClick={this.setUserShowLogin}><NavLink to='/login'>Login</ NavLink></button>

                        {this.state.userShowLogin ? <Login {...this.state} {...this.props} /> : null}

                        <a href="/register"><button className="header-btn header-btn-signup">SignUp</button></ a>
                    </div>
                    </Router>
                </div>
            </div>
        )
    }
}