import React, {Component} from "react";
import sweetalert2 from "sweetalert2"
import './signup.css'
type props = {
    gui: any,
    gut: any,
    gun: any,
    guia: any
}
type info = {
    username: string,
    email: string,
    password: string,
    // userToken: string
}

export default class SignUp extends Component<props, info> {
    constructor(props: any){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '' ,
            // userToken: ''
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        // this.setUserToken = this.setUserToken.bind(this);
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

    // setUserToken(e: any ){
    //     this.setState({
    //         userToken: e
    //     })
    //     console.log(this.state.userToken)
    // }

    async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // window.location.assign('login');
        e.preventDefault()

        const URL = 'http://localhost:3000/user/register';
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
                console.log(json)
                if (json.user !== undefined){
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'success'
                    })
                    this.props.gui(json.user.id)
                    // this.setUsername(json.user.username)
                    // this.setUserToken(json.userSessionToken)
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
                    <button className="signup-inner-btn" type="submit">Submit</button>
                </form>
            </div>
            </div>
        )
    }

}