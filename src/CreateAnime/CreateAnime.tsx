import React, {Component} from "react";

type types = {
    title_name: string,
    title_english: string,
    description: string,
    episodes: number | string,
    studios: string,
    genres: string,
    duration: string,
    rating: string,
    img: string,
    href: string
}

export default class CreateAnime extends Component<{},types>{
    constructor(props: any){
        super(props)
        this.state = {
            title_name: "",
            title_english: "",
            description: "",
            episodes: "",
            studios: "",
            genres: "",
            duration: "",
            rating: "",
            img: "",
            href: ""
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
        this.setHref = this.setHref.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setTitleName(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            title_name: e.target.value
        })
        console.log(this.state.title_name)
    }
    
    setTitleEnglish(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            title_english: e.target.value
        })
        console.log(this.state.title_english)
    }

    setDescription(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            description: e.target.value
        })
        console.log(this.state.description)
    }

    setEpisodes(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            episodes: +e.target.value
        })
        console.log(this.state.episodes)
    }

    setStudios(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            studios: e.target.value
        })
        console.log(this.state.studios)
    }

    setGenres(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            genres: e.target.value
        })
        console.log(this.state.genres)
    }

    setDuration(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            duration: e.target.value
        })
        console.log(this.state.duration)
    }

    setRating(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            rating: e.target.value
        })
        console.log(this.state.rating)
    }

    setImg(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            img: e.target.value
        })
        console.log(this.state.img)
    }

    setHref(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            href: e.target.value
        })
        console.log(this.state.href)
    }
    setResetStates() {
        this.setState({
            title_name: "",
            title_english: "",
            description: "",
            episodes: "",
            studios: "",
            genres: "",
            duration: "",
            rating: "",
            img: "",
            href: ""
        })
    }
    
    handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const cURL = "http://localhost:3000/anime/create"
        fetch(cURL, {
            method: "POST",
            headers: new Headers({
                "Conten-Type": "application/json",
                // "Authorization": `I_AM_ADMIN ${}`
            }),
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
                    href: this.state.href
                }
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setResetStates()
        })
        
    }

    render(){ 
        return(
            <>
                <form>
                    <input type="text" 
                    name="title_name" 
                    id="title_name" 
                    placeholder="Title name"
                    onChange={this.setTitleName}
                    value={this.state.title_name}/>
                    <input type="text" 
                    name="title_english" 
                    id="title_english" 
                    placeholder="Title English" 
                    onChange={this.setTitleEnglish}
                    value={this.state.title_english}/>
                    <input type="text" 
                    name="description" 
                    id="description" 
                    placeholder="Description"
                    onChange={this.setDescription}
                    value={this.state.description}
                    />
                    <input type="number" 
                    name="episodes" 
                    id="episodes" 
                    placeholder="Episodes(How many)[number]"
                    onChange={this.setEpisodes}
                    value={this.state.episodes}
                    />
                    <input type="text" 
                    name="studios" 
                    id="studios" 
                    placeholder="Studios"
                    onChange={this.setStudios}
                    value={this.state.studios}
                    />
                    <input type="text" 
                    name="genres" 
                    id="genres" 
                    placeholder="Genres"
                    onChange={this.setGenres}
                    value={this.state.genres}
                    />
                    <input type="text" 
                    name="duration" 
                    id="duration" 
                    placeholder="duration(23m, 1hr 23mn)"
                    onChange={this.setDuration}
                    value={this.state.duration}
                    />
                    <input type="text" 
                    name="rating" 
                    id="rating" 
                    placeholder="Rating"
                    onChange={this.setRating}
                    value={this.state.rating}
                    />
                    <input type="text" 
                    name="img" 
                    id="img" 
                    placeholder="Anime picture or poster"
                    onChange={this.setImg}
                    value={this.state.img}
                    />
                    <input type="text" 
                    name="href" 
                    id="href" 
                    placeholder="Url on YouTube trailer"
                    onChange={this.setHref}
                    value={this.state.href}
                    />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}