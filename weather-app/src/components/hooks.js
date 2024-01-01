import { useEffect, useState } from "react";

export const useGetWeatherData = () => {
  const [weatherData, setWeatherData] = useState();

  const fetchData = async (coords, units) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${process.env.REACT_APP_API_KEY}&units=${units}`
    );
    const data = await res.json();
    setWeatherData(data);
  };

    return { weatherData, fetchData};
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

export const useControlUnits = () => {
  const [isCelsiusSelected, setIsCelsiusSelected] = useState(true);
  const [units, setUnits] = useState();
  const [scaleSymbol, setScaleSymbol] = useState('');

  useEffect(() => {
    if (isCelsiusSelected) {
      setUnits('metric');
      setScaleSymbol('°C')
    } else {
      setUnits('imperial')
      setScaleSymbol('°F')
    }
  }, [isCelsiusSelected])

  const toggleUnits = () => {
    setIsCelsiusSelected(!isCelsiusSelected);
    console.log('unit change triggered')
  }
  return {toggleUnits, units, scaleSymbol, isCelsiusSelected}
}