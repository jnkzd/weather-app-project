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
      {!isShown && <button onClick={handleShown}>Search by coordinates</button>}
      {isShown && (
        <div className="custom-coords-box">
          <p>Latitude</p>
          <input
            className="custom-coord-input"
            type="number"
            name="lat"
            placeholder="49.59552"
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
            placeholder="17.25175"
          ></input>
          <p></p>
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleShown}>↑</button>
        </div>
      )}
    </>
  );
};

export default CustomCoords;
