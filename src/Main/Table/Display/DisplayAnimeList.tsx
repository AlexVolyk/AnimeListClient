import React, {Component} from "react";
import './displayanimelist.css'

type props = {
    smt: Array<Object>,
}
type current = {
    sss: string, //!
}


export default class DisplayAnimeList extends Component<props, current>{
    constructor(props: any){
        super(props)
        this.state = {
            sss: ''
            
        }
    }

    componentDidMount(){
        let getLoc = window.location.pathname
        let genr = getLoc.replace('/genre/', '')
        // console.log(genr, "ganr")
        this.setState({sss: genr})
    }

    render(){
        var animes;
        if(this.state.sss === "/delete/account") {
            animes = this.props.smt
            // console.log(window.location.pathname)

        } else if(this.state.sss === "/login") { 
            animes = this.props.smt
            // console.log(window.location.pathname)

        } else if (this.state.sss !== '/')  {
            let filtered = this.props.smt.filter((anime: any) => {
                let genre = anime.genres.toLowerCase()
                let animeArr = genre.includes(this.state.sss)
                return animeArr
            })
            animes = filtered
            // console.log(window.location.pathname)
        } else {
            animes = this.props.smt
            // console.log(animes, 'animes')
        }
        
        return(
            <>
            {animes.length !== 0 && animes[0] !== null ? (
                
                animes.map((anime: any, key: number) => {
                    
                    let src = '/anime/' + anime.title_name.replaceAll(' ', "_")

                return(
                <div className="card-container" key={key}>
                <a href={src}><img src={anime.img} alt={anime.title_name} title={anime.title_name} className="anime-list-img" /></a>
                <div className="info">
                    <p><span>Title: </span>{anime.title_name}</p>
                    <p><span>English Title: </span>{anime.title_english}</p>
                    <p><span>Type: </span>{anime.animeType}</p>
                    <p><span>Episodes: </span>{anime.episodes}</p>
                    <p><span>Duration: </span>{anime.duration}</p>
                </div>
            </div>
            )}
            )
            ) : (
                <div className="not-found-animes">NOT FOUND</div>
                )
                }
            </>
        )
    }
}