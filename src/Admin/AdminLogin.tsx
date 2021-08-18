import React, {Component} from "react";
import sweetalert2 from "sweetalert2"
import './login.css';

type info = {
    username: string,
    email: string,
    password: string,
    adminToken: string
}

export default class SignUp extends Component<{},info> {
    constructor(props: any){
        super(props)
        this.state = {
            username: 'kozaklyho',
            email: 'kozaklyho@gmail.com',
            password: 'kozaklyho' ,
            adminToken: ''
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setAdminToken = this.setAdminToken.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  // !
    }
    setUsername(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            username: e.target.value
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

    setAdminToken(e: string ){
        this.setState({
            adminToken: e
        })
        console.log(this.state.adminToken)
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // window.location.assign('login');
        e.preventDefault()

        const URL = 'http://localhost:3000/admin/login';
        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                admin: {
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
                if (json.admin !== undefined){
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'success'
                    })
                    // this.setUsername(json.admin.username)
                    this.setAdminToken(json.adminSessionToken)   
                    console.log(this.state.adminToken) 
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
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                    id="username"
                    placeholder="username"
                    onChange={this.setUsername}
                    value={this.state.username}
                    />
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}