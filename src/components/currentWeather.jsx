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
      <div className=''>
        <h1 className='text-center font-bold text-xl p-6'>Current Weather</h1>
        <div className='flex justify-center gap-x-6 h-20'>
          <div className='flex justify-center'>
            <div>
              <img className='h-full mb-3' src={`${process.env.REACT_APP_PUBLIC_URL}/weatherIcons/${weatherData.WeatherIcon}.png`} alt="icon" />
              <p className='text-center'>{weatherData.WeatherText}</p>
            </div>
            <p className='text-center text-red-400 text-5xl p-6'>{weatherData.Temperature.Metric.Value} °{weatherData.Temperature.Metric.Unit}</p>
          </div>
          <div className='gap-x-4 mt-3'>
            <p className=''>Wind: {weatherData.Wind.Direction.Degrees}/ {weatherData.Wind.Direction.English}</p>
            <p>Humidty: {weatherData.RelativeHumidity}</p>
            <p>Visibility: {weatherData.Visibility.Metric.Value} {weatherData.Visibility.Metric.Unit}</p>
          </div>
        </div>
      </div>
    )
  )
}
