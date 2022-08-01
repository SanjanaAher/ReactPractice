import React, { Component } from 'react'
import ForwardRef from './ForwardRef'

class ParentForwardInput extends Component {
    constructor(props) {
      super(props)
    
      this.InputRef = React.createRef()
    }

    clickHandler=() => {
        this.InputRef.current.focus()
    }
  render() {
    return (
      <div>
        <ForwardRef ref={this.InputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ParentForwardInput