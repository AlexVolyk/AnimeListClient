import React, {Component} from "react";
import DisplayAct from "./Display/DisplayAnimeList";
import './table.css'

type tp = {
    smt: Array<Object>,
    genre: any
}
export default class TableAct extends Component<{action: any},tp>{
    constructor(props: any){
        super(props)
        this.state = {
            smt: [],
            genre: ''
        }
        
        this.getAnimes = this.getAnimes.bind(this)
        this.setAnimes = this.setAnimes.bind(this)
        // this.setting = this.setting.bind(this)
    }

    setAnimes(g: Array<Object>) {
        this.setState({
            smt: [...g]
        })
        console.log(this.state.smt, "PARENT")
    }
    
    getAnimes() {
        const URL = "http://localhost:3000/anime/all"
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setAnimes(json)
            })
    }
    // componentWillMount(){
    //     this.getAnimes()
    //     console.log("componentWillMount")
    //     console.log(this.props, "++++++++++++++++++")
    // }


    componentWillUnmount(){
        if(window.location.pathname == '/genres/action') this.setState({genre: "Action"})
    }

    render(){
        console.log(this.state.genre, "++++++++++++++++++")
        // if(window.location.pathname == '/genre/action') this.setState({genre: "Action"})
        console.log(window.location.pathname, "++++++++++++++++++")
        return(
            <div className="display-table">
                <DisplayAct {...this.state} {...this.props}/>
            </div>
        )
    }
}