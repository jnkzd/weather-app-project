import { useEffect } from "react";
import useGetWeatherData from "./hooks"
import ForecastTile from "./ForecastTile";

const Forecast = () => {
    const {weatherData, fetchData} = useGetWeatherData();
    
    useEffect(() => {
     fetchData();
    }, [])

    return(
    <>
    <h1>Forecast component</h1>
    {weatherData ?
    <>
    <ForecastTile time={weatherData.list[0].dt_txt} temp={weatherData.list[0].main.temp} weather={weatherData.list[0].weather[0].description}/> 
    <ForecastTile time={weatherData.list[1].dt_txt} temp={weatherData.list[1].main.temp} weather={weatherData.list[1].weather[0].description}/>
    </> : <p>Loading</p>}
    </>)
}

export default Forecast