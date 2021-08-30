import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    } from "react-router-dom";
// import { RiLogoutBoxRLine, RiLogoutCircleRLine, RiHammerLine } from "react-icons/ri";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse, NavbarToggler, Nav, NavItem, } from 'reactstrap';
import SignUp from "../User/userSign-Log/SignUp";
// import Main from "../Main/Main";
import Table from "../Main/Table/Table";
import TableAnimePage from "../Main/TableAnimePage/TableAnimePage";
// import TableAct from "../Main/Table/TableAct";

// import { Tooltip } from 'reactstrap';
import './navbar.css'
import EditUser from "../User/EditUser/EditUser";
import DeleteUser from "../User/DeleteUser/DeleteUser";
type props = {
    userToken: any,
    userId: any,
    gui: any,
    gut: any,
    gun: any,
    guia: any
}
type tooltips = {
    dropDownMenuBoolean: boolean,
    dropDownGenresBoolean: boolean,
    deleteBoolean: boolean
}
type ob = {
    action: any
}

export default class Navbar extends Component<props,tooltips, ob>{
    constructor(props: any){
        super(props)
        this.state = {
            dropDownMenuBoolean: false,
            dropDownGenresBoolean: false,
            deleteBoolean: false
        }
        this.dropDownMenuToggle = this.dropDownMenuToggle.bind(this)
        this.dropDownGenresToggle = this.dropDownGenresToggle.bind(this)
        this.deleteToggle = this.deleteToggle.bind(this)

    }

    dropDownMenuToggle = () => {
        this.setState({
            dropDownMenuBoolean: !this.state.dropDownMenuBoolean
        })
        console.log(this.state.dropDownMenuBoolean)
    }

    dropDownGenresToggle = () => {
        this.setState({
            dropDownGenresBoolean: !this.state.dropDownGenresBoolean
        })
        console.log(this.state.dropDownGenresBoolean)
    }

    deleteToggle = () => {
        this.setState({
            deleteBoolean: !this.state.deleteBoolean
        })
        console.log(this.state.deleteBoolean)
    }

    render(){
        // let a = ["Action", "Adventure", "Cars", "Comedy", "Dementia", "Demons", "Drama", "Ecchi", "Fantasy", "Harem", "Hentai", "Historical", "Horror", "Josei", "Kids", "Madhouse", "Magic", "Magic Bus", "Martial Arts", "Mecha", "Military", "Mystery", "Parody", "Police", "Psychological", "Romance", "Samurai", "Sci-Fi", "Seinen", "Shoujo", "Shounen", "Shounen Ai", "Slice of Life", "Space", "Sports", "Super Power", "Supernatural", "Thriller", "Vampire", "Yuri", "Game", "Music", "Yaoi"]
        // let b = a.sort(function (a, b){
        //     if(a > b){
        //         return 1
        //     } else if (a < b) {
        //         return -1
        //     } else {
        //         return 0
        //     }
        // })
        // console.log(b)

        // let genres = ["Action", "Adventure", "Cars", "Comedy", "Dementia", "Demons", "Drama", "Ecchi", "Fantasy", "Game", "Harem", "Hentai", "Historical", "Horror", "Josei", "Kids", "Madhouse", "Magic", "Magic Bus", "Martial Arts", "Mecha", "Military", "Music", "Mystery", "Parody", "Police", "Psychological", "Romance", "Samurai", "Sci-Fi", "Seinen", "Shoujo", "Shounen", "Shounen Ai", "Slice of Life", "Space", "Sports", "Super Power", "Supernatural", "Thriller", "Vampire", "Yaoi", "Yuri"]
        let block1 = ["Action", "Adventure", "Cars", "Comedy", "Dementia", "Demons", "Drama", "Ecchi"]
        let block2 = ["Fantasy", "Game", "Harem", "Hentai", "Historical", "Horror", "Josei", "Kids"]
        let block3 = ["Madhouse", "Magic", "Magic Bus", "Martial Arts", "Mecha", "Military", "Music", "Mystery"]
        let block4 = ["Parody", "Police", "Psychological", "Romance", "Samurai", "Sci-Fi", "Seinen", "Shoujo"]
        let block5 = ["Shounen", "Shounen Ai", "Slice of Life", "Space", "Sports", "Super Power", "Supernatural", "Thriller"]
        let block6 = ["Vampire", "Yaoi", "Yuri"]


        // let genresNavbar = genres.map((genre: any, key: number) => {
        //     return(
        //     <NavItem key={key}>
        //         <a href={"/genre/" + genre.toLowerCase()}>{genre}</a>
        //     </NavItem>
        //     )
        // })
        let genresBlock1 = block1.map((genre: any, key: number) => {
            return(
            <NavItem key={key}>
                <a href={"/genre/" + genre.toLowerCase()}>{genre}</a>
            </NavItem>
            )
        })
        let genresBlock2 = block2.map((genre: any, key: number) => {
            return(
            <NavItem key={key}>
                <a href={"/genre/" + genre.toLowerCase()}>{genre}</a>
            </NavItem>
            )
        })
        let genresBlock3 = block3.map((genre: any, key: number) => {
            return(
            <NavItem key={key}>
                <a href={"/genre/" + genre.toLowerCase()}>{genre}</a>
            </NavItem>
            )
        })
        let genresBlock4 = block4.map((genre: any, key: number) => {
            return(
            <NavItem key={key}>
                <a href={"/genre/" + genre.toLowerCase()}>{genre}</a>
            </NavItem>
            )
        })
        let genresBlock5 = block5.map((genre: any, key: number) => {
            return(
            <NavItem key={key}>
                <a href={"/genre/" + genre.toLowerCase()}>{genre}</a>
            </NavItem>
            )
        })
        let genresBlock6 = block6.map((genre: any, key: number) => {
            return(
            <NavItem key={key}>
                <a href={"/genre/" + genre.toLowerCase()}>{genre}</a>
            </NavItem>
            )
        })
        let disp;
        if(window.location.pathname === '/delete/account') disp = <> <Table /> <DeleteUser {...this.props}/> </>
        return(
            <>
                <Router>
                <NavbarToggler onClick={this.dropDownGenresToggle} className="mr-2">Genres</NavbarToggler>
                <Collapse isOpen={this.state.dropDownGenresBoolean} navbar>
                    <Nav navbar className="right-style" style={{display: "inline-flex"}}>
                        <li className="block-inner">{genresBlock1}</li>
                        <li className="block-inner">{genresBlock2}</li>
                        <li className="block-inner">{genresBlock3}</li>
                        <li className="block-inner">{genresBlock4}</li>
                        <li className="block-inner">{genresBlock5}</li>
                        <li className="block-inner">{genresBlock6}</li>
                    </Nav>
                </Collapse>
                <div className="menu-inner">
                <div className="menu">
                <NavbarToggler onClick={this.dropDownMenuToggle} className="mr-2">User</NavbarToggler>
                <Collapse isOpen={this.state.dropDownMenuBoolean} navbar>
                    <Nav navbar>
                        <NavItem>
                            <a href="/">Main</a>
                        </NavItem>
                        {/* <NavItem>
                            <a  href="/register">SignUp</a>
                        </NavItem> */}
                        <NavItem>
                            <a href="/edit/user">Edit</a>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/delete/account" onClick={this.deleteToggle}>Delete</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </div>
                </div>

                    <Switch>
                        {/* <Route path='/'>
                            <Table/>
                        </Route> */}
                        <Route path='/register'>
                            <SignUp {...this.props}/>
                        </Route>
                        <Route path='/edit/user'>
                            <EditUser {...this.props}/>
                        </Route>
                        <Route path='/delete/account'>
                            
                            {/* <Table /> */}
                            {disp}
                            {/* <DeleteUser {...this.props}/> */}
                            {/* <Table /> */}
                        </Route>
                        {/* <Route path='/'>
                            <Table/>
                        </Route> */}
                        <Route path='/anime/:animeName'>
                            <TableAnimePage />
                        </Route>
                        {/* <Route path='/genre/action'>
                            <TableAct action={"Action"}/>
                        </Route> */}
                        <Route path='/'>
                            <Table/>
                        </Route>
                    </Switch>
                    {/* {this.state.deleteBoolean ? <DeleteUser {...this.props}/> : null} */}
                </ Router>
            </>
        )
    }
}