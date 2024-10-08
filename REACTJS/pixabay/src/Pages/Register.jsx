import React from "react";
import { Link } from "react-router-dom";
export default function Register(){
    const regValid=()=>{
        let ele=document.getElementById("name")
        let ele1=document.getElementById("email")
        let ele2=document.getElementById("pass")
        window.localStorage.setItem("name",ele.value)
        window.localStorage.setItem("email",ele1.value)
        window.localStorage.setItem("password",ele2.value)
    }
    return(
        <>
        <div style={{height:"100px",width:"300px",position:"absolute",left:"350px",padding:"200px",top:"100px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",borderRadius:"90px"}}>
       <h1 style={{marginBottom:"5px",position:"absolute",top:"70px",left:"220px",color:"#B17457"}}>Registration Page!</h1>

        <label htmlFor="" >UserName</label>
        <input type="text" style={{marginLeft:"40px",padding:"10px",marginBottom:"10px",borderRadius:"15px"}} id="name"/>
        <label htmlFor="">Email</label>
        <input type="text" style={{marginLeft:"69px",padding:"10px",marginBottom:"10px",borderRadius:"15px"}} id="email"/>
        <label htmlFor="" style={{position:"relative",bottom:"-15px"}}>Password</label>
        <input type="text" style={{marginLeft:"109px",padding:"10px",marginBottom:"10px",borderRadius:"15px",position:"relative",bottom:"15px"}} id="pass"/>
       <Link to="/log"> <button onChange={regValid} style={{marginLeft:"150px",width:"100px",height:"40px",backgroundColor:"#B17457",color:"white",borderRadius:"21px",marginTop:"20px"}}>Register</button></Link>  
       </div>  
    </>
    )
}











// import React from "react";
// import "../../src/App.css"
// import { Link } from "react-router-dom";
// let Register=()=>{

//   let Vald=()=>{
//     let element=document.getElementById("mailin")
//     //console.log(ele.value) 
//     let element1=document.getElementById("mailinpas")
//     if((element.value) === window.localStorage.getItem("name")&& (element1.value)=== window.localStorage.getItem("password")){
//       window.open("./home")
//     }
//     else{
//       alert("enter a valid details")
//     }
//   } 
//     return(
//         <>
//         <h1 style={{fontFamily:"cursive",color:"gray",textAlign:"center",marginTop:"20px"}}>Login Form</h1>
//         <div className="card Register" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
//           <form>
//           <input type="email" placeholder="EMAIL"  required className="Rinput" id="mailin" />
//           <p style={{fontFamily:"cursive",color:"gray"}}>We'll never share your email with anyone else.</p>
//           <input type="password" placeholder="PASSWORD" required className="Rinput" id="mailinpas"/>
//           <p style={{fontFamily:"cursive",color:"gray",fontSize:"12px"}}>FORGOT PASSWORD?</p>
//           <button type="submit" class="Fbtn" style={{marginTop:"20px",width:"250px"}} onClick={Vald}>Submit</button>

//           <Link to="/login">
//                 <button type="submit" class="Fbtn" style={{marginTop:"20px",width:"250px"}}>cancel</button>
//           </Link> 
//           </form>
//         </div>
//         </>
//     )
// }
// export default Register