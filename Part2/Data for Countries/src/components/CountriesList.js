import React from 'react'

const CountriesList = ({ country, setFilterName }) => {

   const handleClick = () => {
    setFilterName(country.name.toLowerCase())
}
        return (
            <div>
                {country.name} <button onClick={handleClick}>show</button>
            </div>
        )
}
export default CountriesList



