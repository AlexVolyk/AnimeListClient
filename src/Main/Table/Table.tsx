import React, {Component} from "react";
import DisplayAnimeList from "./Display/DisplayAnimeList";
import './table.css'

type tp = {
    smt: Array<Object>,
    genre: any
}
export default class Table extends Component<{},tp>{
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

    componentDidMount(){
        this.getAnimes()
        console.log("componentWillMount")
        console.log(this.props, "++++++++++++++++++")
    }


    render(){
        
        return(
            <div className="display-table">
                <DisplayAnimeList {...this.state}/>
            </div>
        )
    }
}