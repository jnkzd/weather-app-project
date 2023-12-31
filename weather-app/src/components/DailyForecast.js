import ForecastTile from "./ForecastTile"
import './dailyForecast.css'

const DailyForecast = ( {dailyWeatherData, units} ) => {
    const formatDate = (unix) => {
        return new Date(unix * 1000).toLocaleDateString([], {day:'numeric', month: 'numeric', year: 'numeric', weekday: 'long'}) 
      }

    return(
        <div className="day-container">
        <h2 className="date">{formatDate(dailyWeatherData[0].dt)}</h2>
        <div className="dailyTile">
        {dailyWeatherData &&
            dailyWeatherData.map((item, index) => (
                <ForecastTile
                  key={index}
                  time={item.dt}
                  weather={item.weather[0].description}
                  temp={item.main.temp}
                  icon={item.weather[0].icon}
                  units={units}
                />
              )  
        ) 
    }</div></div>
)}

export default DailyForecast