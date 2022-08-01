import React, { Component } from 'react'
import RefInClassCompo from './RefInClassCompo'

 class ParentRefInClassCompo extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <RefInClassCompo ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ParentRefInClassCompo