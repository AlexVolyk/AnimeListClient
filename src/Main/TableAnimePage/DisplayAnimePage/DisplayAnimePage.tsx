import React, {Component} from "react";
// import DisplayAnimeList from "./Display/DisplayAnimeList";
// import './table.css'

type props = {
    oneAnime: any
}
type tp = {
    // oneAnime: Array<Object>,
    // genre: any
}
export default class TableAnimePage extends Component<props,tp>{
    constructor(props: any){
        super(props)
        this.state = {
            // oneAnime: [],
            // genre: ''
        }
        
        // this.getOneAnime = this.getOneAnime.bind(this)
        // this.setOneAnime = this.setOneAnime.bind(this)
        // this.setting = this.setting.bind(this)
    }


    // componentDidMount(){
    //     this.getOneAnime()
    //     console.log("componentWillMount")
    //     console.log(this.props, "++++++++++++++++++")
    // }


    render(){
        let oneAnime = this.props.oneAnime 
        console.log(this.props.oneAnime, "oneAnime")
        
        return(
            <div className="display-table">

                {oneAnime.map((anime: any, key: number) => {
                    let src = '/anime/' + anime.title_name.replaceAll(' ', "_")

                return(
                <div className="card-container" key={key}>
                    <img src={anime.img} alt={anime.title_name} title={anime.title_name} />
                    <div className="info">
                        <p>{anime.title_name}</p>
                        <p>{anime.title_english}</p>
                        <p>{anime.episodes}</p>
                        <p>{anime.duration}</p>
                        <p>{anime.rating}</p>
                        <p>{anime.description}</p>
                        <p>{anime.rating}</p>
                    </div>

            </div>
            )})}
            </div>
        )
    }
}


// {animes.map((anime: any, key: number) => {
//     let src = '/anime/' + anime.title_name.replaceAll(' ', "_")

// return(
// <div className="card-container" key={key}>
//     <img src={anime.img} alt={anime.title_name} title={anime.title_name} />
//     <div className="info">
//         <p>{anime.title_name}</p>
//         <p>{anime.title_english}</p>
//         <p>{anime.episodes}</p>
//         <p>{anime.duration}</p>
//         <p>{anime.rating}</p>
//         <p>{anime.description}</p>
//         <p>{anime.rating}</p>
//     </div>

// </div>
// )}}