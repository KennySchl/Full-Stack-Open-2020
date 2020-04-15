import React from 'react'
import personService from '../services/persons'

const Person = ({ person, delPersons }) => {


  return (
    <div>
      {person.name} {person.number} <button onClick={() => personService.deletePerson(person.id, person.name, delPersons)}>delete</button>
    </div>
  )
}
export default Person
