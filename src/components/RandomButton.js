import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton( {dataList, setDataList} ) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    console.log("For the advanced deliverables", randomPlaneteer);
    fetch('http://localhost:8003/planeteers', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(randomPlaneteer)
    })
    .then((res) => res.json())
    .then((newItem) => {
      setDataList([...dataList, newItem])
    })
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
