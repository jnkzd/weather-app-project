import { useState } from "react";
import "./custom-coords.css";

const CustomCoords = ({ getCityCoords }) => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [isShown, setIsShown] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (lat && long) {
      getCityCoords([lat, long]);
    } else {
      alert("Invalid coordinates");
    }
  };

  const handleShown = (e) => {
    e.preventDefault();
    setIsShown(!isShown);
  };

  return (
    <>
      <div className="custom-coordinates-link" onClick={handleShown}>
        Find city by coords
        <button className="custom-coords-roll-button">
        <input className="custom-coords-checkbox" type="checkbox" checked={isShown} readOnly></input>
          <img className="icon-arrow" src="/assets/icons/arrow.svg"></img>
        </button>
      </div>
      {isShown && (
        <div className="custom-coords-box">
          <p>Latitude</p>
          <input
            className="custom-coord-input"
            type="number"
            name="lat"
            placeholder="49.595"
            value={lat}
            required
            onChange={(e) => setLat(e.target.value)}
          ></input>
          <p>Longitude</p>
          <input
            className="custom-coord-input"
            value={long}
            type="number"
            name="long"
            required
            onChange={(e) => setLong(e.target.value)}
            placeholder="17.251"
          ></input>
          <p></p>
          <button className="custom-coord-set" onClick={handleSearch}>Search</button>
        </div>
      )}
    </>
  );
};

export default CustomCoords;
