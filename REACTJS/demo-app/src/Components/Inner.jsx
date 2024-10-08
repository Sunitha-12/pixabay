import React,{Component} from "react";

export default class Subpart extends Component{
    render(){
        return(

        <React.StrictMode>
            
        <><div class="min">
            <div class="inner">
            <h1>Welcome to QTrip</h1>
            <p class="para">Explore the world with fantastic places to venture around</p>
            </div>
            <input type="text" placeholder="Search a City"></input>
            
        </div>
        </>
    </React.StrictMode>
        )
    }
}