import "./ForecastTile.css"

const ForecastTile = ({time, weather, temp, icon}) => {
  const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <div className="forecastTile">
      <p>{time}</p>
      <img src={imageUrl}></img>
      <p>{weather}</p>
      <p>{temp}</p>
    </div>
  );
};

export default ForecastTile