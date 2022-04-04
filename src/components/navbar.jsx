import React from "react"
import { SearchBar } from "./searchBar"

export const Navbar = ({ setLocationKey }) => {
  return (
    <div className="flex bg-mc-primary text-white h-12 items-center px-10">
      <h1 className="w-1/4 font-bold text-xl">Weather App</h1>
      <SearchBar setLocationKey={setLocationKey} />
    </div>
  )
}
