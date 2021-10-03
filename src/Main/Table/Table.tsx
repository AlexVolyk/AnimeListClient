import React, {Component} from "react";
import DisplayAnimeList from "./Display/DisplayAnimeList";
import './table.css'
import APIURL from '../../helpers/environment'


type props = {

}

type current = {
    animesFromFetch: Array<Object>,

}

export default class Table extends Component<props, current>{
    constructor(props: any){
        super(props)
        this.state = {
            animesFromFetch: [],
        }
        
        this.getAnimes = this.getAnimes.bind(this)
        this.setAnimesFromFetch = this.setAnimesFromFetch.bind(this)
    }

    setAnimesFromFetch(g: Array<Object>) {
        this.setState({
            animesFromFetch: [...g] //.reverse()  //! REVERSE
        })
        // console.log(this.state.smt, "PARENT")
    }
    
    getAnimes() {
        const URL = `${APIURL}/anime/all`
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                this.setAnimesFromFetch(json)
            })
    }

    componentDidMount(){
        this.getAnimes()
        // console.log("componentWillMount")
        // console.log(this.props, "++++++++++++++++++")
    }


    render(){
        
        return(
            <>
                <DisplayAnimeList {...this.state}/>
            </>
        )
    }
}