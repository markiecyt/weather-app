import axios from 'axios'
import React, { useEffect, useState } from 'react'
import dummyDailyForecastsData from '../data/daysDailyForecasts.json'
import { DailyForecastCard } from './dailyForecastCard'


export const DailyForecasts = ({ locationKey }) => {

  const forecastsData = dummyDailyForecastsData

  console.log("forecastsData: ", forecastsData);

  return (
    <div className='mt-3'>
      <p className='text-center'>Next 5 days Weather</p>
      <div className='flex mx-3 mt-3 text-center'>
        {
          forecastsData.DailyForecasts.map((f) => <DailyForecastCard forecast={f} />)

        }
      </div>
    </div>
  )
}
