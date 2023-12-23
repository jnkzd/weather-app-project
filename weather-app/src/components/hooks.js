import { useState } from "react";

const useGetWeatherData = () => {
  const [weatherData, setWeatherData] = useState();

  const fetchData = async () => {
    const res = await fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=49.593777&lon=17.250879&appid=4d8b5e06f5d20157014dc9a48c6b3295&units=metric'
    );
    const data = await res.json();
    console.log(data);
    setWeatherData(data);
  };
  
    return { weatherData, fetchData };
};

export default useGetWeatherData
