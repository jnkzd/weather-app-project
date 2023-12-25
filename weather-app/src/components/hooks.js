import { useState } from "react";

const useGetWeatherData = () => {
  const [weatherData, setWeatherData] = useState();

  const fetchData = async (coords) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await res.json();
    console.log(data);
    setWeatherData(data);
  };

    return { weatherData, fetchData };
};

export default useGetWeatherData
