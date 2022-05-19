import axios from 'axios'
import React, { useEffect, useState } from 'react'
import dummyDailyForecastsData from '../data/daysDailyForecasts.json'


export const DailyForecastCard = ({ forecast }) => {

  return (
    <div className=' m-3 pb-2 bg-violet-300 rounded-md'>
      <p className='mt-3 mx-3'>{forecast.Date}</p>
      <p className='mt-3 mx-3'>{forecast.Temperature.Minimum.Value} {forecast.Temperature.Minimum.Unit}</p>
      <p className='mt-3 mx-3'>{forecast.Temperature.Maximum.Value} {forecast.Temperature.Maximum.Unit}</p>
    </div>
    // <p>{forecast.Temperature.Minimum.Value}</p>

  )
}
