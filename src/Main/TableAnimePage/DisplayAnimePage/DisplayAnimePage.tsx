import React, {Component} from "react";
import './displayanimepage.css'


type props = {
    oneAnime: Array<Object>,
}

type current = {
}

export default class TableAnimePage extends Component<props, current>{
    constructor(props: any){
        super(props)
        this.state = {

        }
        
    }


    render(){
        let oneAnime = this.props.oneAnime 
        // console.log(this.props.oneAnime, "oneAnime")
        
        return(
                <>

                    {oneAnime.map((anime: any, key: number) => {
                        // console.log(anime)
                    return(
                    <div className="anime-page" key={key}>
                        <div className="anime-page-top">
                            <img src={anime.img} alt={anime.title_name} title={anime.title_name} />
                            <div className="anime-top-info">
                                <p className="anime-title">{anime.title_name}</p>
                                <p><span>English Title: </span>{anime.title_english}</p>
                                <p><span>Duration: </span>{anime.duration}</p>
                                <p><span>Type: </span>{anime.animeType}</p>
                                <p><span>Genres: </span>{anime.genres}</p>
                                <p><span>Episodes: </span>{anime.episodes}</p>
                                <p><span>Rating: </span>{anime.rating}</p>
                                <p><span>Studios: </span>{anime.studios}</p>

                            </div>
                            <div className="iframe-container">
                                <iframe className="responsive-iframe" width="420" height="315" src={anime.youTubeVideo} title={anime.title_name} allowFullScreen/>
                            </div>
                        </div>
                        <div className="anime-page-info">
                            <p><span>Description: </span>{anime.description}</p>
                        </div>
                    </div>
                        )
                    })
                }
            </>        
        )
    }
}