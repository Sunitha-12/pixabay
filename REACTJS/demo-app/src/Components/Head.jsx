import React from "react";
// import "../style/heading.css"
export default class Header extends React.Component{
    render(){
        return(

        <React.StrictMode>
        <>
        <div className="header">
            <p id="tit">QTrip</p>
            <div  className="header home">
            <p>Home</p>
            <p>Reservations</p>
            <p id="logi">Login Here</p>
            </div>
             <button id="btn">Register</button>
        </div>
        <div className="container">© QTrip 2022</div>
        </>
    </React.StrictMode>
        )
    }
}