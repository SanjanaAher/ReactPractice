import React, { Component } from 'react'

class EventinClassComp extends Component {
  render() {
    function clickHandler(){
        console.log('button clickrd')
    }
    return (
      <button onClick={clickHandler}>Click me</button>
    )
  }
}

export default EventinClassComp