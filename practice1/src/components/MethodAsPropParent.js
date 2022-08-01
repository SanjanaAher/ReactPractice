import React, { Component } from 'react'
import MethodAsPropChild from './MethodAsPropChild'

class MethodAsPropParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         pName: 'parent'
      }

      this.greetParent=this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Helo ${this.state.pName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <MethodAsPropChild  greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default MethodAsPropParent