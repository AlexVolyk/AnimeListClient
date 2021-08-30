import React, {Component} from "react";
import sweetalert2 from "sweetalert2";
import {Modal, Form} from 'react-bootstrap';
import './editanime.css'



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
    youTubeImg: string,
    youTubeVideo: string,
}

export default class EditAnime extends Component<{adminToken: any, toggleEditFunction: any, getFind: any}, types>{
    constructor(props: any){
        super(props)
        const editObj = this.props.getFind[0]
        this.state = {
            title_name: editObj.title_name,
            title_english: editObj.title_english,
            description: editObj.description,
            episodes: editObj.episodes,
            studios: editObj.studios,
            genres: editObj.genres,
            duration: editObj.duration,
            rating: editObj.rating,
            img: editObj.img,
            youTubeImg: editObj.youTubeImg,
            youTubeVideo: editObj.youTubeVideo,
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
        this.setYouTubeImg = this.setYouTubeImg.bind(this);
        this.setYouTubeVideo = this.setYouTubeVideo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    setDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            description: e.target.value
        })
        console.log(this.state.description)
    }

    setEpisodes(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            episodes: +e.target.value // ! string in number
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

    setYouTubeImg(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            youTubeImg: e.target.value
        })
        console.log(this.state.youTubeImg)
    }

    setYouTubeVideo(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            youTubeVideo: e.target.value
        })
        console.log(this.state.youTubeVideo)
    }

    closeModal() {
        this.props.toggleEditFunction()
    }


    async handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const getFindArr = await {...this.props.getFind};
        const ID = await getFindArr[0].id;

        const URL = `http://localhost:3000/anime/edit/${ID}`;
        fetch(URL, {
            method: "PUT",
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
                    youTubeImg: this.state.youTubeImg,
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
            console.log(json)
            const Toast = sweetalert2.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                })
            if (json.update !== undefined){

                Toast.fire({
                    icon: 'success',
                    title: json.message
                    })
                
            } else {
                
                Toast.fire({
                    icon: 'error',
                    title: json.message
                })
            }
        })
        
    }


    render(){
        // let getFindArr = {...this.props.getFind};
        // // const ID = await getFindArr[0].id;
        // let obj = getFindArr[0]
        // console.log(obj, "obj")
        return(
            <>
        <Modal
        show={true}
        // aria-labelledby="contained-modal-title-vcenter"
        // centered
        onHide={this.closeModal}
        fullscreen={true}
        >
            <Modal.Header closeButton>
                <Modal.Title id='ModalHeader' onClick={this.closeModal}>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{margin: "0 auto"}}>
            <Form className="create-form" onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="TItle">
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
                        <input type="number" 
                        name="episodes" 
                        id="episodes"
                        className="width-for-all" 
                        placeholder="Episodes(12)"
                        onChange={this.setEpisodes}
                        value={this.state.episodes}
                        required
                        />
                    </div>
                    <div className="Studios">
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
                        <input type="text" 
                        name="duration" 
                        id="duration"
                        className="width-for-all" 
                        placeholder="duration(23 min. per ep.)"
                        onChange={this.setDuration}
                        value={this.state.duration}
                        pattern="/[^0-9.]/"
                        required
                        />
                    </div>
                    <div className="Rating">
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
                    <div className="Screensaver">
                        <input type="text" 
                        name="youTubeImg" 
                        id="youTubeImg"
                        className="width-for-all" 
                        placeholder="URL from screensaver"
                        onChange={this.setYouTubeImg}
                        value={this.state.youTubeImg}
                        required
                        />
                    </div>
                    <div className="YouTube-URL">
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
                    <div className="edit-btn-container">
                    <button type="submit" className="edit-btn">Submit</button>
                </div>
            </Form>
            </Modal.Body>
        </Modal>
            </>
        )
    }
}