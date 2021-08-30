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
    dropDownGenresBoolean: boolean
}
type ob = {
    action: any
}

export default class Navbar extends Component<props,tooltips, ob>{
    constructor(props: any){
        super(props)
        this.state = {
            dropDownMenuBoolean: false,
            dropDownGenresBoolean: false
        }
        this.dropDownMenuToggle = this.dropDownMenuToggle.bind(this)
        this.dropDownGenresToggle = this.dropDownGenresToggle.bind(this)
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

// let a = ["Hentai","Action", "Adventure", "Comedy", "Fantasy", "Magic",  "Slice of Life", "Historical", "Shounen", "Supernatural", "Vampire",  Sci-Fi, "Mystery", "Super Power", "Demons", "Romance", "Horror", "Adventure", "Mystery", "Seinen", "Drama", "Parody", "Ecchi", "Kids", "Sports", "Shoujo", "Yuri", "Josei", "Madhouse", "Dementia", "Police", "Psychological", "Thriller","Mecha", "Military", "Historical", "Samurai", "Martial Arts", "Space", "Harem", "Shounen Ai", "Magic Bus", "Cars"]
    // "Hentai","Action", "Adventure", "Comedy", "Fantasy", "Magic",  "Slice of Life", "Historical", "Shounen", "Supernatural", "Vampire",  Sci-Fi, "Mystery", "Super Power", "Demons", "Romance", "Horror", "Adventure", "Mystery", "Seinen", "Drama", "Parody", "Ecchi", "Kids", "Sports", "Shoujo", "Yuri", "Josei", "Madhouse", "Dementia", "Police", "Psychological", "Thriller","Mecha", "Military", "Historical", "Samurai", "Martial Arts", "Space", "Harem", "Shounen Ai", "Magic Bus", "Cars"
    render(){
        // let a = ["Hentai","Action", "Adventure", "Comedy", "Fantasy", "Magic",  "Slice of Life", "Historical", "Shounen", "Supernatural", "Vampire",  "Sci-Fi", "Mystery", "Super Power", "Demons", "Romance", "Horror", "Mystery", "Seinen", "Drama", "Parody", "Ecchi", "Kids", "Sports", "Shoujo", "Yuri", "Josei", "Madhouse", "Dementia", "Police", "Psychological", "Thriller","Mecha", "Military", "Historical", "Samurai", "Martial Arts", "Space", "Harem", "Shounen Ai", "Magic Bus", "Cars"]
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
        let genres = ["Action", "Adventure", "Cars", "Comedy", "Dementia", "Demons", "Drama", "Ecchi", "Fantasy", "Harem", "Hentai", "Historical", "Historical", "Horror", "Josei", "Kids", "Madhouse", "Magic", "Magic Bus", "Martial Arts", "Mecha", "Military", "Mystery", "Mystery", "Parody", "Police", "Psychological", "Romance", "Samurai", "Sci-Fi", "Seinen", "Shoujo", "Shounen", "Shounen Ai", "Slice of Life", "Space", "Sports", "Super Power", "Supernatural", "Thriller", "Vampire", "Yuri"]

        let genresNavbar = genres.map((genre: any, key: number) => {
            return(
            <NavItem key={key}>
                <a href={"/genre/" + genre.toLowerCase()}>{genre}</a>
            </NavItem>
            )
        })
        return(
            <>
                <Router>
                <NavbarToggler onClick={this.dropDownGenresToggle} className="mr-2">Genres</NavbarToggler>
                <Collapse isOpen={this.state.dropDownGenresBoolean} navbar>
                    <Nav navbar>
                        {genresNavbar}
                    </Nav>
                </Collapse>
                <div className="menu-inner">
                <div className="menu">
                <NavbarToggler onClick={this.dropDownMenuToggle} className="mr-2">Menu</NavbarToggler>
                <Collapse isOpen={this.state.dropDownMenuBoolean} navbar>
                    <Nav navbar>
                        <NavItem>
                            <a href="/">Main</a>
                        </NavItem>
                        <NavItem>
                            <a  href="/register">SignUp</a>
                        </NavItem>
                        <NavItem>
                            <a href="/edit/user">Edit</a>
                        </NavItem>
                        <NavItem>
                            <a href="/delete/account">Delete</a>
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
                            <DeleteUser {...this.props}/>
                        </Route>
                        <Route path='/'>
                            <Table/>
                        </Route>
                        {/* <Route path='/genre/action'>
                            <Table/>
                        </Route> */}
                        {/* <Route path='/genre/action'>
                            <TableAct action={"Action"}/>
                        </Route> */}
                    </Switch>
                </ Router>
            </>
        )
    }
}