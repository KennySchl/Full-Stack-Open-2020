import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notification, setNotification] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPersons = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const dupeCheck = (name) => {
      const dupe = persons.filter(person => person.name === name)
      return dupe.length > 0
    }

    if (dupeCheck(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const person = persons.find(n => n.name === newName)
      const numberChange = { ...person, number: personObject.number}
    
      // alert(`${newName} is already added to phonebook`)
        
        personService
          .update(person.id, numberChange)
          .then(returnedPerson => {
            setPersons(persons.map(name => name.id !== person.id ? name : returnedPerson))
          })
          .catch(error => {
            setErrorMessage(
              `${newName} was already removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)  
        })
        }
    } else {

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotification(`${newName} has been added`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)         
        })
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {

    console.log(event.target.value)
    setFilterName(event.target.value)
  }
  const filteredNames = persons.filter(person => {
    return person.name.toLowerCase().indexOf(filterName) !== -1
  })

  const delPersons = () => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Notification message={notification} />
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h3>Add a New</h3>
      <PersonForm addPersons={addPersons} newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} handlePersonChange={handlePersonChange} />
      <h3>Numbers</h3>
      {filteredNames.map(person => <Person key={person.name} person={person} delPersons={delPersons} />)}
    </div>
  )
}

export default App
