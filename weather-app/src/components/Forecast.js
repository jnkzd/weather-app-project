import { useEffect, useState } from "react";
import { useGetWeatherData } from "./hooks";
import ForecastTile from "./ForecastTile";
import "./forecast.css";

const Forecast = ({ selectedCityCoords }) => {
  const { weatherData, fetchData } = useGetWeatherData();
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    if (selectedCityCoords) {
      setLat(selectedCityCoords[0]);
      setLong(selectedCityCoords[1]);
    }
  }, [selectedCityCoords]);

  useEffect(() => {
    if (lat && long) {
      fetchData([lat, long]);
    }
  }, [lat, long]);

  const setCoords = () => {
    fetchData([lat, long]);
  };

  useEffect(() => {
    console.log("daily data useEffect");
    const allDays = [];
    let singleDay = [];
  
    if (weatherData && weatherData.cod === '200') {
      let day = weatherData.list[0].dt_txt.slice(0,10);
      weatherData.list.forEach(element => {
        if (element.dt_txt.slice(0,10) === day) {
          singleDay.push(element);
        } else {
          allDays.push(singleDay);
          day = element.dt_txt.slice(0,10);
          singleDay = [element];
        }
      });
      allDays.push(singleDay);
  
      if (allDays.length > 0) {
        setDailyForecast(allDays);
      }
      console.log(allDays);
    }
  }, [weatherData]);

  return (
    <>
      {weatherData && weatherData.cod === "200" ? (
        <div className="container">
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
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Forecast;
