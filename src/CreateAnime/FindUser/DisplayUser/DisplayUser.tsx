import React, {Component} from "react";
import {BsTrashFill} from 'react-icons/bs'
import sweetalert2 from "sweetalert2";
import './displayuser.css'
import APIURL from '../../../helpers/environment'

type props = {
    getFindUser: Array<any>, 
    adminToken: string,
}
type types = {
    editBoolean: boolean,
    toggleEditFunction: Function
}

export default class DisplayUser extends Component<props, types>{
    constructor(props: any){
        super(props)
        this.state = {
            editBoolean: false,
            toggleEditFunction: this.toggleEdit
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit = (): void => {
        this.setState({
            editBoolean: !this.state.editBoolean
        })
        // console.log(this.state.editBoolean, "editBoolean")
    }

    //! DELETE ANIME
    deleteUser = (user:any) => {
        let ID = user.id

        const Toast = sweetalert2.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            })
        if(ID !== undefined) {

            const URL = `${APIURL}/admin/delete/user/by/admin/${ID}`

            // console.log(URL)
            fetch(URL, ({
                method: "DELETE",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": `I_AM_ADMIN ${this.props.adminToken}`
                })
            }))
            .then(res => res.json())
            .then(json => {
                    Toast.fire({
                        icon: 'success',
                        title: json.message
                        })
            })

        } else {
            Toast.fire({
                icon: 'error',
                title: "Not Found. WHY? I don't know"
                })
        }


    }

    render(){

        let getUser = this.props.getFindUser[0]

        return(
            <>
                <table className="find-user-adm">
                    <tr className="table-rows">
                        <td className="specific">Username</td>
                        <td className="specific">Email</td>
                        <td className="specific">Id</td>
                    </tr>
                {getUser ? (
                    getUser.map((user: any) => {
                        return(
                            <tr className="table-rows">
                                <td className="specific">{user.username}</td>
                                <td className="specific">{user.email}</td>
                                <td className="specific">{user.id}</td>
                                <button className="action-btn-trash action-btn" onClick={() => this.deleteUser(user)}><BsTrashFill /></button>
                            </tr>
                )}
                )
                            ) 
                            : 
                            (null)
                }
                </table>
            </>
        )
    }
}