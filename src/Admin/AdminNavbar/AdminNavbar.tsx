import React, {Component} from "react";
import { RiLogoutBoxRLine, RiLogoutCircleRLine, RiHammerLine } from "react-icons/ri";
import { Tooltip } from 'reactstrap';
import './adminnavbar.css'

type tooltips = {
    panelBoolean: boolean,
    logoutAdminBoolean: boolean,
    logoutBothBoolean: boolean,
}
export default class AdminNavbar extends Component<{logOutForAdmin: any, logOutBoth: any, setShowAdminPanel: any},tooltips>{
    constructor(props: any){
        super(props)
        this.state = {
            panelBoolean: false,
            logoutAdminBoolean: false,
            logoutBothBoolean: false,
        }

        this.togglePanelBoolean = this.togglePanelBoolean.bind(this)
        this.toggleLogoutAdminBoolean = this.toggleLogoutAdminBoolean.bind(this)
        this.toggleLogoutBothBoolean = this.toggleLogoutBothBoolean.bind(this)
    }

    togglePanelBoolean = () => {
        this.setState({
            panelBoolean: !this.state.panelBoolean
        })
    }

    toggleLogoutAdminBoolean = () => {
        this.setState({
            logoutAdminBoolean: !this.state.logoutAdminBoolean
        })
    }

    toggleLogoutBothBoolean = () => {
        this.setState({
            logoutBothBoolean: !this.state.logoutBothBoolean
        })
    }

    render(){
        return(
            <>
                <div className="admin-navbar">
                    <nav>
                        <ul>
                            <li id="panel">
                                <button onClick={this.props.setShowAdminPanel}><RiHammerLine/></button>
                            <Tooltip placement="right" isOpen={this.state.panelBoolean} target="panel" toggle={this.togglePanelBoolean}>
                            Panel
                            </Tooltip>
                            </li>
                            <li>
                                <button id="logoutAdmin" onClick={this.props.logOutForAdmin}><RiLogoutBoxRLine /></button>
                            <Tooltip placement="right" isOpen={this.state.logoutAdminBoolean} target="logoutAdmin" toggle={this.toggleLogoutAdminBoolean}>
                            Logout Admin
                            </Tooltip>
                            </li>
                            <li>
                                <button id="logoutBoth" onClick={this.props.logOutBoth}><RiLogoutCircleRLine /></button>
                            <Tooltip placement="right" isOpen={this.state.logoutBothBoolean} target="logoutBoth" toggle={this.toggleLogoutBothBoolean}>
                            Logout User & Admin
                            </Tooltip>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}