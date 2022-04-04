import "./assets/stylesheets/index.css"
import React, { useState } from 'react'
import { Navbar } from "./components/navbar"
import { CurrentWeather } from "./components/currentWeather"

const App = () => {
  const [locationKey, setLocationKey] = useState("")

  console.log("location key: ", locationKey);
  return (
    <div>
      <Navbar setLocationKey={setLocationKey} />
      <CurrentWeather locationKey={locationKey} />
    </div>
  )
}

export default App
