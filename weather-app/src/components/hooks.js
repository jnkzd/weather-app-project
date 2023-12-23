import { useState } from "react";

const useGetWeatherData = () => {
  const [weatherData, setWeatherData] = useState();

  const fetchData = async () => {
    const res = await fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=49.593777&lon=17.250879&appid=7649f65dc6d3c6bc1e9f39e0f0e812ac&units=metric'
    );
    const data = await res.json();
    console.log(data);
    setWeatherData(data);
  };

    return { weatherData, fetchData };
};

export default useGetWeatherData
