import React from 'react'
import CountriesList from './CountriesList'
import OneCountry from './OneCountry'

const AllCountries = ({ filteredNames, setFilterName, setCurrentWeather }) => {

    if (filteredNames.length > 10) {
        return (
            <p>Too many countries, please specify.</p>
        )
    } else if (filteredNames.length === 1) {
        return (
            <div>
                {filteredNames.map(country => <OneCountry key={country.name} country={country} setCurrentWeather={setCurrentWeather} />)}
            </div>
        )
    }
    else {
        return (
            <div>
                {filteredNames.map(country => <CountriesList key={country.name} country={country} setFilterName={setFilterName} />)}
            </div>
        )
    }
}

export default AllCountries
