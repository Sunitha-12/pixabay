import React,{Component} from "react";
class Foot extends Component{
    render(){
        return(
        <>
            <div class="footer">
                <div class="foot1" style={{fontSize:"20px",marginTop:"10px"}}>
                    <p><i class="fa-solid fa-house"></i></p>
                    <p><i class="fa-solid fa-burger"></i></p>
                    <p><i class="fa-solid fa-tag"></i></p>
                    <p><i class="fa-solid fa-crown"></i></p>
                </div>
                <div class="foot1" style={{textAlign:"left",fontFamily: `"Concert One", sans-serif`,fontWeight:"lighter"}} >
                    <p>Home</p>
                    <p> Menu</p>
                    <p>Offers</p>
                    <p>Rewards</p>
                </div>

            </div>
        </>
        )
    }
}
export default Foot;