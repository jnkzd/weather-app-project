import { useState } from "react";
import useGetWeatherData from "./hooks";
import ForecastTile from "./ForecastTile";

const Forecast = () => {
  const { weatherData, fetchData } = useGetWeatherData();
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const setCoords = () => {
    console.log(lat + " " + long);
    fetchData([lat, long]);
  };

  return (
    <>
      <h1>Forecast component</h1>
      <input
        type="text"
        name="lat"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      ></input>
      <p></p>
      <input
      value={long}
        type="text"
        name="long"
        onChange={(e) => setLong(e.target.value)}
        placeholder="Longitude"
      ></input>
      <p></p>
      <button onClick={setCoords}>Set coords</button>
      {weatherData && weatherData.cod === "200" ? (
        <>
          <h2>
            {weatherData.city.name}, {weatherData.city.country}
          </h2>
          {weatherData.list.map((item, index) => (
            <ForecastTile
              key={index}
              time={item.dt}
              weather={item.weather[0].description}
              temp={item.main.temp}
              icon={item.weather[0].icon}
            />
          ))}
        </>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Forecast;
