import React,{Component} from "react";
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="card"> 
                <img src ={this.props.imgSrc}/>
                <div class="con">
                <h1 style={{color:"Brown"}}>{this.props.bHead}</h1> <br/>
                <b style={{color:"Brown"}}>{this.props.bDesc}</b> <br/>
                <button style={{color:"orangered",borderRadius:"4px",padding:"8px"}}>{this.props.but}</button>
            </div>
            </div>
        )
    }
}
export default App

