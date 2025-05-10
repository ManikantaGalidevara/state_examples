import React, { Component } from 'react'

export default class Signup extends Component {
  constructor(){
    super();
    this.state= {
      switchsignup : true
    }
  }
  switchToLogin = ()=>{
    this.setState({switchsignup : !this.state.switchsignup})
  }
  render() {
    return (
      <div className='login'>
        {this.state.switchsignup?
        <div>
          <form action="" className='login'>
            <input type="text" placeholder='name' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='pswd' />
            <input type="password" placeholder='confirm pswd' />
            <button>Signup</button>
        </form>
        </div>
        :
        <div>
          <form action="" className='login'>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='pswd' />
            <button>Login</button>
        </form>
        </div>
        }
            <button onClick={this.switchToLogin}>{this.state.switchsignup?"switch to login":"switch to signup"}</button>
      </div>
    )
  }
}
