import React, { Component } from 'react'

class ElementVarCondRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
  render() {
    let message
    if(this.state.isLoggedIn){
        message= <div>Welcome Sanjana</div>
    }
    else {
        message =<div>Welcome Guest</div>
    }
    return (
      <div>{message}</div>
    )
  }
}

export default ElementVarCondRender