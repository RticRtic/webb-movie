import "../../styles/searchInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getSearchedApi } from "../../models/apiSearchInput";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
   getSearchedApi(input);
  }, [input]);

  

  const clearInput = () => {
    setInput("");
  }

  return (
    <div>
      <header className="header-container">
        <h2 className="header"> a paradise for movie collectors.</h2>
      </header>
      <div className="searchbar-input-container">
        <div className="magnifyingglass-container">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="magnifyingglass"
          />
        </div>
        <input
          placeholder="Search movie..."
          className="search-input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          
        ></input>
        {/* <div className="magnifyingglass-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingglass"  />
        </div> */}
      </div>
    </div>
  );
};

export default SearchInput;
