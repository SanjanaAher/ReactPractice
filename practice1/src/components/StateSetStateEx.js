import React, { Component } from 'react'

export class StateSetStateEx extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }

    Increment(){
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => {console.log('Callback value ',this.state.count)
    // }
    // )

        this.setState(prevState  => ( {
            count: prevState.count + 1
        }))
        console.log(this.state.count)

    }
    
    IncrementFive()
    {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

  render() {
    return (
    <>
      <div>{this.state.count}</div>
      <button onClick={() => this.IncrementFive()}>Increment</button>
    </>
    )
  }
}

export default StateSetStateEx