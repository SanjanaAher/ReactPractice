import React from 'react'

function IndexAsKey() {
    const names=['Bruce','Clark','Diana','Bruce']
  return (
   // names.map(name => <h2 key={name}>{name}</h2>) //will get error as name is repeated so we will take index
   names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
  )
}

export default IndexAsKey