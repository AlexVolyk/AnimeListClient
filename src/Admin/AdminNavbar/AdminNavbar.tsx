import React, {Component} from "react";
import { RiLogoutBoxRLine, RiLogoutCircleRLine, RiHammerLine } from "react-icons/ri";
import './adminnavbar.css'

export default class AdminNavbar extends Component<{logOutForAdmin: any, logOutBoth: any}>{
    constructor(props: any){
        super(props)
    }
    render(){
        return(
            <>
                <div className="admin-navbar">
                    <nav>
                        <ul>
                            <li><button><RiHammerLine/>Panel</button></li>
                            <li><button  onClick={this.props.logOutForAdmin}><RiLogoutBoxRLine />Logout Admin</button></li>
                            <li><button  onClick={this.props.logOutBoth}><RiLogoutCircleRLine />Logout User & Admin</button></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}