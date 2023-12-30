import { useState } from "react"
import Forecast from "./components/Forecast"
import SearchSuggestion from "./components/SearchSuggestion"
import './app.css'
import UnitsToggle from "./components/UnitsToggle"
import CustomCoords from "./components/CustomCoords"

const App = () => {
  const [selectedCityCoords, setSelectedCityCoords] = useState();
  const getCityCoords = (city) => {
    setSelectedCityCoords(city)
  }

  return (<>
  <h1>Weather Forecast App</h1>
  <UnitsToggle />
  <CustomCoords getCityCoords={getCityCoords}/>
  <SearchSuggestion getCityCoords={getCityCoords}/>
  <Forecast selectedCityCoords={selectedCityCoords}/>
  </>)
}

export default App