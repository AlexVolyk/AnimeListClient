import React, {Component} from "react";
import './navbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    } from "react-router-dom";
import { Collapse, NavbarToggler, Nav, NavItem, } from 'reactstrap';
import SignUp from "../User/userSign-Log/SignUp";
import Table from "../Main/Table/Table";
import TableAnimePage from "../Main/TableAnimePage/TableAnimePage";
import EditUser from "../User/EditUser/EditUser";
import DeleteUser from "../User/DeleteUser/DeleteUser";

type props = {
    userToken: any,
    userId: any,
    gui: Function,
    gut: Function,
    gun: Function,
    guia: Function,
    lou: Function
}
type dropdown = {
    dropDownMenuBoolean: boolean,
    dropDownGenresBoolean: boolean,
    dropDownTypeBoolean: boolean,
    deleteBoolean: boolean,
}


export default class Navbar extends Component<props, dropdown>{
    constructor(props: any){
        super(props)
        this.state = {
            dropDownMenuBoolean: false,
            dropDownGenresBoolean: false,
            dropDownTypeBoolean: false,
            deleteBoolean: false,
        }
        this.dropDownMenuToggle = this.dropDownMenuToggle.bind(this)
        this.dropDownGenresToggle = this.dropDownGenresToggle.bind(this)
        this.dropDownTypeToggle = this.dropDownTypeToggle.bind(this)
        this.deleteToggle = this.deleteToggle.bind(this)

    }

    dropDownMenuToggle = (): void => {
        this.setState({
            dropDownMenuBoolean: !this.state.dropDownMenuBoolean,
            dropDownGenresBoolean: false,
            dropDownTypeBoolean: false
        })
        // console.log(this.state.dropDownMenuBoolean)
    }

    dropDownGenresToggle = (): void => {
        this.setState({
            dropDownGenresBoolean: !this.state.dropDownGenresBoolean,
            dropDownMenuBoolean: false,
            dropDownTypeBoolean: false,
        })
        // console.log(this.state.dropDownGenresBoolean)
    }
    
    dropDownTypeToggle = (): void => {
        this.setState({
            dropDownTypeBoolean: !this.state.dropDownTypeBoolean,
            dropDownGenresBoolean: false,
            dropDownMenuBoolean: false,
        })
        // console.log(this.state.dropDownGenresBoolean)
    }

    deleteToggle = (): void => {
        this.setState({
            deleteBoolean: !this.state.deleteBoolean
        })
        // console.log(this.state.deleteBoolean)
    }

    render(){
        //? SORT FUNCTION
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

                // let genresNavbar = genres.map((genre: any, key: number) => {
        //     return(
        //     <NavItem key={key}>
        //         <a href={"/genre/" + genre.toLowerCase()}>{genre}</a>
        //     </NavItem>
        //     )
        // })
        let block1 = ["Action", "Adventure", "Cars", "Comedy", "Dementia", "Demons", "Drama", "Ecchi"]
        let block2 = ["Fantasy", "Game", "Harem", "Hentai", "Historical", "Horror", "Josei", "Kids"]
        let block3 = ["Madhouse", "Magic", "Magic Bus", "Martial Arts", "Mecha", "Military", "Music", "Mystery"]
        let block4 = ["Parody", "Police", "Psychological", "Romance", "Samurai", "Sci-Fi", "Seinen", "Shoujo"]
        let block5 = ["Shounen", "Shounen Ai", "Slice of Life", "Space", "Sports", "Super Power", "Supernatural", "Thriller"]
        let block6 = ["Vampire", "Yaoi", "Yuri"]

        let genresBlock1 = block1.map((genre: string, key: number) => {
            let gen;
            if(genre.includes(' ')) {
                gen = genre.replaceAll(' ', '_')
            } else {
                gen = genre
            }
            return(
            <NavItem key={key}>
                <a href={"/genre/" + gen.toLowerCase()} className="genres-item">{genre}</a>
            </NavItem>
            )
        })
        let genresBlock2 = block2.map((genre: string, key: number) => {
            let gen;
            if(genre.includes(' ')) {
                gen = genre.replaceAll(' ', '_')
            } else {
                gen = genre
            }
            return(
            <NavItem key={key}>
                <a href={"/genre/" + gen.toLowerCase()} className="genres-item">{genre}</a>
            </NavItem>
            )
        })
        let genresBlock3 = block3.map((genre: string, key: number) => {
            let gen;
            if(genre.includes(' ')) {
                gen = genre.replaceAll(' ', '_')
            } else {
                gen = genre
            }
            return(
            <NavItem key={key}>
                <a href={"/genre/" + gen.toLowerCase()} className="genres-item">{genre}</a>
            </NavItem>
            )
        })
        let genresBlock4 = block4.map((genre: string, key: number) => {
            let gen;
            if(genre.includes(' ')) {
                gen = genre.replaceAll(' ', '_')
            } else {
                gen = genre
            }
            return(
            <NavItem key={key}>
                <a href={"/genre/" + gen.toLowerCase()} className="genres-item">{genre}</a>
            </NavItem>
            )
        })
        let genresBlock5 = block5.map((genre: string, key: number) => {
            let gen;
            if(genre.includes(' ')) {
                gen = genre.replaceAll(' ', '_')
            } else {
                gen = genre
            }
            return(
            <NavItem key={key}>
                <a href={"/genre/" + gen.toLowerCase()} className="genres-item">{genre}</a>
            </NavItem>
            )
        })
        let genresBlock6 = block6.map((genre: string, key: number) => {
            let gen;
            if(genre.includes(' ')) {
                gen = genre.replaceAll(' ', '_')
            } else {
                gen = genre
            }
            return(
            <NavItem key={key}>
                <a href={"/genre/" + gen.toLowerCase()} className="genres-item">{genre}</a>
            </NavItem>
            )
        })


        //                 let b = animeTypes.sort(function (a, b){
        //     if(a > b){
        //         return 1
        //     } else if (a < b) {
        //         return -1
        //     } else {
        //         return 0
        //     }
        // })
        // console.log(b)
                let animeTypes = ["Movie", "ONA", "OVA", "TV"]
                let typeNavBar = animeTypes.map((type: string, key: number) => {
            return(
            <NavItem key={key}>
                <a href={"/type/" + type.toLowerCase()} className="type-item">{type}</a>
            </NavItem>
            )
        })

        let disp;
        if(window.location.pathname === '/delete/account') disp = <> <Table /> <DeleteUser {...this.props}/> </>
        
        return(
            <>
                <Router>
                    <div className="main-navbar-inner">
                        <div className="genres-block">
                            <NavbarToggler onClick={this.dropDownGenresToggle} className="mr-2 navbar-main-hover">Genres</NavbarToggler>
                            <Collapse isOpen={this.state.dropDownGenresBoolean} navbar className="genres-menu-inner">
                                <Nav navbar className="genres-menu">
                                    <li className="block-inner">{genresBlock1}</li>
                                    <li className="block-inner">{genresBlock2}</li>
                                    <li className="block-inner">{genresBlock3}</li>
                                    <li className="block-inner">{genresBlock4}</li>
                                    <li className="block-inner">{genresBlock5}</li>
                                    <li className="block-inner">{genresBlock6}</li>
                                </Nav>
                            </Collapse>
                        </div>
                        <div className="type-block">
                            <NavbarToggler onClick={this.dropDownTypeToggle} className="mr-2 navbar-main-hover">Type</NavbarToggler>
                            <Collapse isOpen={this.state.dropDownTypeBoolean} navbar className="type-menu-inner">
                                <Nav navbar className="type-menu">
                                    <li className='block-inner'>{typeNavBar}</li>
                                </Nav>
                            </Collapse>
                        </div>
                            <a href="/" className="main-link navbar-main-hover">Main</a>
                        <div className="user-menu-block">
                            <NavbarToggler onClick={this.dropDownMenuToggle} className="mr-2 navbar-main-hover">User</NavbarToggler>
                            <Collapse isOpen={this.state.dropDownMenuBoolean} navbar style={{right: '0'}} className="user-links-block">
                                <Nav navbar>
                                    <NavItem className="user-links-inner">
                                        <a href="/" onClick={() => this.props.lou()} className="user-link">Logout</a>
                                    </NavItem>
                                    <NavItem className="user-links-inner">
                                        <a href="/edit/user" className="user-link">Edit</a>
                                    </NavItem>
                                    <NavItem className="user-links-inner">
                                        <NavLink to="/delete/account" onClick={this.deleteToggle} className="user-link">Delete</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </div>

                    <Switch>
                        
                        <Route path='/register'>
                            <SignUp {...this.props}/>
                        </Route>
                        <Route path='/edit/user'>
                            <EditUser {...this.props}/>
                        </Route>
                        <Route path='/delete/account'>
                            {disp}
                        </Route>
                        <Route path='/page/:num'>
                            <Table/>
                        </Route>
                        {/* <Route path='/anime/:num/:animeName'>
                            <TableAnimePage />
                        </Route> */}
                        <Route path='/anime/:animeName'>
                            <TableAnimePage />
                        </Route>
                        <Route path='/login'>
                            <Table/>
                        </Route>
                        <Route path='/genre/:genre'> {/*//! type */}
                            <Table/>
                        </Route>
                        <Route path='/genre/:genre/page/:page'>
                            <Table/>
                        </Route>
                        <Route path='/type/:type'> {/*//! type */}
                            <Table/>
                        </Route>
                        <Route path='/type/:type/page/:num'> {/*//! type */}
                            <Table/>
                        </Route>
                        <Route path='/year/:year'> {/*//! year */}
                            <Table/>
                        </Route>
                        <Route path='/'>
                            <Table/>
                        </Route>
                    </Switch>
                </ Router>
            </>
        )
    }
}