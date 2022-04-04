import axios from "axios";
import React, { useState } from "react"
import { CurrentLocationIcon } from "../assets/icons/currentLocation"
import { SearchIcon } from "../assets/icons/search"

export const SearchBar = ({ setLocationKey }) => {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search"
    axios.get(`${baseUrl}?q=${query}&apikey=${process.env.REACT_APP_ACCU_KEY}`)
      .then(({ data }) => setLocationKey(data[0].Key))
  }

  const handleQuery = (e) => {
    setQuery(e.currentTarget.value)
  }

  return (
    <div className="flex gap-x-4 px-4 py-2 w-1/2 text-center bg-white text-black">
      <CurrentLocationIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 hover:cursor-pointer" />

      <input
        type="text"
        className="form-search flex-grow focus:outline-none form-control"
        placeholder="Enter a city"
        onChange={handleQuery}
      />
      <button disabled={query.length < 1} className="disabled:text-gray-300 text-gray-700" onClick={handleSearch}>
        <SearchIcon className="h-6 w-6" />
      </button>
    </div>
  )
}
