import React,{Component} from "react";
import { Link } from "react-router-dom";

class Goacard extends React.Component{
    constructor(props){
        super(props)
        console.log(props);  
    }
    render(){
        return(
            <>
            <div className="subcard">
            <Link to="/goadetails">
            <div className="MenusubInnerCard">
            <img src="https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>

                <div className="Menusub_InnerCard_Details">
                <h2 >perthby</h2>
                <h2 style={{position:"absolute", left:"2px", top:"60px"}}>Duration</h2>
                <p style={{position:"absolute", right:"2px", top:"4px"}}>4211</p>
                <p style={{position:"absolute", right:"2px", top:"60px"}}>8 Hours</p>
                </div>
                <button style={{position:"absolute", 
                right:"0px",
                 top:"15px",
                 height:"30px",
                 width:"100px",
                 color:"white",
                 backgroundColor:"#fd7e14",
                 border:"none",
                 borderRadius:"10px"
                }}>Hillside</button>
                
            </div>
            
            </Link>
              
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/2437297/pexels-photo-2437297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Nesbridge</h2>
                <p>Duration</p>
                <h2>902</h2>
                <p>4 Hours</p>
                <button className="Menubtn">party</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Kenntic End</h2>
                <p>2879</p>
                <h2>Duration</h2>
                <p>11 Hours</p>
                <button>Hillside</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Pressal Creek</h2>
                <p>1593</p>
                <h2>Duration</h2>
                <p>5 Hours</p>
                <button>Hillside</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Lowtra</h2>
                <p>4731</p>
                <h2>Duration</h2>
                <p>20 Hours</p>
                <button>Cycling</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/2175952/pexels-photo-2175952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Chettbou Aux Dersting</h2>
                <p>1354</p>
                <h2>Duration</h2>
                <p>9 Hours</p>
                <button>Cycling</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Bucktim</h2>
                <p>2342</p>
                <h2>Duration</h2>
                <p>19 Hours</p>
                <button>Beaches</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/3783385/pexels-photo-3783385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Nribran lake</h2>
                <p>3902</p>
                <h2>Duration</h2>
                <p>12 Hours</p>
                <button>cycling</button>
                
            </div>
            <div className="MenusubInnerCard"> 
                <img src="https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Warflin</h2>
                <p>969</p>
                <h2>Duration</h2>
                <p>15 Hours</p>
                <button>Hillside</button>
                
            </div>
            </div>
            </>
        )
    }
}
export default Goacard