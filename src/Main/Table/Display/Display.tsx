import React, {Component} from "react";
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import './display.css'

// interface IRecipeProps {
//     // ingredients?: string[];
//     title?: string,
//     img?: string,
//     // instructions?: string;
//   }
type prop = {
    smt: any
}
type t = {
    sss: any
}

export default class Display extends Component<prop, t>{
    constructor(props: any){
        super(props)
        this.state = {
            sss: ''
        }
        // this.show = this.show.bind(this)
    }
    // show(){
    //     let animes1: any = this.props
    //     // console.log(animes1)
    //     let i:number = 0
    //     // console.log(animes1[i])
    //     let animes: any = animes1[i]
    //     console.log(animes, "CHILD")
    // }

    render(){
        // let animes1: any = this.props.smt
        // // console.log(animes1)
        // let i:number = 0
        // // console.log(animes1[i])
        // let animes: any = animes1[i]
        // console.log(animes, "CHILD")
        // // console.log(animes[i].id, "CHILD")
        // for (let j = 0; j < animes.length; j++) {
        //     console.log(animes[j]);
        // }
        let animes = this.props.smt
        // console.log(a)
        let a = "WTF";
        // for (let j = 0; j < a.length; j++) {
        //     console.log(a[j]);
        // }
        // console.log(this.props.smt[0])
        return(
        //     <div className="card-container">
        //     <img src='https://cdn.myanimelist.net/images/anime/1811/115541.jpg' alt="" />
        //     <div className="info">
        //         <p>Vanitas no Karte</p>
        //         <p>The Case Study of Vanitas</p>
        //         <p>12</p>
        //         <p>23 min. per ep.</p>
        //         <p>Bones</p>
        //         <p>Scorned by others of his kind for being born under a blue moon, the vampire Vanitas grew afraid and desolate. According to legend, he created a cursed grimoire known as the "Book of Vanitas," and it is said he would one day use it to bring retribution upon all vampires of the crimson moon. In 19th century Paris, Noé Archiviste is searching for the fabled Book of Vanitas. Whilst traveling aboard an airship, he is saved from a vampire attack by an eccentric doctor who calls himself Vanitas and carries the very tome he seeks. Ironically, the self-proclaimed vampire specialist is a mere human who inherited both his name and the book from his master, the same Vanitas of legend. As the odd case of the Charlatan's Parade crops up, the doctor's ability to restore sanity to vampires by recovering their true name will prove most beneficial.</p>
        //         <p>R - 17+ (violence & profanity)</p>
        //     </div> 
        // </div>
            // <div></div>
            // <div>{animes.title_name}</div>
            // animes.map((anime: any) => {
            //     <p>{anime}</p>
            //     console.log(anime)
            // })
            <>
            {this.props.smt.map((anime: any) => {
                return(
                <div className="card-container">
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
            </div>
            // console.log(anime)
            )})}
            </>
            // <div className="card-container">
            //     <p>{animes.rating}</p>
            //     <img src={animes.img} alt="" />
            //     <div className="info">
            //         <p>{animes.title_name}</p>
            //         <p>{animes.title_english}</p>
            //         <p>{animes.episodes}</p>
            //         <p>{animes.duration}</p>
            //         <p>{animes.rating}</p>
            //         <p>{animes.description}</p>
            //         <p>{animes.rating}</p>
            //     </div> 
            // </div>
        )
    }
}