import React, {Component} from "react";
import './displayanimelist.css'
import Pagination from "../../Pagination/Pagination"

type props = {
    animesFromFetch: Array<Object>,
}

type current = {
    urlPath: string, //!
    firstAnimeIndex: any,
    lastAnimeindex: any,
    currentPage: any,
    currentAnime: any,
    animesPerPage: any,
    an: any,
}

type send = {
    totalAnimes: any,
    urlSend: any,
    
}


export default class DisplayAnimeList extends Component<props, current, send>{
    constructor(props: any){
        super(props)
        this.state = {
            urlPath: '',
            firstAnimeIndex: 0,
            lastAnimeindex: 0,
            currentPage: 1,
            animesPerPage: 3, //! how many animes
            currentAnime: 0,
            an: []
            
        }

    }
    
    

    componentDidMount(){
        let getLoc = window.location.pathname
        this.setState({urlPath: getLoc})
    }

    render(){
        let currentPage = this.state.currentPage;
        console.log(currentPage, 's-------------------------------------')
        currentPage = +this.state.urlPath.replace('/page/', '')

        // let urlPathname = this.state.urlPath;

        let one,
            two,
            page;
        one = this.state.urlPath.indexOf('/', 18)
        two = this.state.urlPath.length
        page = this.state.urlPath.slice(one, two)
        page = +page.replace('/', '')
        // console.log(two, 'two')
        // console.log(rrr, 'rrr') //\\\\\\\\\\\\\\\\\\\\\\\\\\
        let lastIndex = currentPage * this.state.animesPerPage
        lastIndex = page * this.state.animesPerPage
        let firstIndex = lastIndex - this.state.animesPerPage

        if(this.state.urlPath.includes('genre') && this.state.urlPath.includes('page') ) {
            one = this.state.urlPath.indexOf('/', 18)
            two = this.state.urlPath.length
            page = this.state.urlPath.slice(one, two)
            page = +page.replace('/', '')
            lastIndex = page * this.state.animesPerPage
        }

        let defFirstIndex = 0,
            defLastIndex = this.state.animesPerPage; //! how many animes

        var animeGenre:any,
            filtered:any;

        var currrentP,
            animes:any = this.props.animesFromFetch //.reverse(); //! REVERSE

        var path;
        
        console.log(window.location.pathname , "here")
        console.log(this.state.urlPath , "here")

        if(this.state.urlPath === "/delete/account" || this.state.urlPath === "/login") {
            currrentP = animes.slice(firstIndex, lastIndex)

            console.log(animes,'WTF')
            console.log(currrentP, "WTF")
            console.log(window.location.pathname)


        } else if (this.state.urlPath.includes('/genre/'))  {
            //! GENRE
            if (this.state.urlPath.includes('/page/') ) {
                let fIndex = this.state.urlPath.indexOf('/', 3)
                let lIndex = this.state.urlPath.indexOf('/', 8)
                // console.log(this.state.urlPath.substring(findex + 1, lindex), '---------------')
                animeGenre = this.state.urlPath.substring(fIndex + 1, lIndex)

                filtered = animes.filter((anime: any) => {
                    let genre = anime.genres.toLowerCase()
                    let animeArr = genre.includes(animeGenre)
                    return animeArr
                })
                animes = filtered
                
                currrentP = animes.slice(firstIndex, lastIndex)
                console.log(firstIndex, "firstIndex")
                console.log(lastIndex, "lastIndex")

                path = '/genre/' + animeGenre
                console.log(animes, "currrentPpppppp")

                // console.log(currrentP, "currrentPpppppp")
                console.log(currrentP, "if")


            } else if (this.state.urlPath.includes('/genre/') ) {
                animeGenre = this.state.urlPath.replace('/genre/', '')
                filtered = animes.filter((anime: any) => {
                    let genre = anime.genres.toLowerCase()
                    let animeArr = genre.includes(animeGenre)
                    return animeArr
                })
                animes = filtered
                currrentP = animes.slice(defFirstIndex, defLastIndex)
                path = '/genre/' + animeGenre

                console.log(animes, "else if")
            }

        } else if (this.state.urlPath.includes('/type/'))  {
            //! TYPE
            if (this.state.urlPath.includes('/page/')) {
                let fIndex = this.state.urlPath.indexOf('/', 5)
                let lIndex = this.state.urlPath.indexOf('/', 7)
                let animeType = this.state.urlPath.substring(fIndex + 1, lIndex)
                // console.log(animeType, 'animeType')
                // console.log(this.state.urlPath, ' ======================')
                // console.log(this.state.urlPath.length, ' ======================')

                filtered = animes.filter((anime: any) => {
                    let type = anime.animeType.toLowerCase()
                    let animeArr = type.includes(animeType)
                    return animeArr
                })
                animes = filtered
                path = '/type/' + animeType

                currrentP = animes.slice(firstIndex, lastIndex)


            } else if (this.state.urlPath.includes('/type/')) {
                let animeType = this.state.urlPath.replace('/type/', '')
                filtered = animes.filter((anime: any) => {
                    let type = anime.animeType.toLowerCase()
                    let animeArr = type.includes(animeType)
                    return animeArr
                })
                animes = filtered
                currrentP = animes.slice(defFirstIndex, defLastIndex)
                path = '/type/' + animeType
                // console.log(this.state.urlPath.length, ' ======================')
            }

        } else if (this.state.urlPath.includes('/page/')) {
            //! PAGE
            // let currentPage = this.state.urlPath.replace('/page/', '')
            currrentP = animes.slice(firstIndex, lastIndex)
            // console.log(currentPage, "currentPage")
            
        } else {
            //! DEFAULT
            currrentP = animes.slice(0, this.state.animesPerPage) // 0, 2 //! how many animes
            // console.log(animes, 'animes ТУТА')
            // console.log(currrentP, 'currrentP ТУТА')
        }

        function displayCurrentPageAnimeList(currrentP:Array<Object>) {
            return(
                currrentP.map((anime: any, key: number) => {

                    let src = '/anime/' + anime.title_name.replaceAll(' ', "_")

                return(
                <div className="card-container" key={key}>
                    <a href={src}>
                        <img src={anime.img} 
                        alt={anime.title_name} 
                        title={anime.title_name} 
                        className="anime-list-img" />
                    </a>
                    <div className="info">
                        <p><span>Title: </span>{anime.title_name}</p>
                        <p><span>English Title: </span>{anime.title_english}</p>
                        <p><span>Type: </span>{anime.animeType}</p>
                        <p><span>Episodes: </span>{anime.episodes}</p>
                        <p><span>Duration: </span>{anime.duration}</p>
                    </div>
                </div>
                )}))
        }
        return(
            <>
                <div className="display-table">
                    {currrentP.length !== 0 && animes[0] !== null ? (

                    <>
                    {displayCurrentPageAnimeList(currrentP)}
                    </>

                    ) : (
                        <div className="not-found-animes">NOT FOUND</div>
                        )
                    }

                </div>
                {currrentP.length !== 0 && animes[0] !== null ? (

                <Pagination {...this.state}
                totalAnimes={animes.length} 
                urlSend={path}
                />
                
                ) : (
                        null
                    )
                }
            </>
        )
    }
}