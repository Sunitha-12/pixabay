import React,{Component} from "react";
//import obj1 from "../Component/Mcard.json"
import Header from "../Components/Head"
import  Mcard from "../Pages/MenuCards"
import "../style/style.css"
import Menuhead from "./Menuheading"
export default class Menu extends Component{
    render(){
        return(
            <>
            <Header/>
            <Menuhead/>
            <Mcard/>
            </>
        )
    }
}