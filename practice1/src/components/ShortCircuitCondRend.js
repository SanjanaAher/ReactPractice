import React, { Component } from 'react'

class ShortCircuitCondRend extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    return this.state.isLoggedIn && <div>Welcome sanj</div>
    
  }
}

export default ShortCircuitCondRend