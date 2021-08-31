import React, {Component} from "react";
import './adminpanel.css';
import CreateAnime from '../../CreateAnime/CreateAnime'
import EditDeleteAnime from '../../CreateAnime/EditDeleteAnime/EditDeleteAnime'
import FindUser from '../../CreateAnime/FindUser/FindUser'

type props = {
    adminToken: string,
}

type p = {
    createAnimeBoolean: boolean,
    edit_deleteAnimeBoolean: boolean,
    find_userBoolean: boolean,

}
export default class AdminNavbar extends Component<props, p>{
    constructor(props: any){
        super(props)
        this.state = {
            createAnimeBoolean: true,
            edit_deleteAnimeBoolean: false,
            find_userBoolean: false
        }
        this.toggleCreateAnime = this.toggleCreateAnime.bind(this)
        this.toggleEdit_DeleteAnime = this.toggleEdit_DeleteAnime.bind(this)
        this.toggleFind_User = this.toggleFind_User.bind(this)

    }

    toggleCreateAnime = (): void => {
        this.setState({
            createAnimeBoolean: true,
            edit_deleteAnimeBoolean: false,
            find_userBoolean: false
        })
    }

    toggleEdit_DeleteAnime = (): void => {
        this.setState({
            edit_deleteAnimeBoolean: true,
            createAnimeBoolean: false,
            find_userBoolean: false

        })
    }

    toggleFind_User = (): void => {
        this.setState({
            find_userBoolean: true,
            edit_deleteAnimeBoolean: false,
            createAnimeBoolean: false,
        })
    }
    
    render(){
        return(
                <div className="admin-panel">
                    <nav>
                        <ul className="panel-btn-inner">
                            <li><button className="panel-btn" onClick={this.toggleCreateAnime}>Create</button></li>
                            <li><button className="panel-btn" onClick={this.toggleEdit_DeleteAnime}>Edit/Delete</button></li>
                            <li><button className="panel-btn" onClick={this.toggleFind_User}>Find User</button></li>
                        </ul>
                    </nav>
                    {this.state.createAnimeBoolean ? <CreateAnime {...this.props}/> : null}
                    {this.state.edit_deleteAnimeBoolean ? <EditDeleteAnime {...this.props}/> : null}
                    {this.state.find_userBoolean ? <FindUser {...this.props}/> : null}
                </div>
        )
    }
}