import React, {Component} from "react";
import sweetalert2 from "sweetalert2";

type props = {
    userToken: string,
    userId: string,
    lou: Function
}
type info = {

}

export default class DeleteUser extends Component<props, info> {
    constructor(props: any){
        super(props)
        this.state = {

        }

    }

    //! DELETE FETCH
    delete = (ID:any): void => {
        // console.log(ID)
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
                // console.log(json, "json")
            }) 
    }
    render(){

        //! Clarify deletion
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
            this.props.lou()

            swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your Account has been deleted.',
            'success'
            )
    } else if (
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