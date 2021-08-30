import React,{Component} from "react";

import Header from "./Header/Header";
// import Mod from "./User/userSign-Log/Login";
// import Login from './User/userSign-Log/Login'
import AuthProvider from './Context/AuthContext'
// import AuthContext from './Context/AuthContext'
import AdminNavbar from "./Admin/AdminNavbar/AdminNavbar";
import AdminPanel from "./Admin/AdminPanel/AdminPanel"

import Main from './Main/Main'
import Footer from "./Footer/Footer";
// import Navbar from "./Navbar/Navbar";

type t = {
  userToken: any,
  userName: string,
  userIsAdmin: any,
  gut: any,
  gun: any,
  guia: any,


  adminToken: any,
  adminIsAdmin: boolean,
  gat: any,
  gaia: any,
  logOutForAdmin: any,
  logOutBoth:any,

  showAdminPanel: boolean,
  setShowAdminPanel: any,

  userId: number | string,
  gui: any


}

export default class App extends Component<{},t> {
  constructor(props: any){
    super(props)
    this.state = {
      userToken: '',
      userName: '',
      userIsAdmin: false,
      userId: '',
      gut: this.getUserToken,
      gun: this.getUserName,
      guia: this.getUserIsAdmin,
      gui: this.getUserId,


      adminToken: '',
      adminIsAdmin: false,
      gat: this.getAdminToken,
      gaia: this.getAdminIsAdmin,
      logOutForAdmin: this.logOutAdmin,
      logOutBoth: this.logOutUserAdmin,

      showAdminPanel: false,
      setShowAdminPanel: this.setShowAdminPanel
    }
    this.getUserToken = this.getUserToken.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.getUserIsAdmin = this.getUserIsAdmin.bind(this);
    this.logOutUser = this.logOutUser.bind(this);



    this.getAdminToken = this.getAdminToken.bind(this);
    this.getAdminIsAdmin = this.getAdminIsAdmin.bind(this);
    this.logOutAdmin = this.logOutAdmin.bind(this);
    this.logOutUserAdmin = this.logOutUserAdmin.bind(this);

    this.setShowAdminPanel = this.setShowAdminPanel.bind(this)

    this.getUserId = this.getUserId.bind(this);
  }

  getUserId(e: any ) {
    this.setState({
        userId: e
    })
    console.log(this.state.userId, "userId")
}
  componentDidMount(){
    if (localStorage.getItem('adminToken')){
      this.setState({adminToken: localStorage.getItem('adminToken')});
      // this.getAdminToken(localStorage.getItem('adminToken'));
      console.log("________________________")
    }
    if (localStorage.getItem('userToken')){
      this.setState({userToken: localStorage.getItem('userToken')});
      console.log(this.state.userToken ,"+++++++++++++++++++++++", "componentDidMount userToken")
    }
    if (localStorage.getItem('userIsAdmin')){
      this.setState({userIsAdmin: localStorage.getItem('userIsAdmin')});
      console.log(this.state.userIsAdmin ,"+++++++++++++++++++++++", "componentDidMount userToken")
    }
  }

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
    localStorage.setItem('userIsAdmin', this.state.userIsAdmin);
    console.log(this.state.userIsAdmin, "userIsAdmin")
  }

  logOutUser = () => {
    this.setState({
      userToken: '',
      userIsAdmin: false
    })
    localStorage.removeItem('userToken')
    localStorage.removeItem('userIsAdmin')
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
      adminIsAdmin: false,
      showAdminPanel: false
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
      showAdminPanel: false
    })
    localStorage.clear()
    console.log(this.state.userToken, "userToken")
    console.log(this.state.adminToken, "adminToken")
    console.log(this.state.adminIsAdmin, "adminIsAdmin")
    console.log(this.state.userIsAdmin, "userIsAdmin")
  }

  setShowAdminPanel = () => {
    this.setState({
      showAdminPanel: !this.state.showAdminPanel
    })
    console.log(this.state.showAdminPanel, "showAdminPanel")
  }

  render(){
    
    return(
      <div>
        {/* <AuthProvider > */}
          <Header {...this.state} />
          {this.state.adminIsAdmin ? <AdminNavbar {...this.state}/> : null}
          {/* <AdminNavbar {...this.state} /> */}
          {/* <Navbar /> */}
          <Main {...this.state}/>

          {this.state.showAdminPanel ? <AdminPanel {...this.state}/> : null}
          {/* <AdminPanel {...this.state}/> */}
          <Footer /> 
        {/* </AuthProvider> */}
      </div>
    )
  }
}

// Header.contextType = AuthProvider;