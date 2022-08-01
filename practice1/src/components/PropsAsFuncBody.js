import React from 'react'

function PropsAsFuncBody(props) {
    const {name,fav} = props
  return (
    <h1>I am {name}. I like {fav}.</h1>
  )
}

export default PropsAsFuncBody