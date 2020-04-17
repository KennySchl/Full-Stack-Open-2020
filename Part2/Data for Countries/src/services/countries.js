import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/all'
const currentWeatherUrl ='http://api.weatherstack.com/current'

  
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getCurrentWeather = ({params}) => {
    const request = axios.get(currentWeatherUrl, {params})
    return request.then(response => response.data)
}

export default { getAll, getCurrentWeather }
