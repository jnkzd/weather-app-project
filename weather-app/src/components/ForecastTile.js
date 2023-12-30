import "./ForecastTile.css"

const ForecastTile = ({time, weather, temp, icon}) => {
  const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

  const formatTime = (unix) => {
    return new Date(unix * 1000).toLocaleTimeString([],{hour: "2-digit", minute: "2-digit"}) 
  }

  return (
    <div className="forecastTile">
      <div><img className="icon" src="/assets/icons/clock.svg"/>{formatTime(time)}</div>
      <img className="weather-graphics" src={imageUrl}></img>
      <div>{weather}</div>
      <div><img className="icon" src="/assets/icons/temp.svg"/>{temp}</div>
    </div>
  );
};

export default ForecastTile