import { useState } from "react"
import Forecast from "./components/Forecast"
import SearchSuggestion from "./components/SearchSuggestion"
import './app.css'
import UnitsToggle from "./components/UnitsToggle"
import { useControlUnits } from "./components/hooks"

const App = () => {
  const { toggleUnits, scaleSymbol, units, isCelsiusSelected } = useControlUnits();
  const [selectedCityCoords, setSelectedCityCoords] = useState();
  const getCityCoords = (city) => {
    setSelectedCityCoords(city)
  }

  return (<>
  <h1>Weather Forecast App</h1>
  <UnitsToggle toggleUnits={toggleUnits} isCelsiusSelected={isCelsiusSelected}/>
  <SearchSuggestion getCityCoords={getCityCoords}/>
  <Forecast selectedCityCoords={selectedCityCoords} scaleSymbol={scaleSymbol} units={units}/>
  </>)
}

export default App