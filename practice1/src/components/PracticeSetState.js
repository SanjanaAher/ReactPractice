import React, { Component } from 'react'

export class practiceSetState extends Component {
    constructor() {
        super()
        this.state={
            sum:0
        }
    }

    sum(){
        this.setState(prevState => ({
            sum: prevState.sum + 1
        }))
    }

    Sumthree()
    {
        this.sum()
        this.sum()
        this.sum()
    }

  render() {
    return (
    <>
      <div>{this.state.sum}</div>
      <button onClick={() => this.Sumthree()}>Summation</button>
    </>
    )
  }
}

export default practiceSetState