import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
     // this.clickHandler = this.clickHandler.bind(this)      {/*3rd approach*/}
    }

    clickHandler()
    {
        this.setState({
            message:'goodbye'
        })
    }
//     clickHandler = () =>{                                           {/*4th approach*/}
//         this.setState({
//         message:'goodbye'
//     })
// }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
     {  /*<button onClick={this.clickHandler.bind(this)}>Click</button>*/} {/*1st approach*/}
     { /*   <button onClick={()=> this.clickHandler()}>Click</button> */}  {/*2st approach*/}
     <button onClick={this.clickHandler}>Click</button>                     {/*3rd and 4th approach*/}

      </div>
    )
  }
}

export default EventBind