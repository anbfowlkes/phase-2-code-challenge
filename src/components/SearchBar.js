import React from "react";

function SearchBar( {dataList, setDataList, keepData} ) {

  const handleSearch = (e) => {
    // console.log('searching')
    // console.log(e.target.value)
    let val = e.target.value.toLowerCase()
    let dat = [...keepData]
    setDataList(dat.filter((item) => {
      return (item.name.toLowerCase().includes(val) || item.bio.toLowerCase().includes(val) ? 1 : 0)
    }))
  }

  return (
    <div className="search">
      <input onChange={handleSearch} type="text" className="searchTerm" />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
