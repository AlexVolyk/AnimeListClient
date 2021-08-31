import React, {Component} from "react";
import sweetalert2 from "sweetalert2"
import APIURL from '../../helpers/environment'

type props = {
    userToken: string,
    userId: string
}
type info = {
    username: string,
    email: string,
    password: string,
}

export default class EditUser extends Component<props, info> {
    constructor(props: any){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '' ,
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  // !
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
        const ID = this.props.userId
        // console.log(ID)
        const URL = `${APIURL}/user/edit/user/${ID}`;
        fetch(URL, {
            method: "PUT",
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `I_AM_USER ${this.props.userToken}`
            })

        })
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                if (json.user === "User updated successfully"){
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'success'
                    })
                    // this.setUsername(json.user.username)
                    // this.setUserToken(json.userSessionToken)    
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
                <h1>Edit</h1>
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
                    <input type="text" 
                    id="password"
                    placeholder="password"
                    onChange={this.setPassword}
                    value={this.state.password}
                    pattern="[a-zA-z0-9]{5,}"
                    title="At least 5 characters"
                    required
                    />
                    <button className="forms-user-btn" type="submit">Submit</button>
                </form>
            </div>
            </div>
        )
    }

}