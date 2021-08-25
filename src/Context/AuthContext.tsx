import React, {Component} from "react";

const AuthContext = React.createContext({}); // !

type contextTypes = {
    username: string,
    usrt: string,
    // usrtffff: any
}
export default class AuthProvider extends Component<{},contextTypes> {
    constructor(props: any){
        super(props)
        this.state = {
            username: "username",
            usrt: "usrt"
            // usrtffff: this.usrtf
        }
        this.usrtf = this.usrtf.bind(this)
    }

    usrtf = (e:any) => {
        this.setState({
            usrt: e
        })
        console.log(this.state.usrt, "sss")
    }
    render(){
        const {username, usrt} = this.state;
        let {usrtf} = this;
        return(
            <AuthContext.Provider value={{
                username,
                usrt,
                usrtf
            }}>
                {this.props.children}
            </ AuthContext.Provider>
        )
    }
}