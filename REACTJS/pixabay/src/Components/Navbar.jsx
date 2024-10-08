import React,{Component} from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component{
    render(){
        return(
            <>            
           <div></div>
           <ul style={{position:"absolute",top:"30px",display:"flex",width:"350px",height:"50px",justifyContent:"space-between",left:"1110px",listStyleType:"none"}}>
               <Link to="/reg"> <li><button className="btn">Register</button></li></Link>
                <Link to="/log"><li><button className ="btn">Login</button></li></Link>
            </ul>
            </>
        )
    }
}