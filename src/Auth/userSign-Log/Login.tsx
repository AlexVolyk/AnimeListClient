import React, {Component} from "react";
import sweetalert2 from "sweetalert2";
import './sign-log.css'

type info = {
    username: string,
    email: string,
    password: string,
    userToken: string
}

export default class Login extends Component<{},info> {
    constructor(props: any){
        super(props)
        this.state = {
            email: 'kozaklyho@gmail.com',
            password: 'kozaklyho',
            userToken: '',
            username: ''
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setUserToken = this.setUserToken.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  // !
    }

    setUsername(value: string){
        this.setState({
            username: value
        })
        console.log(this.state.username)
    }

    setEmail(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }

    setPassword(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            password: e.target.value
        })
        console.log(this.state.password)
    }

    setUserToken(e: any ){
        this.setState({
            userToken: e
        })
        console.log(this.state.userToken)
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // window.location.assign('login');
        e.preventDefault()
        const URL = 'http://localhost:3000/user/login';
        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                user: {
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
                console.log(json)
                if (json.user !== undefined){
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'success'
                    })

                    this.setUsername(json.user.username)
                    this.setUserToken(json.userSessionToken)    
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
            <div className="sign-log">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email"
                    id="email"
                    placeholder="email"
                    onChange={this.setEmail}
                    value={this.state.email}
                    />
                    <input type="text" 
                    id="password"
                    placeholder="password"
                    onChange={this.setPassword}
                    value={this.state.password}
                    />
                    <button className="btn-signup-log" type="submit">Submit</button>
                </form>
            </div>
        )
    }

}