import React, {Component} from "react";
import sweetalert2 from "sweetalert2";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
//     Redirect,
//     useHistory
//     } from "react-router-dom";
type props = {
    userToken: any,
    userId: any
}
type info = {

}

export default class DeleteUser extends Component<props, info> {
    constructor(props: any){
        super(props)
        this.state = {

        }

    }

    delete = (ID:any) => {
        console.log(ID)
        const URL = `http://localhost:3000/user/delete/user/${ID}`;
        fetch(URL, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `I_AM_USER ${this.props.userToken}`
            })

        })
            .then(res => res.json())
            .then(json => {
                console.log(json, "json")
                if (json.message === "User successfully deleted"){
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'success'
                    })

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

    const swalWithBootstrapButtons = sweetalert2.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            this.delete(this.props.userId)
            swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your Account has been deleted.',
            'success'
            )
    } else if (
        /* Read more about handling dismissals below */
            result.dismiss === sweetalert2.DismissReason.cancel
    ) {
            swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your Account is safe :)',
            'error'
        )
    }
        setTimeout(() => {
            window.history.pushState("/", '/', '/')
        }, 2000)
    })

        return(
            <>
            {swalWithBootstrapButtons}
            </>
        )
    }
}