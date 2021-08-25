import {Modal, Form} from 'react-bootstrap';
import React, {Component} from "react";
import sweetalert2 from 'sweetalert2'
import './sign-log.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    } from "react-router-dom";
// import dog from '../../img/dog.jpg'
// C:\Users\ACER\Desktop\pr\client\src\img\dog.jpg
// import dog from '../../img/dog.jpg'
// var im = require('../../img/dog.jpg')
type parent = {
    showLoginFunction: any, 
    userShowLogin: boolean, 
    gut: any, 
    gun: any, 
    guia: any
}
type child = {
    username: string,
    email: string,
    password: string,
    // userToken: string,
    userId: number
    // login: object
}

export default class Mod extends Component<parent,child> {
    constructor(props:any){
        super(props)
        
        this.state = {
            email: 'kozaklyho@gmail.com',
            password: 'kozaklyho',
            // userToken: '',
            username: '',
            userId: 0,
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        // this.setUserToken = this.setUserToken.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setUserId = this.setUserId.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    setUsername(value: string) {
        this.setState({
            username: value
        })
        console.log(this.state.username)
    }

    setEmail(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }

    setPassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: e.target.value
        })
        console.log(this.state.password)
    }

    // setUserToken(e: any ) {
    //     this.setState({
    //         userToken: e
    //     })
    //     console.log(this.state.userToken)
    // }

    setUserId(e: any ) {
        this.setState({
            userId: e
        })
        console.log(this.state.userId)
    }

    closeModal() {
        this.props.showLoginFunction()
        // window.location.assign('/')
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
                        icon: 'success',
                        showConfirmButton:false,
                    })
                    console.log(json)
                    this.setUserId(json.user.id)
                    this.setUsername(json.user.username)
                    // this.setUserToken(json.userSessionToken)
                    this.props.gut(json.userSessionToken)
                    this.props.gun(json.user.username)
                    this.props.guia(json.user.isAdmin)

                    this.closeModal()
                    // setTimeout(() => {
                    //     window.location.assign('/');
                    // },1900)
                    // window.location.assign('/');
                    // console.log(this.props.sut)
                } else {
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'error',
                        showConfirmButton:false,
                    })

                }
            }) 
            // var im = require('../../img/dog.jpg')

    }
    render(){
        return(
            // <div className="here">
                <>
                {/* <img src={dog}/> */}
                {/* {this.state.userId !== 0 ? <img src={im} style={{width:"400px !important", height: '200px !important', border: '1px solid black'}} alt="NO" /> : null} */}
        <Modal
        show={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={this.closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id='ModalHeader' onClick={this.closeModal}>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{margin: "0 auto"}}>
            <Form onSubmit={this.handleSubmit}>
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
                    </Form>
            </Modal.Body>
        </Modal >
        </>
        // </div>
        )
    }
}