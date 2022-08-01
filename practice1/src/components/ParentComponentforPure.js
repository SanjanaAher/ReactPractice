import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureCompo from './PureCompo'
import RegularComponentforPure from './RegularComponentforPure'

class ParentComponentforPure extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'sanju'
      }
    }

    componentDidMount() {
        setInterval(() => {
        this.setState({
            name:'sanju'
        })
    },2000)
    }
    
  render() {
    console.log('*********Parent Component Render**************')
    return (
      <div>ParentComponentforPure
      <RegularComponentforPure name={this.state.name} />
      <PureCompo name={this.state.name} />
      <MemoComponent  name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponentforPure