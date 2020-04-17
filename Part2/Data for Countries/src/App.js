import React, { useState, useEffect } from 'react'
import AllCountries from './components/AllCountries'
import FilterCountries from './components/FilterCountries'
import countriesService from './services/countries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)
  }

  const filteredNames = countries.filter(country => {
    return country.name.toLowerCase().indexOf(filterName) !== -1
  })
  return (
    <div>
      <FilterCountries filterName={filterName} handleFilterChange={handleFilterChange} />
      <AllCountries countries={countries} filteredNames={filteredNames} setFilterName={setFilterName}  />
    </div>
  )
}
export default App
