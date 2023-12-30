import { useEffect, useState } from "react";
import { useGetSuggestionData } from "./hooks";
import "./SearchSuggestion.css";

const SearchSuggestion = ({ getCityCoords }) => {
  const { getSuggestions, suggestions } = useGetSuggestionData();
  const [userInput, setUserInput] = useState("");
  const [shortList, setShortList] = useState([]);
  const [latestCoords, setLatestCoords] = useState([]);

  const getUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation not supported");
      }
      
      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getCityCoords([latitude, longitude]);
      }
      
      function error() {
        console.log("Unable to retrieve your location")
  }
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

  const handleClick = (e) => {
    e.preventDefault();
    if (latestCoords) {
      getCityCoords(latestCoords);
    }
  }

  return (
    <>
    <p className="my-location" onClick={getUserLocation}>Use my location</p>
      {suggestions ? (
        <>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input type="submit" value="Set" onClick={handleClick} />
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
        <p>Loading</p>
      )}
    </>
  );
};

export default SearchSuggestion