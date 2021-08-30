import React, {Component} from "react";

export default class Test extends Component<{k:number}>{
    constructor(props: any){
        super(props)
    }
    
    render(){
        console.log(this.props.k)
        return(
            <>
            </>
        )
    }
}