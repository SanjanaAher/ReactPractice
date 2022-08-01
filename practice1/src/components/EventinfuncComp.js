import React from 'react'

function EventinfuncComp() {
    function clickHandler(){
        console.log('Button clicked')
    }
  return (
   <button onClick={clickHandler}>Click</button>
  )
}

export default EventinfuncComp