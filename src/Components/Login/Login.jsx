import React, { Component } from 'react'


export default class Login extends Component {
  constructor(){
    super();
    this.state={
      switchlog : true
    }
  }
  switchToSignup = ()=>{
    this.setState({switchlog : !this.state.switchlog})
  }
  render() {
    return (
      <div className='login'>
            {this.state.switchlog?
            <div>
          <form action="" className='login'>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='pswd' />
            <button>Login</button>

        </form>
        </div>
        : 
        <div>
           <form action="" className='login'>
            <input type="text" placeholder='name' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='pswd' />
            <input type="password" placeholder='confirm pswd' />
            <button>Signup</button>
        </form>
        </div>}
        <button onClick={this.switchToSignup}>{this.state.switchlog?"switch to signup":"switch to login"}</button>
      </div>
    )
  }
}

