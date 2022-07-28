import React, { useState } from "react";

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

  const [sortStatus, setSortStatus] = useState(true)

  const handleSortClick = () => {
    // console.log('sort click clicked')
    let dat = [...dataList]
    if (sortStatus) {
      setDataList(dat.sort((a, b) => {
        return (a.born < b.born ? 1 : -1)
      }))
    } else {
      setDataList(dat.sort((a,b) => {
        return (a.id < b.id ? -1 : 1)
      }))
    }
    setSortStatus(!sortStatus)
  }

  return (
    <div className="search">
      <label>Search:</label>
      <input onChange={handleSearch} type="text" className="searchTerm" />
      <label>Sort:</label>
      <input onChange={handleSortClick} type='checkbox' />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
