import { useEffect, useState } from "react";
import { useGetWeatherData } from "./hooks";
import ForecastTile from "./ForecastTile";
import "./forecast.css";
import DailyForecast from "./DailyForecast";

const Forecast = ({ selectedCityCoords }) => {
  const { weatherData, fetchData } = useGetWeatherData();
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [dailyForecast, setDailyForecast] = useState([]);

  const formatDate = (unix) => {
    return new Date(unix * 1000).toLocaleDateString() 
  }

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
      let day = formatDate(weatherData.list[0].dt);
      weatherData.list.forEach(element => {
        if (formatDate(element.dt) === day) {
          singleDay.push(element);
        } else {
          allDays.push(singleDay);
          day = formatDate(element.dt);
          singleDay = [element];
        }
      });
      allDays.push(singleDay);
  
      if (allDays.length > 0) {
        setDailyForecast(allDays);
      }
      console.log(dailyForecast);
      console.log(formatDate(allDays[5][0].dt));
    }
  }, [weatherData]);

  return (
    <>
      {weatherData && weatherData.cod === "200" ? (
        <div className="container">
          <h2>
            {weatherData.city.name}, {weatherData.city.country}
          </h2>
       {weatherData && dailyForecast ? 
    (dailyForecast.map((day, index) => (
        <DailyForecast key={index} dailyWeatherData={day} />
    ))
) : <p>loading</p>}
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Forecast;
