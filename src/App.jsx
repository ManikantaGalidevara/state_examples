import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Btncolors from "./Components/Btn_multi_colors/Btncolors";
import Otps from "./Components/Otps/Otps";
import Quotes from "./Components/Quotes/Quotes";
import Images from "./Components/Images/Images";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Theme from "./Components/theme/Theme";
import './App.css'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      islogin : false,
      issignup : false,
      multicolo : false,
      multiotps : false,
      multiquotes : false,
      multiimages : false,
      darktheme : false,
    }
  }
    handleLogin = ()=>{
    this.setState({islogin : !this.state.islogin, issignup : false, multicolo : false, multiotps: false, multiimages : false, multiquotes : false, darktheme : false})
   }

   handleSignup = ()=>{
    this.setState({islogin : false, issignup : !this.state.issignup, multicolo : false, multiotps: false, multiimages : false, multiquotes : false, darktheme : false})
   }
   handlecolor = ()=>{
    this.setState({multicolo : !this.state.multicolo, multiotps: false, multiimages : false, multiquotes : false, darktheme : false, islogin : false, issignup : false})
   }
   handleotp = ()=>{
    this.setState({multicolo : false, multiotps: !this.state.multiotps, multiimages : false, multiquotes : false, darktheme : false, islogin : false, issignup : false})
   }
   handlequotes = ()=>{
    this.setState({multicolo : false, multiotps: false, multiimages : false, multiquotes : !this.state.multiquotes, darktheme : false, islogin : false, issignup : false})
   }
   handlesimages = ()=>{
    this.setState({multicolo : false, multiotps: false, multiimages : !this.state.multiimages, multiquotes : false, darktheme : false, islogin : false, issignup : false})
   }
   handletheme = ()=>{
    this.setState({multicolo : false, multiotps: false, multiimages : false, multiquotes : false, darktheme : !this.state.darktheme, islogin : false, issignup : false})
   }
  render(){
    return(
      <div>
        <Navbar  loginprop={this.handleLogin} signupprop={this.handleSignup} colorprop={this.handlecolor} otpprop={this.handleotp} quotesprop={this.handlequotes} imagesprops={this.handlesimages} themeprops={this.handletheme} />
        
        {this.state.multicolo?<Btncolors></Btncolors>: null}
        {this.state.multiotps?<Otps />: null}
        {this.state.multiquotes?<Quotes />: null}
        {this.state.multiimages?<Images /> : null}
        {this.state.darktheme?<Theme /> : null}
        {this.state.islogin?<Login />: null}
        {this.state.issignup?<Signup />: null}
      </div>
    )
  }
}
export default App;