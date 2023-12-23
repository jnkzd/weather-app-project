const ForecastTile = ({time, weather, temp}) => {
  return (
    <>
      <p>{time}</p>
      <p>{weather}</p>
      <p>{temp}</p>
    </>
  );
};

export default ForecastTile