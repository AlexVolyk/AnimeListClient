import React, {Component} from "react";
import './display.css'
import Test from './Test'


type props = {
    smt: any,
}
type t = {
    sss: any,
}
type a = {
    k:any
}

export default class Display extends Component<props, t, a>{
    constructor(props: any){
        super(props)
        this.state = {
            sss: ''
        }
        // this.show = this.show.bind(this)
    }

    componentDidMount(){
        let getLoc = window.location.pathname
        let genr = getLoc.replace('/genre/', '')
        console.log(genr, "ganr")
        this.setState({sss: genr})
    }

    render(){
        var animes
        if(this.state.sss !== '/') {
            let filtered = this.props.smt.filter((anime: any) => {
                let genre = anime.genres.toLowerCase()
                let animeArr = genre.includes(this.state.sss)
                return animeArr
            })
            animes = filtered
            console.log(animes)

        } else  {
            animes = this.props.smt
            console.log(animes)
        }

        // console.log(filtered, "HERE")
        // let animes = filtered
        // console.log(animes)

        return(
            
        //     <div className="card-container">
        //     <img src='https://cdn.myanimelist.net/images/anime/1811/115541.jpg' alt="" />
        //     <div className="info">
        //         <p>Vanitas no Karte {this.state.sss}</p>
        //         <p>The Case Study of Vanitas</p>
        //         <p>12</p>
        //         <p>23 min. per ep.</p>
        //         <p>Bones</p>
        //         <p>Scorned by others of his kind for being born under a blue moon, the vampire Vanitas grew afraid and desolate. According to legend, he created a cursed grimoire known as the "Book of Vanitas," and it is said he would one day use it to bring retribution upon all vampires of the crimson moon. In 19th century Paris, Noé Archiviste is searching for the fabled Book of Vanitas. Whilst traveling aboard an airship, he is saved from a vampire attack by an eccentric doctor who calls himself Vanitas and carries the very tome he seeks. Ironically, the self-proclaimed vampire specialist is a mere human who inherited both his name and the book from his master, the same Vanitas of legend. As the odd case of the Charlatan's Parade crops up, the doctor's ability to restore sanity to vampires by recovering their true name will prove most beneficial.</p>
        //         <p>R - 17+ (violence & profanity)</p>
        //     </div> 
        // </div>
            <>
            {animes.length !== 0 && animes[0] !== null ? (
                animes.map((anime: any, key: number) => {
                return(
                <div className="card-container" key={key}>
                <img src={anime.img} alt="" />
                <div className="info">
                    <p>{anime.title_name}</p>
                    <p>{anime.title_english}</p>
                    <p>{anime.episodes}</p>
                    <p>{anime.duration}</p>
                    <p>{anime.rating}</p>
                    <p>{anime.description}</p>
                    <p>{anime.rating}</p>
                </div>
                {/* <Test k={key}/> */}
            </div>
            // console.log(anime)
            )})
            ) : (
                <div>NOT FOUND</div>
                )
                }
            </>
        )
    }
}