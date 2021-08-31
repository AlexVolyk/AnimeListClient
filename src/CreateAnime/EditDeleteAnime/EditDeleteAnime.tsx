import React, {Component} from "react";
import { BsSearch } from "react-icons/bs";
import sweetalert2 from "sweetalert2";
import DisplayEditDelete from "./DisplayEditDelete";
import './editdeleteanime.css'


type types = {
    findName: string,
    title_name: string,
    title_english: string,
    description: string,
    episodes: number | string,
    studios: string,
    genres: string,
    duration: string,
    rating: string,
    img: string,
    youTubeImg: string,
    youTubeVideo: string,
    parseUrl: string,
    getFind: any
}

export default class EditAnimeDelete extends Component<{adminToken: any}, types>{
    constructor(props: any){
        super(props)
        this.state = {
            findName: "",
            title_name: "",
            title_english: "",
            description: "",
            episodes: "",
            studios: "",
            genres: "",
            duration: "",
            rating: "",
            img: "",
            youTubeImg: "",
            youTubeVideo: "",
            parseUrl: "",
            getFind: [] 
        }
        
        this.findAnime = this.findAnime.bind(this)
        this.setFindName = this.setFindName.bind(this)
        this.setGetFind = this.setGetFind.bind(this)
    }
    setFindName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            findName: e.target.value
        })
        // console.log(this.state.findName, "findName")
    }

    setGetFind(e: any) {
        this.setState({
            getFind: [e]
        })
        // console.log(this.state.getFind, "getFind")
    }

    findAnime(){
        const URL = `http://localhost:3000/anime/find/${this.state.findName}`;
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                const Toast = sweetalert2.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })
                
                if(json.find !== null && json.find.length !== 0){
                    sweetalert2.fire({
                        position: 'center',
                        title: json.message,
                        timer: 2000,
                        icon: 'success'
                    })
                    Toast.fire({
                        icon: 'success',
                        title: json.message
                    })
                    this.setGetFind(json.find)
                    // console.log(json.find)

                } else{
                    sweetalert2.fire({
                        position: 'center',
                        title: "Not Found",
                        timer: 2000,
                        icon: 'error'
                    })
                    
                    Toast.fire({
                        icon: 'error',
                        title: "Not Found"
                    })
                    
                    // console.log(json.find)

                }
            })
        
    }

    render(){
        return(
            <>
            <div className="search-inner">
            <button onClick={this.findAnime} className="search-btn" autoFocus><BsSearch /></button>
                <input type="text"
                placeholder="anime title"
                value={this.state.findName}
                onChange={this.setFindName}
                className="search-input"
                autoFocus/>
                <DisplayEditDelete {...this.state} {...this.props} />
            </div>
            </>
        )
    }
}