import React from "react";
import ReactDOM from "react-dom/client"
import Data from "./Db"
import "./Bk.css"
import App from "./App"
import Bk from "./Bk"
import Foot from "./Foot";
import Phone from "./Foot1"
let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <React.StrictMode>
    <Bk/>
    <div
      style={{display:"flex",
      flexWrap:"wrap",
      justifyContent:"space-evenly",
       position:"relative",
      top:"63vh"}}
    >
   {Data.map(x=>{
    return(
      <App imgSrc={x.imgSrc} bHead={x.bHead} bDesc={x.bDesc} but={x.but}/>
    )
   })}
   </div>
   <Foot/>
   <Phone/>
  </React.StrictMode>
  </>
)



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import "./Bk.css"
// import reportWebVitals from './reportWebVitals';
// import Bk from "./Bk"
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Bk/>
//   </React.StrictMode>
// );




// import React from "react";
// import ReactDom from "react-dom/client";
// import App from "./App"
// import Data from "./Db"
// import Bk from "./Bk"
// import "./Bk.css"
// console.log(Data);

// let root=ReactDom.createRoot(document.getElementById("root"));
// let obj=[{
//   imgSrc:"https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1e0094d5b8e3283dfa1aec982b42a0d45387642e-2000x1000.png?w=812&q=80&fit=max&auto=format",
//   button:"Order Now",
//   p:"Welcome to perks week!A whole week of can't miss perks for our loyal",

//   imgSrc:"https://cdn.sanity.io/images/czqk28jt/prod_bk_us/954d8644738ea5fd14d6beeddf6912f238047c71-2000x1000.png?w=812&q=80&fit=max&auto=format",
//   button:"Order Now",
//   p:"Head over to the Offers tab to redeem your Walmart+ benefit—a FREE Whopper® with any purchase",

//   imgSrc:"https://cdn.sanity.io/images/czqk28jt/prod_bk_us/4d032a8ba01405c41eed8237c11bcd91ec2d9556-2000x1000.png?w=812&q=80&fit=max&auto=format",
//   button:"Order Now",
//   p:"Tried our naturally flavored Frozen Pink Lemonade yet? Icy, tangy and refreshingly bold—get yours now. Available for a limited time only!",

//   imgSrc:"https://cdn.sanity.io/images/czqk28jt/prod_bk_us/7119e8836c4564f1b32d1b816ccfac811cba3c0d-2000x1000.png?w=812&q=80&fit=max&auto=format",
//   button:"Order Now",
//   p:"Hop in the kitchen and show us your Whopper®-building skills. Top each flame-grilled Whopper® with the correct toppings as the orders roll in. You could win up to 750 Crowns! Play daily through 9/22!",

//   imgSrc:"https://cdn.sanity.io/images/czqk28jt/prod_bk_us/a364c5344c41381a6f8793a6078a542a52bcb42e-2000x1000.png?w=812&q=80&fit=max&auto=format",
//   button:"Order Now",
//   p:"Roll out to BK® with your little hero to get one of six exclusive Transformers One toys when you order a King Jr.™ Meal."
// }]
// root.render(
//     <React.StrictMode>
//     <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
//      {Data.map(x=>{
//       return(
//         <App imgSrc={x.imgSrc} button={x.button} p={x.p}/>
//       )
//      })}
//    </div>
//   </React.StrictMode>
// )








{/* <App imgSrc="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1e0094d5b8e3283dfa1aec982b42a0d45387642e-2000x1000.png?w=812&q=80&fit=max&auto=format" altName="cd1" h1="7 days.7 delicious deals" p="Welcome to perks week!A whole week of can't miss perks for our loyal members" button="order now"/>

<App imgSrc="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/954d8644738ea5fd14d6beeddf6912f238047c71-2000x1000.png?w=812&q=80&fit=max&auto=format" altName="cd1" h1="7 days.7 delicious deals" p="Welcome to perks week!A whole week of can't miss perks for our loyal members"button="order now"/>

<App imgSrc="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/4d032a8ba01405c41eed8237c11bcd91ec2d9556-2000x1000.png?w=812&q=80&fit=max&auto=format" altName="cd1" h1="7 days.7 delicious deals" p="Welcome to perks week!A whole week of can't miss perks for our loyal members"button="order now"/>

<App imgSrc="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/7119e8836c4564f1b32d1b816ccfac811cba3c0d-2000x1000.png?w=812&q=80&fit=max&auto=format" altName="cd1" h1="7 days.7 delicious deals" p="Welcome to perks week!A whole week of can't miss perks for our loyal members"button="order now"/>

<App imgSrc="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/a364c5344c41381a6f8793a6078a542a52bcb42e-2000x1000.png?w=812&q=80&fit=max&auto=format" altName="cd1" h1="7 days.7 delicious deals" p="Welcome to perks week!A whole week of can't miss perks for our loyal members"button="order now"/> */}






{/* <App
imgSrc={Data[0].imgSrc}
button={Data[0].button}
/>

<App
imgSrc={Data[1].imgSrc}
button={Data[1].button}
/>

<App
imgSrc={Data[2].imgSrc}
button={Data[2].button}
/> */}

