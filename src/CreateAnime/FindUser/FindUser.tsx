import React, {Component} from "react";
import { BsSearch, } from "react-icons/bs";
import DisplayUser from "./DisplayUser/DisplayUser";

type props = {
    adminToken: string, 
}
type types = {
    findUsername: string,
    getFindUser: Array<Object>,
    getFindUserFunction: Function
}

export default class EditAnimeDelete extends Component<props, types>{
    constructor(props: any){
        super(props)
        this.state = {
            findUsername: '',
            getFindUser: [],
            getFindUserFunction: this.findUser
        }
        
        this.findUser = this.findUser.bind(this)
        this.setFindUser = this.setFindUser.bind(this)
        this.setGetFindUser = this.setGetFindUser.bind(this)
    }
    setFindUser(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            findUsername: e.target.value
        })
        // console.log(this.state.findUsername, "findUsername")
    }

    setGetFindUser(e: any) {
        this.setState({
            getFindUser: [e]
        })
        // console.log(this.state.getFindUser, "getFindUser")
    }

    async findUser(){
        const URL = `http://localhost:3000/user/allUsers`;
        fetch(URL, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `I_AM_ADMIN ${this.props.adminToken}`
            })
        })
            .then(res => res.json())
            .then(json => {
                // console.log(json, "json")
                let getUser = json.filter((user: any) => user.username.includes(this.state.findUsername)
                )

                this.setGetFindUser(getUser)
                // console.log(json, "json")
            })
        
    }

    render(){
        return(
            <>
                <div className="search-inner">
                    <button onClick={this.findUser} className="search-btn" autoFocus>
                        <BsSearch />
                    </button>
                    <input type="text"
                    placeholder="username"
                    value={this.state.findUsername}
                    onChange={this.setFindUser}
                    className="search-input"
                    autoFocus/>
                    <DisplayUser {...this.state} {...this.props}/>
                </div>
            </>
        )
    }
}