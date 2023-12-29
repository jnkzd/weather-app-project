import { useState } from "react"
import Forecast from "./components/Forecast"
import SearchSuggestion from "./components/SearchSuggestion"
import './app.css'

const App = () => {
  const [selectedCityCoords, setSelectedCityCoords] = useState();
  const getCityCoords = (city) => {
    setSelectedCityCoords(city)
  }

  return (<>
  <h1>Hello from App</h1>
  <SearchSuggestion getCityCoords={getCityCoords}/>
  <Forecast selectedCityCoords={selectedCityCoords}/>
  </>)
}

export default App