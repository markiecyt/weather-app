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
      <div className='mt-6 mx-10 h-full bg-center bg-cover rounded' style={{
        backgroundImage: `url(./skybg.jpg)`
      }}>
        <h1 className='text-center font-bold text-xl p-6'>Current Weather</h1>
        <div className='flex justify-center gap-x-6'>
          <div className='flex w-1/3 justify-around items-center'>
            <div className='flex flex-col h-full'>
              <img className='pb-3 opacity-80' src={`${process.env.REACT_APP_PUBLIC_URL}/weatherIcons/${weatherData.WeatherIcon}.png`} alt="icon" />
              <p className='text-center mb-3'>{weatherData.WeatherText}</p>
            </div>
            <p className='text-center text-red-400 text-5xl'>{weatherData.Temperature.Metric.Value} °{weatherData.Temperature.Metric.Unit}</p>
          </div>
          <div className=''>
            <p className=''>Wind: {weatherData.Wind.Direction.Degrees}/ {weatherData.Wind.Direction.English}</p>
            <p>Humidty: {weatherData.RelativeHumidity}</p>
            <p>Visibility: {weatherData.Visibility.Metric.Value} {weatherData.Visibility.Metric.Unit}</p>
          </div>
        </div>
      </div>
    )
  )
}
