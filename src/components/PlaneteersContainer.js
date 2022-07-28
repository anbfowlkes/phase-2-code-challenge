import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer( {dataList, setDataList} ) {
  return (
    <ul className="cards">
      {dataList.map((item) => {
        return (
        <Planeteer 
        name={item.name}
        fromUSA={item.fromUSA}
        born={item.born}
        bio={item.bio}
        quote={item.quote}
        pictureUrl={item.pictureUrl}
        twitter={item.twitter}
        key={item.id} />
        )
      })}
    </ul>
  );
}

export default PlaneteersContainer;
