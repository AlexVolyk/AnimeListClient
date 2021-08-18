import React,{Component} from "react";

import Header from "./Header/Header";
import ModalExample from "./ModalExample";
import Mod from "./Auth/userSign-Log/Mod";
import Login from './Auth/userSign-Log/Login'
// reactstrap

export default class App extends Component {
  constructor(props: any){
    super(props)
    // this.state
  }
  render(){
    return(
      <div>
        <Header />
        {/* <Mod/> */}
      </div>
    )
  }
}