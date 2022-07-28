import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [dataList, setDataList] = useState([])
  const [keepData, setKeepData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8003/planeteers')
    .then((res) => res.json())
    .then((data) => {
      setDataList(data)
      setKeepData(data)
    })
  }, [])

  return (
    <div>
      <Header />
      <SearchBar dataList={dataList} setDataList={setDataList} keepData={keepData} />
      <RandomButton dataList={dataList} setDataList={setDataList} />
      <PlaneteersContainer dataList={dataList} setDataList={setDataList} />
    </div>
  );
}

export default App;
