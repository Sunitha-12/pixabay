import React,{Component} from "react";
// import ReactDOM from "react-dom";
import "./Style/NavStyle.css"
import Api from "./Api"
// import { Link } from "react-router-dom";
// import Register from "./Pages/Register";
export default class Navn extends Component{
    render(){
        return(
            <>
          {/* <Home/> */}
            
           <div></div>
           <ul style={{position:"absolute",top:"30px",display:"flex",width:"350px",height:"50px",justifyContent:"space-between",left:"1110px",listStyleType:"none"}}>
                <li><button className="btn">Register</button></li>
                <li><button className ="btn">Login</button></li>
            </ul>
             <Api/>
            {/* <Register/> */}
            </>
        )
    }
}