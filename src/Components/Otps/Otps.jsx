import React from "react";
class Otps extends React.Component{
    constructor(){
        super();
        this.state = {
            number : "000000"
        }
    }

    otpHandler = ()=>{
        let otpNumber =''
        for(let i = 0; i < 6; i++){
           let randomotp = Math.floor(Math.random()*10)
            // console.log(randomotp);
            otpNumber += randomotp
            
        }
        // console.log(otpNumber);
        
        this.setState({number : otpNumber})
    }
    render(){
        return(
            <div className="colors">
                <h1>Random otps</h1>
                <h1>{this.state.number}</h1>
                <button onClick={this.otpHandler}>Random otp</button>
            </div>
        )
    }
}
export default Otps;