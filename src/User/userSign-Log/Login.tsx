import {Modal, Form} from 'react-bootstrap';
import React, {Component} from "react";
import sweetalert2 from 'sweetalert2'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import './login.css';
import APIURL from '../../helpers/environment'

type props = {
    showLoginFunction: Function, 
    userShowLogin: boolean, 
    gut: Function, 
    gun: Function, 
    guia: Function,
    gui: Function
}
type info = {
    username: string,
    email: string,
    password: string,
    showPasswordBoolean: boolean,

}

export default class Login extends Component<props, info> {
    constructor(props:any){
        super(props)
        
        this.state = {
            email: '',
            password: '',
            username: '',
            showPasswordBoolean: false,

        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.showPasswordToggle = this.showPasswordToggle.bind(this)

    }

    setUsername(value: string) {
        this.setState({
            username: value
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

    closeModal(): void {
        this.props.showLoginFunction()
    }

    showPasswordToggle (): void {
        this.setState({
            showPasswordBoolean: !this.state.showPasswordBoolean
        })
        // console.log(this.state.showPasswordBoolean)
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const URL = `${APIURL}/user/login`;
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
                    // console.log(json)
                    this.props.gui(json.user.id)
                    this.setUsername(json.user.username)
                    this.props.gut(json.userSessionToken)
                    this.props.gun(json.user.username)
                    this.props.guia(json.user.isAdmin)

                    this.closeModal()
                    window.history.pushState("/", "/", "/");
                    
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
                        <Modal.Title id='ModalHeader' onClick={this.closeModal}>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{margin: "0 auto"}} className="login-inner">
                        <Form onSubmit={this.handleSubmit} className="login-form">
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
                            <button className="forms-user-btn" type="submit">Submit</button>
                        </Form>
                </Modal.Body>
            </Modal >
        </>
        )
    }
}