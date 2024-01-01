import { useEffect, useState } from "react";
import { useGetSuggestionData } from "./hooks";
import "./SearchSuggestion.css";
import CustomCoords from "./CustomCoords";

const SearchSuggestion = ({ getCityCoords }) => {
  const { getSuggestions, suggestions } = useGetSuggestionData();
  const [userInput, setUserInput] = useState("");
  const [shortList, setShortList] = useState([]);
  const [latestCoords, setLatestCoords] = useState([]);

  const getUserLocation = () => {
      const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getCityCoords([latitude, longitude]);
      }
      
      const error = () => {
        alert('Failed to detect location')
  }
  navigator.geolocation ? 
  navigator.geolocation.getCurrentPosition(success, error) : alert("Geolocation not supported");
  }

  useEffect(() => {
    getSuggestions();
  }, []);

  useEffect(() => {
    if (suggestions && userInput.length > 0) {
      setShortList(
        suggestions.filter((city) =>
          city.name.toUpperCase().startsWith(userInput.toUpperCase())
        )
      );
    } else {
      setShortList([]);
    }
  }, [userInput]);

  const handleSearchButton = (e) => {
    e.preventDefault();
    if (latestCoords) {
      getCityCoords(latestCoords);
    }
  }

  return (
    <div className="search-suggestion-box">
    <p className="my-location" onClick={getUserLocation}>Use my location <img className="icon-location" src="/assets/icons/location.svg"></img></p>
    <CustomCoords getCityCoords={getCityCoords}/>
      {suggestions ? (
        <>
        <div className="search-bar">
          <input
          placeholder="Start typing..."
            type="text" className="search-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input className="submit-search" type="submit" value="Set" onClick={handleSearchButton} />
          </div>
          <div className="suggestions-container">
            {shortList.length > 0 ? (
              shortList.slice(0, 35).map((city, index) => (
                <div
                  className="suggestion"
                  key={index}
                  onClick={(e) => {
                    getCityCoords([city.coord.lat, city.coord.lon]);
                    setUserInput(city.name);
                    setLatestCoords([city.coord.lat, city.coord.lon]);
                  }}
                >
                  {city.name}
                  {city.state.length > 0 ? " " + city.state + " " : " "}
                  ({city.country})
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <div className="icon-container"><img className="icon-loading" src="/assets/icons/loading.svg" alt="loading"></img></div>
      )}
    </div>
  );
};

export default SearchSuggestion