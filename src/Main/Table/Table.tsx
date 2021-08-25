import React, {Component} from "react";
import Display from "./Display/Display";
import './table.css'

type tp = {
    smt: Array<Object>
}
export default class Table extends Component<{},tp>{
    constructor(props: any){
        super(props)
        this.state = {
            smt: [] 
        }
        
        this.getAnimes = this.getAnimes.bind(this)
        this.setAnimes = this.setAnimes.bind(this)
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
    componentWillMount(){
        this.getAnimes()
        console.log("componentWillMount")
    }


    render(){
        return(
            <div className="display-table">
                <Display {...this.state}/>
            </div>
        )
    }
}