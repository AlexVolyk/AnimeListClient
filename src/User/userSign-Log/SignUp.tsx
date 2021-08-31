import React, {Component} from "react";
import sweetalert2 from "sweetalert2"
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import './signup.css'
import APIURL from '../../helpers/environment'

type props = {
    gui: Function,
    gut: Function,
    gun: Function,
    guia: Function
}

type info = {
    username: string,
    email: string,
    password: string,
    showPasswordBoolean: boolean 
}

export default class SignUp extends Component<props, info> {
    constructor(props: any){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '' ,
            showPasswordBoolean: false,
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showPasswordToggle = this.showPasswordToggle.bind(this)
    }
    showPasswordToggle (): void {
        this.setState({
            showPasswordBoolean: !this.state.showPasswordBoolean
        })
        // console.log(this.state.showPasswordBoolean)
    }

    setUsername(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            username: e.target.value
        })
        // console.log(this.state.username)
    }

    setEmail(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            email: e.target.value
        })
        // console.log(this.state.email)
    }

    setPassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: e.target.value
        })
        // console.log(this.state.password)
    }


    async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const URL = `${APIURL}/user/register`;
        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json"
            })

        })
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                if (json.user !== undefined){
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'success'
                    })
                    this.props.gui(json.user.id)
                    this.props.gut(json.userSessionToken)
                    this.props.gun(json.user.username)
                    this.props.guia(json.user.isAdmin)    
                } else {
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'error'
                    })
                }
            }) 
    }
    render(){
        return(
            <div className="INTEREST">
            <div className="signup-inner">
                <h1>SIgnUp</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                    id="username"
                    placeholder="username"
                    onChange={this.setUsername}
                    value={this.state.username}
                    pattern="[\w+]{4,}"
                    title="At least 4 characters"
                    required
                    />
                    <input type="email"
                    id="email"
                    placeholder="email"
                    onChange={this.setEmail}
                    value={this.state.email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="For example test@test.com"
                    required
                    />
                    <div className="password-inner-btn">
                        <input type={this.state.showPasswordBoolean ? "text" : "password"} 
                        id="password"
                        placeholder="password"
                        onChange={this.setPassword}
                        value={this.state.password}
                        pattern="[a-zA-z0-9]{5,}"
                        title="At least 5 characters"
                        required
                        />
                        {this.state.showPasswordBoolean ? (
                        <button type="button" className="show-password-btn" onClick={this.showPasswordToggle}><AiFillEye /></button>
                            ) : (
                        <button type="button" className="show-password-btn" onClick={this.showPasswordToggle}><AiFillEyeInvisible /></button>
                        )}
                    </div>
                    <button className="forms-user-btn" type="submit">Submit</button>
                </form>
            </div>
            </div>
        )
    }

}