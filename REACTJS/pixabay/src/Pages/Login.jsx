// import React,{Component} from "react";
// import { Link } from "react-router-dom";
// export default function Login(){
//     return(
//         <>

//        <div style={{height:"100px",width:"300px",position:"absolute",left:"350px",padding:"200px",top:"100px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",borderRadius:"90px"}}>
//         <h1 style={{marginBottom:"5px",position:"absolute",top:"70px",left:"280px",color:"#B17457"}}>Login Page!</h1>

//         <label>Name:</label>
//         <input type="text" placeholder="Enter Your Name" style={{marginLeft:"40px",padding:"10px",marginBottom:"10px",borderRadius:"15px"}}></input> <br/>

//         <label>UserName:</label>
//         <input type="text" placeholder="Enter Your UserName" style={{marginLeft:"9px",padding:"10px",marginBottom:"10px",borderRadius:"15px"}}></input><br/>

//         <label>Password:</label>
//         <input type="text" placeholder="Enter Your Password" style={{marginLeft:"15px",padding:"10px",marginBottom:"10px",borderRadius:"15px"}}></input><br/>

//         <p style={{marginLeft:"120px"}}>Forgot Password?</p>

//         <Link to="/"> <button style={{marginLeft:"120px",width:"100px",height:"40px",marginTop:"20px",backgroundColor:"#B17457",color:"white",borderRadius:"21px"}}>Submit</button></Link> 
       
//         </div>
//         </>
//     )
// }




import React from "react";
export default function Login(){
    const logValid=()=>{
        let log=document.getElementById("email1")
        let log1=document.getElementById("pass1")
        if((log.value)=== window.localStorage.getItem("email") &&(log1.value)=== window.localStorage.setItem("password")){
            window.open("./")
        }
else{
    alert("enter Valid Data")
}

    }
    return(
        <>
        
         <div style={{height:"100px",width:"300px",position:"absolute",left:"350px",padding:"200px",top:"100px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",borderRadius:"90px"}}>
        <h1 style={{marginBottom:"5px",position:"absolute",top:"70px",left:"280px",color:"#B17457"}}>Login Page!</h1>

        <label htmlFor="" >Email</label>
        <input type="text"  id="email1" style={{marginLeft:"69px",padding:"10px",marginBottom:"10px",borderRadius:"15px"}}/>
        <label htmlFor="" style={{position:"relative",bottom:"-15px"}}>Password</label>
        <input type="text"  id="pass1" style={{marginLeft:"109px",padding:"10px",marginBottom:"10px",borderRadius:"15px",position:"relative",bottom:"15px"}}/>
         <button onChange={logValid} style={{marginLeft:"150px",width:"100px",height:"40px",backgroundColor:"#B17457",color:"white",borderRadius:"21px",marginTop:"20px"}}>Login</button>
      
        </div>
        </>
    )
}