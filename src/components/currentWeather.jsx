import axios from 'axios'
import React, { useEffect, useState } from 'react'
import dummyWeatherData from '../data/currentConditions.json'

export const CurrentWeather = ({ locationKey }) => {
  // const [weatherData, setWeatherData] = useState(null)

  // useEffect(() => {
  //   if (locationKey) {

  //     const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/"
  //     axios.get(`${baseUrl}${locationKey}?details=true&apikey=${process.env.REACT_APP_ACCU_KEY}`)
  //       .then(({ data }) => setWeatherData(data[0]))
  //   }
  // }, [locationKey])

  const weatherData = dummyWeatherData[0]

  console.log("weatherData: ", weatherData);

  return (
    weatherData && (
      <div>
        <p>current weather: {weatherData.WeatherText}</p>
        <p>temperature: {weatherData.Temperature.Metric.Value} {weatherData.Temperature.Metric.Unit}</p>
      </div>
    )
  )
}
