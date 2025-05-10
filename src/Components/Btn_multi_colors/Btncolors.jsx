import React from "react";
class Btncolors extends React.Component{
    constructor(){
        super();
        this.state={
            color : "white",
            colorcode : "#ffffff"
        }
    }
    colorHandler = ()=>{

        const hexacolors = "abcdef0123456789"
        let hexa = "#"
        for (let i = 0; i < 6; i++){
            // console.log(i);       
            let randomhexa = Math.floor(Math.random()*hexacolors.length)
            hexa += hexacolors[randomhexa]
        }
                // console.log(hexa)
        this.setState({color:hexa, colorcode : hexa})
    }
    render(){
        return(
            <div style={{background : this.state.color}} className="colors">
                <h1>Multi colors randomly</h1>
                <h1>Color code : {this.state.colorcode}</h1>
                <button onClick={this.colorHandler}>random color</button>
            </div>
        )
    }
}
export default Btncolors;