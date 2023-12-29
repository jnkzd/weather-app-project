import ForecastTile from "./ForecastTile"
import './dailyForecast.css'

const DailyForecast = ( {dailyWeatherData} ) => {
    console.log(dailyWeatherData);

    return(
        <div className="dailyTile">
        <h3>{dailyWeatherData[0].dt_txt.slice(0, 10)}</h3>
        {dailyWeatherData &&
            dailyWeatherData.map((item, index) => (
                <ForecastTile
                  key={index}
                  time={item.dt}
                  weather={item.weather[0].description}
                  temp={item.main.temp}
                  icon={item.weather[0].icon}
                />
              )  
        ) 
    }</div>

)}

export default DailyForecast