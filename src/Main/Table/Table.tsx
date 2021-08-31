import React, {Component} from "react";
import DisplayAnimeList from "./Display/DisplayAnimeList";
import './table.css'
import APIURL from '../../helpers/environment'


type props = {

}

type current = {
    smt: Array<Object>,

}

export default class Table extends Component<props, current>{
    constructor(props: any){
        super(props)
        this.state = {
            smt: [],
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
        const URL = `${APIURL}/anime/all`
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                this.setAnimes(json)
            })
    }

    componentDidMount(){
        this.getAnimes()
        // console.log("componentWillMount")
        // console.log(this.props, "++++++++++++++++++")
    }


    render(){
        
        return(
            <div className="display-table">
                <DisplayAnimeList {...this.state}/>
            </div>
        )
    }
}