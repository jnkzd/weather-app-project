import "./styles/forecast-tile.css";

const ForecastTile = ({ time, weather, temp, icon, units }) => {
  const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const formatTime = (unix) => {
    return new Date(unix * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="forecastTile">
      <div className="time">
        <img className="icon" src="/assets/icons/clock.svg" alt="time" />
        {formatTime(time)}
      </div>
      <img
        className="weather-graphics"
        alt="weather-image"
        src={imageUrl}
      ></img>
      <div>{weather}</div>
      <div className="temp">
        <img className="icon" alt="temperature" src="/assets/icons/temp.svg" />
        {temp} {units}
      </div>
    </div>
  );
};

export default ForecastTile;
