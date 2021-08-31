import React, {Component} from "react";

import Header from "./Header/Header";
import sweetalert2 from "sweetalert2";

// import AuthProvider from './Context/AuthContext'
// import AuthContext from './Context/AuthContext'
import AdminNavbar from "./Admin/AdminNavbar/AdminNavbar";
import AdminPanel from "./Admin/AdminPanel/AdminPanel"

import Main from './Main/Main'
import Footer from "./Footer/Footer";

const logout = sweetalert2.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  })

type props = {

}

type info = {
  userToken: any,
  userName: string,
  userIsAdmin: any,
  gut: Function,
  gun: Function,
  guia: Function,
  lou: Function,

  adminToken: any,
  adminIsAdmin: boolean,
  gat: Function,
  gaia: Function,
  logOutForAdmin: Function,
  logOutBoth:Function,

  showAdminPanel: boolean,
  setShowAdminPanel: Function,

  userId: number | string | null,
  gui: Function

}

export default class App extends Component<props, info> {
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
      lou: this.logOutUser,


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

  getUserId = (e: number ) => {
    this.setState({
        userId: e
    })
    console.log(this.state.userId, "userId")
}
  componentDidMount(){
    if (localStorage.getItem('adminToken')){
      this.setState({adminToken: localStorage.getItem('adminToken')});
      // console.log("________________________")
    }
    if (localStorage.getItem('userToken')){
      this.setState({userToken: localStorage.getItem('userToken')});
      // console.log(this.state.userToken ,"+++++++++++++++++++++++", "componentDidMount userToken")
    }
    if (localStorage.getItem('userIsAdmin')){
      this.setState({userIsAdmin: localStorage.getItem('userIsAdmin')});
      // console.log(this.state.userIsAdmin ,"+++++++++++++++++++++++", "componentDidMount userIsAdmin")
    }
    if (sessionStorage.getItem('userId')){
      this.setState({userId: sessionStorage.getItem('userId')});
      // console.log(this.state.userId ,"+++++++++++++++++++++++", "componentDidMount userId")
    }
  }

  // updateToken (newToken: any) {
  //   localStorage.setItem('token', newToken);
  //   this.setUserToken(newToken);
  //   console.log(newToken , '-----------');
  // }
//! USER
  getUserToken = (e: string ) => {
    this.setState({
        userToken: e
    })
    localStorage.setItem('userToken', this.state.userToken);
    // console.log(this.state.userToken, "userToken")
  }

  getUserName = (e: string ) => {
    this.setState({
      userName: e
    })
    // console.log(this.state.userName, "userName")
  }

  getUserIsAdmin = (e: boolean ) => {
    this.setState({
      userIsAdmin: e
    })
    localStorage.setItem('userIsAdmin', this.state.userIsAdmin);
    // console.log(this.state.userIsAdmin, "userIsAdmin")
  }

  logOutUser = (): void => {
    this.setState({
      userToken: '',
      userIsAdmin: false,
      userName: '',
      userId: '',
      adminToken: ''
    })
    
    localStorage.removeItem('userToken')
    localStorage.removeItem('userIsAdmin')
    // console.log(this.state.userIsAdmin, "userIsAdmin")
    // console.log(this.state.userToken, "userToken")
    logout.fire({
      icon: 'success',
      title: "User seccessfully logout"
      })
  }
  
// ! ADMIN
  getAdminToken = (e: string ) => {
    this.setState({
      adminToken: e
    })
    localStorage.setItem('adminToken', this.state.adminToken);
    // console.log(this.state.adminToken, "adminToken")
  }

  getAdminIsAdmin = (e: boolean ) => {
    this.setState({
      adminIsAdmin: e
    })
    // console.log(this.state.adminIsAdmin, "adminIsAdmin")
  }

  logOutAdmin = (): void => {
    this.setState({
      adminToken: '',
      adminIsAdmin: false,
      showAdminPanel: false,

    })
    localStorage.removeItem('adminToken')
    // console.log(this.state.adminIsAdmin, "adminIsAdmin")
    // console.log(this.state.adminToken, "adminToken")
    logout.fire({
      icon: 'success',
      title: "Admin seccessfully logout"
      })
  }

  logOutUserAdmin = (): void => {
    this.setState({
      userToken: '',
      userIsAdmin: false,
      userName: '',
      userId: '',
      adminToken: '',
      adminIsAdmin: false,
      showAdminPanel: false,
    })
    localStorage.clear()

    // console.log(this.state.userToken, "userToken")
    // console.log(this.state.adminToken, "adminToken")
    // console.log(this.state.adminIsAdmin, "adminIsAdmin")
    // console.log(this.state.userIsAdmin, "userIsAdmin")

    logout.fire({
      icon: 'success',
      title: "Admin and User seccessfully logout"
      })
  }

  setShowAdminPanel = (): void => {
    this.setState({
      showAdminPanel: !this.state.showAdminPanel
    })
    // console.log(this.state.showAdminPanel, "showAdminPanel")
  }

  render(){
    
    return(
      <div>
        {/* <AuthProvider > */}
          <Header {...this.state} />
          {this.state.adminIsAdmin ? <AdminNavbar {...this.state}/> : null}
          <Main {...this.state}/>

          {this.state.showAdminPanel ? <AdminPanel {...this.state}/> : null}
          <Footer /> 
        {/* </AuthProvider> */}
      </div>
    )
  }
}

// Header.contextType = AuthProvider;