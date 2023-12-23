import { useEffect } from "react";
import useGetWeatherData from "./hooks";
import ForecastTile from "./ForecastTile";

const Forecast = () => {
  const { weatherData, fetchData } = useGetWeatherData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Forecast component</h1>
      {weatherData ? (
        <>
          <h2>{weatherData.city.name}, {weatherData.city.country}</h2>
          {weatherData.list.map((item, index) => (
            <ForecastTile key={index} time={item.dt_txt} weather={item.weather[0].description} temp={item.main.temp}/>
          ))}
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Forecast;