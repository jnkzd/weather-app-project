import "./units-toggle.css";

const UnitsToggle = ({ toggleUnits, isCelsiusSelected }) => {
  const handleClick = () => {
    toggleUnits();
  };

  return (
    <div className="main-container" onClick={handleClick}>
        <div className="cels">°C</div>
    <div className="units-container">
      <input
        type="checkbox"
        className="units-checkbox"
        checked={isCelsiusSelected}
      ></input>
      <div className="units-text-container">
    </div>
    </div>
    <div className="fahr">°F</div>
    </div>
  );
};

export default UnitsToggle;
