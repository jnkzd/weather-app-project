import "./ForecastTile.css"

const ForecastTile = ({time, weather, temp, icon}) => {
  const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

  const formatTime = (unix) => {
    return new Date(unix * 1000).toLocaleTimeString({hour: "2-digit", minute: "2-digit"}) 
  }

  return (
    <div className="forecastTile">
      <p>{formatTime(time)}</p>
      <img src={imageUrl}></img>
      <p>{weather}</p>
      <p>{temp}</p>
    </div>
  );
};

export default ForecastTile