import React,{Component} from "react";
import App from "../Components/Cards"
import Header from "../Components/Head"
import Subpart from "../Components/Inner"
export default class Front extends Component{
render(){
    return(
        <>
        <App/>
        <Header/>
        <Subpart/>
        </>
    )
}
}