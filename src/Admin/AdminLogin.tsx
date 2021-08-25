import React, {Component} from "react";
import {Modal, Form} from 'react-bootstrap';
import sweetalert2 from "sweetalert2"
import './adminlogin.css';

type parent = {
    adminShowLoginFunction: any,
    adminShowLogin: boolean,
    gat: any,
    gaia: any
}

type info = {
    username: string,
    email: string,
    password: string,
    adminToken: string
}

export default class SignUp extends Component<parent, info> {
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
        this.closeModal = this.closeModal.bind(this);
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

    closeModal() {
        this.props.adminShowLoginFunction()
        // window.location.assign('/')
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
                        icon: 'success',
                        showConfirmButton:false,
                    })
                    // this.setUsername(json.admin.username)
                    this.props.gat(json.adminSessionToken)  
                    this.props.gaia(json.admin.isAdmin) 
                    console.log(json) 
                    this.closeModal()
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
    }
    render(){
        return(
            <>
        <Modal
        show={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={this.closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id='ModalHeader' onClick={this.closeModal}>Admin Login</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-admlogin">
            {/* <div className="sign-log"> */}
                <Form onSubmit={this.handleSubmit}>
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
                    </Form>
            </Modal.Body>
        </Modal >
        </>
        )
    }

}