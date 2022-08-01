import React from 'react'
import RefactorListOfObject from './RefactorListOfObject'

function ListOfObject() {
    const persons =[
        {
            id:1,
            name:'Sanju',
            age:21,
            skill:'React'
        },
        {
            id:2,
            name:'Dnyanu',
            age:18,
            skill:'Angular'
        },
        {
            id:3,
            name:'Pallu',
            age:15,
            skill:'Vue'
        }
    ]
    const objList = persons.map( person => <RefactorListOfObject key={person.id} person={person} />)
  return (
    <div>{objList}</div>
  )
}

export default ListOfObject