import { useEffect, useState } from "react";
import useGetWeatherData from "./hooks";
import ForecastTile from "./ForecastTile";

const Forecast = () => {
  const { weatherData, fetchData } = useGetWeatherData();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const setCoords = () => {
    console.log(lat + " " + long)
    fetchData([lat, long])
  }

  const handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;

    if (fieldName == "lat") {
      setLat(fieldValue);
      console.log(lat)
    }

    if (fieldName == "long") {
      setLong(fieldValue);
    }
  }



  return (
    <>
      <h1>Forecast component</h1>
      <input type="text" name="lat" onChange={handleChange} placeholder="Latitude"></input>
      <p></p>
      <input type="text" name="long" onChange={handleChange} placeholder="Longitude"></input>
      <p></p>
      <button onClick={setCoords}>Set coords</button>
      {weatherData ? (
        <>
          <h2>{weatherData.city.name}, {weatherData.city.country}</h2>
          {weatherData.list.map((item, index) => (
            <ForecastTile key={index} time={item.dt_txt} weather={item.weather[0].description} temp={item.main.temp}/>
          ))}
        </>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Forecast;