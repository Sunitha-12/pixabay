import React, { useEffect, useState } from "react";

// import Nav from "./PixaNav"
export default function Backgrnd(){
  let[api,setApi]=useState({product:[]})
  let[img,setImg]=useState('')
  useEffect(()=>{
    let api=fetch(`https://pixabay.com/api/?key=46193723-c71dd6e4249e10a2024b30b19&q=${img}&image_type=photo&pretty=true`)
    api.then(x=>x.json()).then(x=>{ 
        console.log(x);
        
    setApi({product:x.hits})
    })
  },[])

  let view=(e)=>{
    setImg(e.target.value)
  }
     console.log(api);
     
    return(
        <>
        <h1 style={{marginLeft:"45px",position:"relative",top:"30px",color:"navyBlue"}}>Pixabay</h1>
        <i class="fa-solid fa-magnifying-glass" style={{position:"relative",left:"1000px"}}></i>
         <input type="text" onChange={view} placeholder="Search for all images on Pixabay" style={{width:"602px",height:"15px",borderRadius:"30px",margin:"-15px 0px 15px 380px",padding:"25px",backgroundColor:"#F5F7F8"}}/> <br/>
         {api.product.map(x=>{
            return(
                <>
                <img src={x.webformatURL} alt="image"  style={{height:"400px",width:"500px" ,borderRadius:"50px"}}/>
                </>
            )
         })}
       {/* <Nav/> */}
        </>  
    )
}