const CustomCoords = () => {
    return (<>
        <input
        type="text"
        name="lat"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      ></input>
      <p></p>
      <input
      value={long}
        type="text"
        name="long"
        onChange={(e) => setLong(e.target.value)}
        placeholder="Longitude"
      ></input>
      <p></p>
      <button onClick={setCoords}>Set coords</button>
      </>
    )
}

export default CustomCoords