import React, { Component } from 'react'

class TernaryCondRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
  render() {
    return (
        this.state.isLoggedIn ?
      <div>Welcome Sanjo</div> :
      <div>Welcome gue</div>

    )
  }
}

export default TernaryCondRender