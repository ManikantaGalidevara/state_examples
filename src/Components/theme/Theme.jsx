import React from "react";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

class Theme extends React.Component{
    constructor(){
        super();
        this.state ={
            day : true
        }
    }
    themeHandle = ()=>{
        this.setState({day : !this.state.day})
    }
    render(){
        return(
            <div style={{backgroundColor : this.state.day?"white":"black"  }} className="colors">
                <h1 style={{color : this.state.day?"black":"white"  }}>Dark theme / light theme</h1>
                <button onClick={this.themeHandle}>{this.state.day?<IoMoon />:<IoIosSunny />}</button>
                
            </div>
        )
    }
}
export default Theme;