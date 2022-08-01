import React, { Component } from 'react'

class HOCClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    incrementCount =() =>{
        this.setState(prevState => {
            return{ count: prevState.count + 1}
        })
    }
  render() {
    return (
      <div>
        const { count } = this.state
        <button onClick={this.incrementCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default HOCClickCounter