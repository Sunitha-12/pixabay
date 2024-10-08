import React,{Component} from "react";
import Header from "../Components/Head"
import Menuhead from "./Menuheading";
import Goacard from "./GoaCards";

export default class GoaApp extends Component{
    render(){
        return(
            <>
            <Header/>
            <Menuhead/>
            <Goacard/>     
            </>
            
        )
    }
}