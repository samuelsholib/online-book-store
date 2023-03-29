import React from "react";
import Search from "../products/Search";
import {useNavigate} from 'react-router-dom';


function SearchBanner() {

  const navigate = useNavigate();

  //sends to filtered result page
  function handleSearch() {

    const type = document.getElementById("searchtype").value;
    const request = document.getElementById("searchvalue").value;

    navigate(`/results/${type}/${request}`);
  }

  return (
    <>
      <div className="search-banner">
        <div className="container">
          <div className="banner-main">
            <h2>Welcome to the Bookworm Digital Library!</h2>
          </div>
          <hr></hr>
          <div className="browse-container">
            <Search handleSearch={handleSearch}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchBanner;