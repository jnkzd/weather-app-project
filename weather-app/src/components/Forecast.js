import { useEffect } from "react";
import useGetWeatherData from "./hooks"

const Forecast = () => {
    const {weatherData, fetchData} = useGetWeatherData();
    
    useEffect(() => {
     fetchData();
    }, [])

    return(
    <>
    <h1>Forecast component</h1>
    {weatherData ? <p>City name: {weatherData.city.name}</p> : <p>Loading</p>}
    </>)
}

export default Forecast