import React, {Component} from "react";
import './pagination.css'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";


type props = {
    animesPerPage: any,
    totalAnimes: any,
    urlPath:any,
    urlSend: any,
}

type current = {

}

export default class Pagination extends Component<props, current>{
    constructor(props: any){
        super(props)
        this.state = {

        }
        
    }


    render(){
        console.log(this.props.totalAnimes, 'TOTAL')
        var PN: any = []
        var PNlast: any = []
        for(let i = 1; i <= Math.ceil(this.props.totalAnimes / this.props.animesPerPage); i++){
            PN.push(i)
            PNlast.push(i)
        }

        //! PREVIOUS PAGE ========================

        function prevPage() {
            let thisPageLoc = window.location.pathname
            let firstPage = 1
            let lastIndex = +window.location.pathname.lastIndexOf('/')

            // console.log(thisPageLoc.lastIndexOf('/'), 'thisPageLoc.lastIndexOf')
            // console.log(thisPageLoc.length)
            //! GENRE
            if (window.location.pathname.includes('/genre/')) {

                if (window.location.pathname.includes('/genre/') && window.location.pathname.includes('/page/')) {

                    let mainPartLoc = thisPageLoc.slice(0, lastIndex + 1)
                    let pageLocNum = +thisPageLoc.slice(lastIndex + 1, )
                    // console.log(pageLocNum, 'pageLocNumpageLocNumpageLocNumpageLocNum')
                    pageLocNum = pageLocNum - 1
                    if (pageLocNum !== 0) {
                        window.location.href = mainPartLoc + pageLocNum

                        if (pageLocNum < firstPage) {
                            window.location.href = mainPartLoc + firstPage
                        }
                        // window.location.href = mainPartLoc + pageLocNum
                    } 
                    // window.location.href = mainPartLoc + pageLocNum
                    // console.log(pageLocNum, 'pageLocNum')
                    // console.log(mainPartLoc + pageLocNum, 'mainPartLoc + pageLocNum')

                } else if (window.location.pathname.includes('/genre/') && !window.location.pathname.includes('/page/')) {
                    let mainPartLoc = thisPageLoc.slice(0, )
                    let pageLocNum = 1;
                    pageLocNum = pageLocNum - 1

                    if (pageLocNum !== 0 && pageLocNum < 0) {
                        window.location.href = mainPartLoc + '/page/' + pageLocNum
                    } 
                    // window.location.href = mainPartLoc + '/page/' + pageLocNum
                }

            //! TYPE
            } else if (window.location.pathname.includes('/type/')) {
                if (window.location.pathname.includes('/type/') && window.location.pathname.includes('/page/')) {

                    let mainPartLoc = thisPageLoc.slice(0, lastIndex + 1)
                    let pageLocNum = +thisPageLoc.slice(lastIndex + 1, )
                    // console.log(pageLocNum, 'pageLocNumpageLocNumpageLocNumpageLocNum')
                    pageLocNum = pageLocNum - 1
                    if (pageLocNum !== 0) {
                        window.location.href = mainPartLoc + pageLocNum

                        if (pageLocNum < firstPage) {
                            window.location.href = mainPartLoc + firstPage
                        }
                        // window.location.href = mainPartLoc + pageLocNum
                    } 
                    // window.location.href = mainPartLoc + pageLocNum
                    // console.log(pageLocNum, 'pageLocNum')
                    // console.log(mainPartLoc + pageLocNum, 'mainPartLoc + pageLocNum')
    
                } else if (window.location.pathname.includes('/type/') && !window.location.pathname.includes('/page/')) {
                    let mainPartLoc = thisPageLoc.slice(0, )
                    let pageLocNum = 1;
                    pageLocNum = pageLocNum - 1

                    if (pageLocNum !== 0 && pageLocNum < 0) {
                        window.location.href = mainPartLoc + '/page/' + pageLocNum
                    } 
                    // window.location.href = mainPartLoc + '/page/' + pageLocNum
                }

                //! DEFAULT
        } else if (window.location.pathname === '/' || window.location.pathname.startsWith('/page/')) {
            
            if (window.location.pathname.startsWith('/page/')) {
                
                let mainPartLoc = thisPageLoc.slice(0, lastIndex + 1)
                let pageLocNum = +thisPageLoc.slice(lastIndex + 1, )
                // console.log(pageLocNum, 'pageLocNumpageLocNumpageLocNumpageLocNum')
                pageLocNum = pageLocNum - 1
                if (pageLocNum !== 0) {
                    window.location.href = mainPartLoc + pageLocNum

                    if (pageLocNum < firstPage) {
                        window.location.href = mainPartLoc + firstPage
                    }
                } 

            } else if (window.location.pathname === '/') {
                let pageLocNum = 1;
                pageLocNum = pageLocNum + 1

                    // window.location.href = mainPartLoc + '/page/' + pageLocNum
                    window.location.href =  '/page/' + pageLocNum
            }
        }
        
    }

    //! NEXT PAGE ========================
        function nextPage() {
            
            let thisPageLoc = window.location.pathname
            let lastPage = +PN[PN.length - 1]
            let lastIndex = +window.location.pathname.lastIndexOf('/')

            // console.log(window.location.pathname.length, "_________________")
            // console.log(lastPage, 'lastPage')
            // console.log(thisPageLoc.lastIndexOf('/'), 'thisPageLoc.lastIndexOf')
            // console.log(thisPageLoc.length)
            //! GENRE
            if (window.location.pathname.includes('/genre/')) {
                if (window.location.pathname.includes('/genre/') && window.location.pathname.includes('/page/')) {

                    let mainPartLoc = thisPageLoc.slice(0, lastIndex + 1)
                    let pageLocNum = +thisPageLoc.slice(lastIndex + 1, )
                    // console.log(pageLocNum, 'pageLocNumpageLocNumpageLocNumpageLocNum')
                    pageLocNum = pageLocNum + 1
                    if (pageLocNum !== lastPage + 1 || pageLocNum !> lastPage + 1) {
                        window.location.href = mainPartLoc + pageLocNum

                        if (pageLocNum > lastPage + 1) {
                            window.location.href = mainPartLoc + lastPage
                        }
                    }
                    // console.log(pageLocNum, 'pageLocNum')
                    // console.log(mainPartLoc + pageLocNum, 'mainPartLoc + pageLocNum')
    
                } else if (window.location.pathname.includes('/genre/') && !window.location.pathname.includes('/page/')) {

                    let mainPartLoc = thisPageLoc.slice(0, )
                    let pageLocNum = 1;
                    pageLocNum = pageLocNum + 1
                    window.location.href = mainPartLoc + '/page/' + pageLocNum
                }

            //! TYPE
            } else if (window.location.pathname.includes('/type/')) {

                if (window.location.pathname.includes('/type/') && window.location.pathname.includes('/page/')) {

                    let mainPartLoc = thisPageLoc.slice(0, lastIndex + 1)
                    let pageLocNum = +thisPageLoc.slice(lastIndex + 1, )
                    // console.log(pageLocNum, 'pageLocNumpageLocNumpageLocNumpageLocNum')
                    pageLocNum = pageLocNum + 1
                    if (pageLocNum !== lastPage + 1 || pageLocNum !> lastPage + 1) {
                        window.location.href = mainPartLoc + pageLocNum

                        if (pageLocNum > lastPage + 1) {
                            window.location.href = mainPartLoc + lastPage
                        }
                    } 
                    // window.location.href = mainPartLoc + pageLocNum
                    // console.log(pageLocNum, 'pageLocNum')
                    // console.log(mainPartLoc + pageLocNum, 'mainPartLoc + pageLocNum')
    
                } else if (window.location.pathname.includes('/type/') && !window.location.pathname.includes('/page/')) {

                    let mainPartLoc = thisPageLoc.slice(0, )
                    let pageLocNum = 1;
                    pageLocNum = pageLocNum + 1

                    window.location.href = mainPartLoc + '/page/' + pageLocNum

                }

                
                //! DEFAULT

            } else if (window.location.pathname === '/' || window.location.pathname.startsWith('/page/')) {

                if (window.location.pathname.startsWith('/page/')) {

                    let mainPartLoc = thisPageLoc.slice(0, lastIndex + 1)
                    let pageLocNum = +thisPageLoc.slice(lastIndex + 1, )
                    // console.log(pageLocNum, 'pageLocNumpageLocNumpageLocNumpageLocNum')
                    pageLocNum = pageLocNum + 1
                    if (pageLocNum !== lastPage + 1 || pageLocNum !> lastPage + 1) {
                        window.location.href = mainPartLoc + pageLocNum

                        if (pageLocNum > lastPage + 1) {
                            window.location.href = mainPartLoc + lastPage
                        }
                    } 
                    // window.location.href = mainPartLoc + pageLocNum
                    // console.log(pageLocNum, 'pageLocNum')
                    // console.log(mainPartLoc + pageLocNum, 'mainPartLoc + pageLocNum')
    

                } else if (window.location.pathname ==='/') {
                    // let mainPartLoc = thisPageLoc.slice(0, )
                    let pageLocNum = 1;
                    pageLocNum = pageLocNum + 1

                        // window.location.href = mainPartLoc + '/page/' + pageLocNum
                        window.location.href =  '/page/' + pageLocNum

                }
            }

        }

        //! DISPLAY PAGINATION ========================
        let urlS = this.props.urlSend
        var filteredPN = PN;
        console.log(this.props.urlSend, 'j')
        function pageNumberDisplay(){
            console.log(urlS, "urlS")
            // console.log(this.props.urlSend, "PN")
            console.log(PN, "PN")
            let loc = window.location.pathname
            let lastIndex = +window.location.pathname.lastIndexOf('/')
            // console.log(loc, "loc")
            // console.log(lastIndex, "lastIndex")

            let pageLocNum = +loc.slice(lastIndex + 1, )
            // console.log(+loc.slice(lastIndex - 1, ), "+loc.slice(lastIndex + 1, )")
            // console.log(pageLocNum, "pageLocNum")
            let locNum = pageLocNum
            if (locNum === 0 || !loc.includes('/page/')) {
                locNum = 1;
                PN = PN.slice(locNum - 1, locNum + 2)
                console.log(PN,'he')

            } else if (PN[locNum - 1] === locNum) {
                
                console.log(PN, "else if")
                console.log(PN[locNum - 1], "PN[locNum - 1]")
                console.log(PN.slice(locNum-3, locNum+2), '3')
                console.log(PN.slice(locNum-2, locNum+2), '2')
                console.log(PN.slice(locNum-1, locNum+2), '1')
                console.log(PN.slice(locNum, locNum+2), '0')
                // PN = PN.slice(locNum-3, locNum+2)
                console.log(PN, '-')

                switch (locNum) {
                    case 1:
                        PN = PN.slice(locNum - 1, locNum + 2)
                        break;
                    case 2:
                        PN = PN.slice(locNum - 2, locNum + 2)
                        break;
                    case 3:
                        PN = PN.slice(locNum - 3, locNum + 2)
                    break;
                
                    default:
                        PN = PN.slice(locNum - 3, locNum + 2)
                    break;
                }
                // console.log(PN.slice(locNum-2, locNum+2), '-')
                // console.log(PN.slice(locNum-1, locNum+2), '-')
                // console.log(PN.slice(locNum, locNum+2), '-')

            }
            console.log(PN, '--------------')
            filteredPN = PN
            return(
                
                
                filteredPN.map((num: number) => {
                    let src:string;

                        if (urlS !== undefined) {
                            src = urlS + '/page/' + num

                        } else {
                            src = '/page/' + num
                        }

                    // console.log(src, 'srcs')
                    return(
                    <li key={num} className="pagination-li">
                        { locNum === num ? (
                        <a href={src} style={{color: "purple", fontSize: '23px'}} className="pagination-link">{num}</a>
                        ) : (
                        <a href={src} style={{color: "white"}} className="pagination-link">{num}</a>)}
                    </li>
                    )
                }) 
            )
        }
        let loc = window.location.pathname

        let lastIndex = +window.location.pathname.lastIndexOf('/')
        // console.log(loc, "loc")
        // console.log(lastIndex, "lastIndex")

        let pageLocNum = +loc.slice(lastIndex + 1, )
        // console.log(+loc.slice(lastIndex - 1, ), "+loc.slice(lastIndex + 1, )")
        // console.log(pageLocNum, "pageLocNum")
        let locNum = pageLocNum
        let firstSrc = '/page/' + 1
        let lastSrc = '/page/' + (PNlast.length)
        // console.log(PNlast, PNlast.length, 'SAASADS')
        // console.log(lastSrc, 'lastSrc')
        console.log(filteredPN, 'filteredPN')
        console.log(pageNumberDisplay())
        return(
            <>
                <div className="pagination">
                    <nav className="pagination-nav">
                        <ul className="pagination-ul">
                            <li>
                                <button className="pagination-btn" onClick={prevPage}>
                                    <RiArrowLeftSLine />
                                </button>
                            </li>
                            { !filteredPN.includes(1) ?
                            <>
                                <li key={1} className="pagination-li">
                                    <a href={firstSrc} style={{color: "white"}} className="pagination-link">1</a>
                                </li> 
                                <li key={1 - 1} className="pagination-li">
                                    <a style={{color: "white"}} className="pagination-dots">...</a>
                                </li> 
                            </>
                            :
                                null
                            }
                            {pageNumberDisplay()}
                            { !filteredPN.includes(PNlast.length) ?
                            <>
                                <li key={PNlast.length + 1} className="pagination-li">
                                    <a style={{color: "white"}} className="pagination-dots">...</a>
                                </li> 
                                <li key={PNlast.length} className="pagination-li">
                                    <a href={lastSrc} style={{color: "white"}} className="pagination-link">{PNlast.length}</a>
                                </li> 
                            </>
                            :
                                null
                            }
                            {/* <li key={PN.length - 1}>
                            <a href={lastSrc} style={{color: "white"}} className="pagination-link">{PN.length - 1}</a>
                            </li> */}
                            {/* {PN.map((num: number) => {
                                let src:string;
                                let loc = window.location.pathname
                                let lastIndex = +window.location.pathname.lastIndexOf('/')
                                // console.log(loc, "loc")
                                // console.log(lastIndex, "lastIndex")

                                let pageLocNum = +loc.slice(lastIndex + 1, )
                                // console.log(+loc.slice(lastIndex - 1, ), "+loc.slice(lastIndex + 1, )")
                                // console.log(pageLocNum, "pageLocNum")
                                let locNum = pageLocNum
                                // console.log(locNum, "locNum")
                                if (locNum === 0 || !loc.includes('/page/')) locNum = 1;

                                    if (this.props.urlSend !== undefined) {
                                        src = this.props.urlSend + '/page/' + num

                                    } else {
                                        src = '/page/' + num
                                    }

                                console.log(src, 'srcs')
                                return(
                                <li key={num} className="pagination-li">
                                    { locNum === num ? (
                                    <a href={src} style={{color: "purple", fontSize: '23px'}} className="pagination-link">{num}</a>
                                    ) : (
                                    <a href={src} style={{color: "white"}} className="pagination-link">{num}</a>)}
                                </li>
                                )
                            }) 

                            } */}
                            <li>
                                <button className="pagination-btn" onClick={nextPage}>
                                    <RiArrowRightSLine />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}