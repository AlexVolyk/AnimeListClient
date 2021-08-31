import React, {Component} from "react";
import DisplayAnimePage from './DisplayAnimePage/DisplayAnimePage'
import APIURL from '../../helpers/environment'

type props = {

}

type current = {
    oneAnime: Array<Object>
}
export default class TableAnimePage extends Component<props, current>{
    constructor(props: any){
        super(props)
        this.state = {
            oneAnime: [],
        }
        
        this.getOneAnime = this.getOneAnime.bind(this)
        this.setOneAnime = this.setOneAnime.bind(this)
    }

    setOneAnime(g: Array<Object>) {
        this.setState({
            oneAnime: [...g]
        })
        // console.log(this.state.oneAnime, "TableAnimePage")
    }
    
    getOneAnime() {
        const URL = `${APIURL}/anime/all`
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                console.log(json, "TableAnimePage")
                let findName = window.location.pathname.replace('/anime/', '')
                let findThisName = findName.replaceAll('_', ' ')
                let regEx = new RegExp(`^${findThisName}$`)

                console.log(regEx, "regEx")
                let a = json.filter((anime:any) => anime.title_name.match(regEx))
                // console.log(a, "=======================")
                this.setOneAnime(a)
            })
    }

    componentDidMount() {
        this.getOneAnime()
        // console.log("--------------")
        // console.log(this.props, "++++++++++++++++++")
    }


    render(){
        // console.log("regEx")
        return(
            <div className="display-table">
                <DisplayAnimePage {...this.state}/>
            </div>
        )
    }
}