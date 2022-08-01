import React, { Component } from 'react'

 class RegularComponentforPure extends Component {
  render() {
    console.log('*********Reg Component Render**************')
    return (
      <div>RegularComponentforPure {this.props.name}</div>
    )
  }
}

export default RegularComponentforPure