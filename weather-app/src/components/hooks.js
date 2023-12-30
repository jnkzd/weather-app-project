import { useEffect, useState } from "react";

export const useGetWeatherData = () => {
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

export const useGetSuggestionData = () => {
  const [suggestions, setSuggestions] = useState();
  
  const getSuggestions = async () => {
    const fetchSourceFile = await fetch('/assets/city.list.json')
    const sourceData = await fetchSourceFile.json();
    setSuggestions(sourceData);
  };

  return { suggestions, getSuggestions}
}
