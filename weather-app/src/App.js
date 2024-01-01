import { useState } from "react";
import Forecast from "./components/Forecast";
import SearchSuggestion from "./components/SearchSuggestion";
import "./app.css";
import UnitsToggle from "./components/UnitsToggle";
import { useControlUnits } from "./components/hooks";

const App = () => {
  const { toggleUnits, scaleSymbol, units, isCelsiusSelected } =
    useControlUnits();
  const [selectedCityCoords, setSelectedCityCoords] = useState();
  const getCityCoords = (city) => {
    setSelectedCityCoords(city);
  };

  return (
    <>
      <h1>Weather app</h1>
      <div className="user-menu">
        <div className="toggle-units">
          <UnitsToggle
            toggleUnits={toggleUnits}
            isCelsiusSelected={isCelsiusSelected}
          />
        </div>
        <SearchSuggestion getCityCoords={getCityCoords} />
      </div>
      <Forecast
        selectedCityCoords={selectedCityCoords}
        scaleSymbol={scaleSymbol}
        units={units}
      />
    </>
  );
};

export default App;
