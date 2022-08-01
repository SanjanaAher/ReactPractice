import React, { Component } from 'react'

class IfElseCondRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return <div> Welcome Sanju</div>
    }else {
        return <div> Welcome Guest </div>
    }
    // return (
    //   <div>
    //    <div> Welcome Sanju </div>
    //    <div> Welcome Guest</div>
    //   </div>
    // )
  }
}

export default IfElseCondRender