import React, {Component} from "react";
import {Modal, Form} from 'react-bootstrap';
import sweetalert2 from "sweetalert2"
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import './adminlogin.css';

type props = {
    adminShowLoginFunction: Function,
    adminShowLogin: boolean,
    gat: Function,
    gaia: Function
}

type info = {
    username: string,
    email: string,
    password: string,
    adminToken: string,
    showPasswordBoolean: boolean
}

export default class SignUp extends Component<props, info> {
    constructor(props: any){
        super(props)
        this.state = {
            username: 'kozaklyho',
            email: 'kozaklyho@gmail.com',
            password: 'kozaklyho' ,
            adminToken: '',
            showPasswordBoolean: false,

        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setAdminToken = this.setAdminToken.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.showPasswordToggle = this.showPasswordToggle.bind(this)

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

    setAdminToken(e: string ) {
        this.setState({
            adminToken: e
        })
        // console.log(this.state.adminToken)
    }

    closeModal() {
        this.props.adminShowLoginFunction()
        // window.location.assign('/')
    }

    showPasswordToggle = ():void => {
        this.setState({
            showPasswordBoolean: !this.state.showPasswordBoolean
        })
        // console.log(this.state.showPasswordBoolean)
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
            <Modal.Body className="modal-admin-login">
            <div className="admin-login">
                <Form onSubmit={this.handleSubmit} className="login-inner">
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
                    <div className="password-inner-btn">
                        <input type={this.state.showPasswordBoolean ? "text" : "password"} 
                        id="password"
                        placeholder="password"
                        onChange={this.setPassword}
                        value={this.state.password}
                        />
                        {this.state.showPasswordBoolean ? (
                        <button type="button" className="show-password-btn" onClick={this.showPasswordToggle}><AiFillEye /></button>
                            ) : (
                        <button type="button" className="show-password-btn" onClick={this.showPasswordToggle}><AiFillEyeInvisible /></button>
                        )}
                    </div>
                    <button type="submit" className="login-inner-btn forms-user-btn">Submit</button>
                    </Form>
                    </div>
            </Modal.Body>
        </Modal >
        </>
        )
    }

}