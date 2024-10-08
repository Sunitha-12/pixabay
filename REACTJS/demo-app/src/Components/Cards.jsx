import React from "react";
import { Link } from "react-router-dom";
class App extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        
    }
    render(){
        return(

             <>
             <div class="card">
                  <div className="innerdata">
                       <div className="data">
                          <h2>BENGALURU</h2>
                           <p>100+  PLACES</p>
                        </div>
                       <Link to="/menu">
                        <img src="https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="cardimg"></img>
                        </Link>
                        
            
                    </div>

                    <div className="innerdata">
                        <div className="data">
                            <h2>GOA</h2>
                             <p>250+ PLACES</p>
                             </div>
                            <Link to="/detail">
                            <img src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="cardimg"></img>
                            </Link>
                           </div>
                       

                    <div className="innerdata">
                        <div className="data">
                            <h2>KOLKATA</h2>
                            <p>100+ PLACES</p>
                        </div>
                           <img src="https://images.pexels.com/photos/2524368/pexels-photo-2524368.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="cardimg"></img>
                        </div>

                   <div className="innerdata">
                        <div className="data">
                                <h2>SINGAPORE</h2>
                               <p>100+ PLACES</p>
                        </div>
                            <img src="https://i.ibb.co/WVL7n8K/singapore.jpg" alt="cardimg"></img>
                    </div>

                 <div className="innerdata">
                       <div className="data">
                                <h2>MALAYSIA</h2>
                                <p>100+ PLACES</p>
                       </div>
                             <img src="https://images.pexels.com/photos/2940925/pexels-photo-2940925.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="cardimg"></img>
                  </div>

                  <div className="innerdata">
                        <div className="data">
                            <h2>BANGKOK</h2>
                            <p>250+ PLACES</p>
                        </div>
                       <img src="https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?cs=srgb&dl=pexels-ingo-joseph-1682748.jpg&fm=jpg" alt="cardimg"></img>
                    </div>

                    <div className="innerdata">
                        <div className="data">
                                 <h2>NEW YORK</h2>
                                 <p>100+ PLACES</p>
                        </div>
                        <img src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="cardimg"></img>
                    </div> 
                

                 <div className="innerdata">
                         <div className="data">
                             <h2>PARIS</h2>
                             <p>100+ PLACES</p>
                         </div>
                             <img src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="cardimg"></img>
                       </div>
                    </div>

        </>

        )
    }
}
export default App