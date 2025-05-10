import React from "react";

class Navbar extends React.Component{
    constructor(){
        super();
        this.state={
            islogin : false
        }
        
    }
    handleLogin = ()=>{
            this.setState({islogin : !this.state.islogin})
        }
    render(){
        return(
            <div className="navbar">
                <button onClick={this.props.colorprop}>multi colors</button>
                <button onClick={this.props.otpprop}>opt generator</button>
                <button onClick={this.props.quotesprop}>random quotes</button>
                <button onClick={this.props.imagesprops}>random images</button>
                <button onClick={this.props.themeprops}>theme</button>
                <button onClick={this.props.loginprop}>Login</button>
                <button onClick={this.props.signupprop}>sign up</button>
                
            </div>
        )
    }
}
export default Navbar;