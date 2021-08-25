import React,{Component} from "react";

import Header from "./Header/Header";
import Mod from "./Auth/userSign-Log/Mod";
// import Login from './Auth/userSign-Log/Login'
import AuthProvider from './Context/AuthContext'
// import AuthContext from './Context/AuthContext'
import AdminNavbar from "./Admin/AdminNavbar/AdminNavbar";

import Main from './Main/Main'
import Footer from "./Footer/Footer";

type t = {
  userToken: string,
  userName: string,
  userIsAdmin: boolean,
  gut: any,
  gun: any,
  guia: any,


  adminToken: string,
  adminIsAdmin: boolean,
  gat: any,
  gaia: any,
  logOutForAdmin: any,
  logOutBoth:any
}

export default class App extends Component<{},t> {
  constructor(props: any){
    super(props)
    this.state = {
      userToken: '',
      userName: '',
      userIsAdmin: false,
      gut: this.getUserToken,
      gun: this.getUserName,
      guia: this.getUserIsAdmin,


      adminToken: '',
      adminIsAdmin: false,
      gat: this.getAdminToken,
      gaia: this.getAdminIsAdmin,
      logOutForAdmin: this.logOutAdmin,
      logOutBoth: this.logOutUserAdmin,
    }
    this.getUserToken = this.getUserToken.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.getUserIsAdmin = this.getUserIsAdmin.bind(this);
    this.logOutUser = this.logOutUser.bind(this);



    this.getAdminToken = this.getAdminToken.bind(this);
    this.getAdminIsAdmin = this.getAdminIsAdmin.bind(this);
    this.logOutAdmin = this.logOutAdmin.bind(this);
    this.logOutUserAdmin = this.logOutUserAdmin.bind(this);
  }
  // componentDidMount(){
  //   if (localStorage.getItem('token')){
  //     this.setUserToken(localStorage.getItem('token'));
  //   }
  // }

  // updateToken (newToken: any) {
  //   localStorage.setItem('token', newToken);
  //   this.setUserToken(newToken);
  //   console.log(newToken , '-----------');
  // }
//! USER
  getUserToken = (e: any ) => {
    this.setState({
        userToken: e
    })
    localStorage.setItem('userToken', this.state.userToken);
    // setSessionToken(userToken);
    console.log(this.state.userToken, "userToken")
  }

  getUserName = (e: any ) => {
    this.setState({
      userName: e
    })
    console.log(this.state.userName, "userName")
  }

  getUserIsAdmin = (e: any ) => {
    this.setState({
      userIsAdmin: e
    })
    console.log(this.state.userIsAdmin, "userIsAdmin")
  }

  logOutUser = () => {
    this.setState({
      userToken: '',
      userIsAdmin: false
    })
    localStorage.removeItem('userToken')
    console.log(this.state.userIsAdmin, "userIsAdmin")
    console.log(this.state.userToken, "userToken")
  }
  
// ! ADMIN
  getAdminToken = (e: any ) => {
    this.setState({
      adminToken: e
    })
    localStorage.setItem('adminToken', this.state.adminToken);
    console.log(this.state.adminToken, "adminToken")
  }

  getAdminIsAdmin = (e: any ) => {
    this.setState({
      adminIsAdmin: e
    })
    console.log(this.state.adminIsAdmin, "adminIsAdmin")
  }

  logOutAdmin = () => {
    this.setState({
      adminToken: '',
      adminIsAdmin: false
    })
    localStorage.removeItem('adminToken')
    console.log(this.state.adminIsAdmin, "adminIsAdmin")
    console.log(this.state.adminToken, "adminToken")
  }

  logOutUserAdmin = () => {
    this.setState({
      adminToken: '',
      userToken: '',
      adminIsAdmin: false,
      userIsAdmin: false,
    })
    localStorage.clear()
    console.log(this.state.userToken, "userToken")
    console.log(this.state.adminToken, "adminToken")
    console.log(this.state.adminIsAdmin, "adminIsAdmin")
    console.log(this.state.userIsAdmin, "userIsAdmin")
  }

  render(){
    return(
      <div>
        {/* <AuthProvider > */}
          <Header {...this.state} />
          {/* {this.state.adminIsAdmin ? <AdminNavbar {...this.state}/> : null} */}
          <AdminNavbar {...this.state} />
          <Main />
          <Footer />
        {/* </AuthProvider> */}
      </div>
    )
  }
}

// Header.contextType = AuthProvider;