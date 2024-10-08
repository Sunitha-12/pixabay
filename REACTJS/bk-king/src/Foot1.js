import React from "react";
export default class Phone extends React.Component{
    render(){
        return(
            <>
            <div  class="ph">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1125&q=80&fit=max&auto=format" alt="phone" style={{position:"absolute",height:"550px",width:"550px",top:"1890px"}}></img>
                <div className="sace">
                <p className="head" style={{padding:"5px",margin:"5px",fontSize:"50px"}}>Sace $$$</p>
                <p className="head" style={{padding:"5px",margin:"5px",fontSize:"50px"}}>With offers on demand</p>

              
                
                <h1 style={{ position:"absolute",right:"200px",top:"2100px"}}>
Save $$$
With offers on demand</h1>
                <p className="para" style={{fontWeight:"500", position:"absolute",right:"200px",top:"2300px"}}>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other <br></br>countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
                </div>
            </div>
            <div className="base">
                    <p>TM Copyright 2024 Burger King Company LLC. All Rights Reserved.
 | 
<ins>Do Not Sell Or Share My Personal Information</ins></p>
            </div>
            </>
        )
    }
}
