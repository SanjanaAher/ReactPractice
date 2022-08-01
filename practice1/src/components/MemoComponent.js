import React from 'react'

function MemoComponent({name}) {
    console.log('Render Memo')
  return (
    <div>{name}</div>
  )
}

export default React.memo (MemoComponent)