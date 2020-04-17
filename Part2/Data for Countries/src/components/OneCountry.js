import React from 'react'
import CurrentWeather from './CurrentWeather'

const OneCountry = ({ country }) => {

    return (
        <div>
            <h1>
                {country.name}
            </h1>
            <p>
                Capital: {country.capital}
            </p>
            <p>
                Population: {country.population}
            </p>
            <h2>
                Languages
                </h2>
            <ul>
                {country.languages.map(languages => <li key={languages.name}>{languages.name}</li>)}
            </ul>
            <img src={country.flag} alt="{country.name}'s flag" height="60" width="100"></img>
            <CurrentWeather country={country} />
        </div>
    )
}
export default OneCountry
