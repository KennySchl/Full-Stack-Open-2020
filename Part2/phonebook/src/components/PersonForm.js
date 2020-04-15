import React from 'react'

const PersonForm = ({ addPersons, newName, newNumber, handleNumberChange, handlePersonChange }) => {
  return (
    <div>
      <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
