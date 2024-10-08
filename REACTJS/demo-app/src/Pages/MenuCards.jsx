import React,{Component} from "react";
import { Link } from "react-router-dom";
class Mcard extends React.Component{
    constructor(props){
        super(props)
        console.log(props);  
    }
    render(){
        return(
            <>
            <div className="subcard">
            <Link to="/detail">
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <div className="Menusub_InnerCard_Details">
                <h2>Niaboytown</h2>
                <h2 style={{position:"absolute", left:"2px", top:"60px"}}>Duration</h2>
                <p style={{position:"absolute", right:"2px", top:"4px"}}>4003</p>
                <p style={{position:"absolute", right:"2px", top:"60px"}}>6 Hours</p>
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
                }}>Party</button>
                
            </div>
            </Link>
              
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Font Sionnn</h2>
                <p>Duration</p>
                <h2>2686</h2>
                <p>9 Hours</p>
                <button className="Menubtn">cycling</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/744912/pexels-photo-744912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Wooddaux</h2>
                <p>3715</p>
                <h2>Duration</h2>
                <p>8 Hours</p>
                <button>Beaches</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Bageorge With Nonshi Harbour</h2>
                <p>3184</p>
                <h2>Duration</h2>
                <p>3 Hours</p>
                <button>Cycling</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/2242171/pexels-photo-2242171.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Stonelumhawk</h2>
                <p>4143</p>
                <h2>Duration</h2>
                <p>17 Hours</p>
                <button>Hillside</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/3182925/pexels-photo-3182925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>La Anrncast</h2>
                <p>3712</p>
                <h2>Duration</h2>
                <p>7 Hours</p>
                <button>Beaches</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Font Shilbluff</h2>
                <p>795</p>
                <h2>Duration</h2>
                <p>19 Hours</p>
                <button>Hillside</button>
                
            </div>
            <div className="MenusubInnerCard">
                <img src="https://images.pexels.com/photos/45987/pexels-photo-45987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>Shiwood</h2>
                <p>1352</p>
                <h2>Duration</h2>
                <p>17 Hours</p>
                <button></button>
                
            </div>
            <div className="MenusubInnerCard"> 
                <img src="https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="cardimg1"/>
                <h2>East Vyfolk</h2>
                <p>4393</p>
                <h2>Duration</h2>
                <p>5 Hours</p>
                <button>Party</button>
                
            </div>
            </div>
            </>
        )
    }
}
export default Mcard