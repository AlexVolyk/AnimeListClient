import React, {Component} from "react";
import { Form } from "react-bootstrap";
import sweetalert2 from "sweetalert2";
import './createanime.css'
import APIURL from '../helpers/environment'

type props = {
    adminToken: string,
}

type types = {
    title_name: string,
    title_english: string,
    description: string,
    episodes: number,
    studios: string,
    genres: string,
    duration: string,
    rating: string,
    img: string,
    animeType: string,
    youTubeVideo: string,
    parsUrl: string
}

export default class CreateAnime extends Component<props, types>{
    constructor(props: any){
        super(props)
        this.state = {
            title_name: "",
            title_english: "",
            description: "",
            episodes: 0,
            studios: "",
            genres: "",
            duration: "",
            rating: "",
            img: "",
            animeType: "",
            youTubeVideo: "",
            parsUrl: ""
        }

        this.setTitleName = this.setTitleName.bind(this);
        this.setTitleEnglish = this.setTitleEnglish.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setEpisodes = this.setEpisodes.bind(this);
        this.setStudios = this.setStudios.bind(this);
        this.setGenres = this.setGenres.bind(this);
        this.setDuration = this.setDuration.bind(this);
        this.setRating = this.setRating.bind(this);
        this.setImg = this.setImg.bind(this);
        this.setAnimeType = this.setAnimeType.bind(this);
        this.setYouTubeVideo = this.setYouTubeVideo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setParsUrl = this.setParsUrl.bind(this);
        this.parserFunction = this.parserFunction.bind(this);
    }

    setTitleName(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            title_name: e.target.value
        })
        // console.log(this.state.title_name)
    }
    
    setTitleEnglish(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            title_english: e.target.value
        })
        // console.log(this.state.title_english)
    }

    setDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            description: e.target.value
        })
        // console.log(this.state.description)
    }

    setEpisodes(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            episodes: +e.target.value // ! string in number
        })
        // console.log(this.state.episodes)
    }

    setStudios(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            studios: e.target.value
        })
        // console.log(this.state.studios)
    }

    setGenres(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            genres: e.target.value
        })
        // console.log(this.state.genres)
    }

    setDuration(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            duration: e.target.value
        })
        // console.log(this.state.duration)
    }

    setRating(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            rating: e.target.value
        })
        // console.log(this.state.rating)
    }

    setImg(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            img: e.target.value
        })
        // console.log(this.state.img)
    }

    setAnimeType(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            animeType: e.target.value
        })
        // console.log(this.state.animeType)
    }

    setYouTubeVideo(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            youTubeVideo: e.target.value
        })
        // console.log(this.state.youTubeVideo)
    }

    setParsUrl(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            parsUrl: e.target.value
        })
        // console.log(this.state.parsUrl)
    }

    setResetStates = () => {
        this.setState({
            title_name: "",
            title_english: "",
            description: "",
            episodes: 0,
            studios: "",
            genres: "",
            duration: "",
            rating: "",
            img: "",
            animeType: "",
            youTubeVideo: ""
        })
    }


    //! PARSE ANIME
    async parserFunction() {
        const URL = `${APIURL}/anime/pars`;
        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                pars: {
                    parsUrl: this.state.parsUrl
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `I_AM_ADMIN ${this.props.adminToken}`
            }),
        })
        .then(res => res.json())
        .then(json => {
            // console.log(json)

            // console.log(json.message)
            const Toast = sweetalert2.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                })
            if (json.parsThis !== undefined){

                let get = json.parsThis
                let regExp = new RegExp('([a-z])([A-Z])' ,"g")
                let regExpGanres = get.genres.replace(regExp, '$1, $2');

                this.setState({
                    title_name: get.title_name,
                    title_english: get.title_english,
                    description: get.description,
                    episodes: get.episodes,
                    studios: get.studios,
                    genres: regExpGanres,
                    duration: get.duration,
                    rating: get.rating,
                    img: get.img,
                    animeType: get.animeType,
                    youTubeVideo: get.youTubeVideo
                })

                Toast.fire({
                    icon: 'success',
                    title: json.message
                    })
                

            } else {
                if(!this.setResetStates){
                    Toast.fire({
                        icon: 'error',
                        title: json.message
                    })
                }
            }
        })
}


    //! CREATE ANIME
    handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const cURL = `${APIURL}/anime/create`;
        fetch(cURL, {
            method: "POST",
            body: JSON.stringify({
                anime: {
                    title_name: this.state.title_name,
                    title_english: this.state.title_english,
                    description: this.state.description,
                    episodes: this.state.episodes,
                    studios: this.state.studios,
                    genres: this.state.genres,
                    duration: this.state.duration,
                    rating: this.state.rating,
                    img: this.state.img,
                    animeType: this.state.animeType,
                    youTubeVideo: this.state.youTubeVideo
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `I_AM_ADMIN ${this.props.adminToken}`
            })
        })
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            const Toast = sweetalert2.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                })

            if (json.anime !== undefined){
                Toast.fire({
                    icon: 'success',
                    title: json.message
                    })
                
                this.setResetStates()

            } else {
                if(!this.setResetStates){
                    Toast.fire({
                        icon: 'error',
                        title: json.message
                    })
                }
            }
        })
        
    }

    render(){ 
        return( 
            <>               
            <input type="text" 
            name="parse" 
            id="parse"
            placeholder="Parse URL *MyAnimeList"
            onChange={this.setParsUrl}
            value={this.state.parsUrl}
            />
            <button className="create-btn" onClick={this.parserFunction}>Parse</button>
            <Form className=" create-form" onSubmit={this.handleSubmit}>
                <div className="container anime-form">
                    <div className="Title">
                        <label htmlFor="title_name">Title Name</label>
                        <input type="text" 
                        name="title_name" 
                        id="title_name"
                        className="width-for-all" 
                        placeholder="Title name"
                        onChange={this.setTitleName}
                        value={this.state.title_name}
                        required
                        />
                    </div>
                    <div className="Title_english">
                    <label htmlFor="title_english">Title English</label>
                        <input type="text" 
                        name="title_english" 
                        id="title_english"
                        className="width-for-all" 
                        placeholder="Title English" 
                        onChange={this.setTitleEnglish}
                        value={this.state.title_english}
                        required
                        />
                    </div>
                    <div className="Description">
                    <label htmlFor="description">Description</label>
                        <textarea 
                        name="description" 
                        id="description"
                        className="width-for-all" 
                        placeholder="Description"
                        onChange={this.setDescription}
                        value={this.state.description}
                        required
                        />
                    </div>
                    <div className="Episodes">
                    <label htmlFor="episodes">Episodes</label>
                        <input type="number" 
                        name="episodes" 
                        id="episodes"
                        className="width-for-all" 
                        placeholder="Episodes(12)"
                        onChange={this.setEpisodes}
                        value={this.state.episodes}
                        pattern="/[^0-9.]/"
                        required
                        />
                    </div>
                    <div className="Studios">
                    <label htmlFor="studios">Studios</label>
                        <input type="text" 
                        name="studios" 
                        id="studios"
                        className="width-for-all" 
                        placeholder="Studios"
                        onChange={this.setStudios}
                        value={this.state.studios}
                        required
                        />
                    </div>
                    <div className="Genres">
                    <label htmlFor="genres">Genres</label>
                        <input type="text" 
                        name="genres" 
                        id="genres"
                        className="width-for-all" 
                        placeholder="Genres"
                        onChange={this.setGenres}
                        value={this.state.genres}
                        required
                        />
                    </div>
                    <div className="Duration">
                    <label htmlFor="duration">Duration</label>
                        <input type="text" 
                        name="duration" 
                        id="duration"
                        className="width-for-all" 
                        placeholder="duration(23 min. per ep.)"
                        onChange={this.setDuration}
                        value={this.state.duration}
                        required
                        />
                    </div>
                    <div className="Rating">
                    <label htmlFor="rating">Rating</label>
                        <input type="text" 
                        name="rating" 
                        id="rating"
                        className="width-for-all" 
                        placeholder="Rating(R - 17+ (violence & profanity))"
                        onChange={this.setRating}
                        value={this.state.rating}
                        required
                        />
                    </div>
                    <div className="Poster">
                    <label htmlFor="img">Poster</label>
                        <input type="text" 
                        name="img" 
                        id="img"
                        className="width-for-all" 
                        placeholder="Anime image (poster)"
                        onChange={this.setImg}
                        value={this.state.img}
                        required
                        />
                    </div>
                    <div className="AnimeType">
                    <label htmlFor="animeType">Type</label>
                        <input type="text" 
                        name="animeType" 
                        id="animeType"
                        className="width-for-all" 
                        placeholder="Anime type"
                        onChange={this.setAnimeType}
                        value={this.state.animeType}
                        required
                        />
                    </div>
                    <div className="YouTube-URL">
                    <label htmlFor="youTubeVideo">YouTube URL</label>
                        <input type="text" 
                        name="youTubeVideo" 
                        id="youTubeVideo"
                        className="width-for-all" 
                        placeholder="URL from YouTube trailer"
                        onChange={this.setYouTubeVideo}
                        value={this.state.youTubeVideo}
                        required
                        />
                    </div>
                    </div>
                    <div className="create-btn-container">
                    <button className="create-btn" onClick={this.setResetStates}>Reset Fields</button>
                    <button type="submit" className="create-btn">Submit</button>
                </div>
            </Form>
            </>
        )
    }
}