import React, {Component} from "react";
import './displayeditdelete.css'
import sweetalert2 from "sweetalert2";
import EditAnime from './EditAnime/EditAnime'
import APIURL from '../../helpers/environment'

type types = {
    editBoolean: boolean,
    toggleEditFunction: any
}

export default class DisplayEditDelete extends Component<{getFind: any, adminToken: any}, types>{
    constructor(props: any){
        super(props)
        this.state = {
            editBoolean: false,
            toggleEditFunction: this.toggleEdit
        }
        this.deleteAnime = this.deleteAnime.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit = () => {
        this.setState({
            editBoolean: !this.state.editBoolean
        })
        // console.log(this.state.editBoolean, "editBoolean")
    }

    //! DELETE ANIME
    async deleteAnime() {
        let getFindArr = await {...this.props.getFind};
        // console.log(getFindArr)

        const Toast = sweetalert2.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            })
            // json.find !== null && json.find.length !== 0
        if(getFindArr[0] !== undefined) {
            const ID = await getFindArr[0].id;

            const URL = `${APIURL}/anime/delete/${ID}`
            // console.log(URL)
            fetch(URL, ({
                method: "DELETE",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": `I_AM_ADMIN ${this.props.adminToken}`
                })
            }))
            .then(res => res.json())
            .then(json => {
                    Toast.fire({
                        icon: 'success',
                        title: json.message
                        })
            })

        } else {
            Toast.fire({
                icon: 'error',
                title: "Not Found. WHY? I don't know"
                })
        }

    }

    render(){
        let getAnime = this.props.getFind
        // console.log(getAnime)

        return(
            <>
            {this.state.editBoolean ? <EditAnime {...this.state} {...this.props} /> : null}
            {this.props.getFind[0] !== undefined ? 
            (<div className="action-btn-inner">
                <button className="action-btn edit-btn-anime" onClick={this.toggleEdit}>Edit</button>
                <button className="action-btn delete-btn-anime" onClick={this.deleteAnime}>Delete</button>
            </div>)
            : (null)
            }
                <table className="find-anime-adm">
                    <tr className="table-rows">
                        <td className="specific">Img</td>
                        <td className="specific">Title</td>
                        <td className="specific">English Title</td>
                        <td className="common">Episodes</td>
                        <td className="common">Duration</td>
                        <td className="common">Rating</td>
                        <td className="specific">Description</td>
                        <td className="common">Anime Type</td>
                        <td className="specific">Genre</td>
                        <td className="specific">YouTube Video</td>
                    </tr>
                {getAnime.map((anime: any) => {
                return(
                    <tr className="table-rows">
                        <td className="specific"><img src={anime.img} alt={anime.title_name} title={anime.title_name} className="anime-find-img" /></td>
                        <td className="specific">{anime.title_name}</td>
                        <td className="specific">{anime.title_english}</td>
                        <td className="common">{anime.episodes}</td>
                        <td className="common">{anime.duration}</td>
                        <td className="common">{anime.rating}</td>
                        <td className="specific specific-description"><div style={{height: '400px', fontSize: '13px'}}>{anime.description}</div></td>
                        <td className="common">{anime.animeType}</td>
                        <td className="specific">{anime.genres}</td>
                        <td className="specific">{anime.youTubeVideo}</td>
                    </tr>
                )})}
                </table>
            </>
        )
    }
}