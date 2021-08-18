import {Modal, Form} from 'react-bootstrap';
// import {Modal} from 'react-bootstrap';
// import {Modal} from 'react-bootstrap';
// import {Modal} from 'react-bootstrap';
import React, {Component} from "react";
import sweetalert2 from 'sweetalert2'
import './sign-log.css'

type info = {
    username: string,
    email: string,
    password: string,
    userToken: string
}

export default class Mod extends Component<{login:any},info> {
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
                                // console.log(this.props.login, "sasasasaaaaaaaaaaaaaaaa")  
                    this.props.login()
                } else {
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'error'
                    })

                }
            }) 
            // console.log(this.props.login, "sasasasaaaaaaaaaaaaaaaa")

    }
    render(){
        return(
        <Modal
        show={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='ModalHeader'>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{margin: "0 auto"}}>
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
            </Modal.Body>
        </Modal>
        )
    }
}