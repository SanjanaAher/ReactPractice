import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef= React.createRef() //1st in 1
      this.cbRef = null                //1st in 2
      this.setCbRef = (element) =>     //2nd in 2
        this.cbRef= element
      }

      componentDidMount(){
        if(this.cbRef){                 //4th in 2
            this.cbRef.focus()
        }
        //this.inputRef.current.focus() //3rd in 1
        //console.log(this.inputRef)
      }

      clickHandler =() =>{
        alert(this.inputRef.current.value)
      }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef }/> {/*2nd in 1*/}
        <input type="text" ref={this.setCbRef }/> {/*3rd in 2*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo