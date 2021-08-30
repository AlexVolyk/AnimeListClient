import React, {Component} from "react";
import { BsSearch, } from "react-icons/bs";
import sweetalert2 from "sweetalert2";
import DisplayUser from "./DisplayUser/DisplayUser";
// import './editdeleteanime.css'


type types = {
    findUsername: string,
    getFindUser: any
}

export default class EditAnimeDelete extends Component<{adminToken: any}, types>{
    constructor(props: any){
        super(props)
        this.state = {
            findUsername: '',
            getFindUser: [] 
        }
        
        this.findUser = this.findUser.bind(this)
        this.setFindUser = this.setFindUser.bind(this)
        this.setGetFindUser = this.setGetFindUser.bind(this)
    }
    setFindUser(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            findUsername: e.target.value
        })
        console.log(this.state.findUsername, "findUsername")
    }

    setGetFindUser(e: any) {
        this.setState({
            getFindUser: [e]
        })
        console.log(this.state.getFindUser, "getFindUser")
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
                console.log(json, "json")
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
                    value={this.state.findUsername}
                    onChange={this.setFindUser}
                    className="search-input"
                    autoFocus/>
                    <DisplayUser {...this.state} {...this.props}/>
                    {/* <button onClick={this.findAnime} className="search-btn" autoFocus><BsSearch /></button> */}
                </div>
            </>
        )
    }
}