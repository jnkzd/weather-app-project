import "./ForecastTile.css"

const ForecastTile = ({time, weather, temp}) => {
  return (
    <div className="forecastTile">
      <p>{time}</p>
      <p>{weather}</p>
      <p>{temp}</p>
    </div>
  );
};

export default ForecastTile