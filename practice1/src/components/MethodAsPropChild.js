import React from 'react'

function MethodAsPropChild(props) {
  return (
    <div>
       {/* <button onClick={ props.greetHandler}>Greet Parent</button> */}
       <button onClick={ () => props.greetHandler('child')}>Greet Parent</button> {/* passing parameter from child to parent component using arrow function*/ }
    </div>
  )
}

export default MethodAsPropChild