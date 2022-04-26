import "../../styles/searchInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getSearchedApi } from "../../models/apiSearchInput";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions, STATUS } from "../../features/searchMovie";

const SearchInput = () => {
  const status = useSelector((state) => state.searchedMovie.status);
  const movie = useSelector((state) => state.searchedMovie.movie);

  const dispatch = useDispatch();
  let content = null;

  if (status === STATUS.NORMAL) {
    content = "Ready to fetch";
  } else if (status === STATUS.FETCHING) {
    content = "Waiting for movie/movies..";
  } else if (status === STATUS.SUCCESS) {
    content = movie;
  } else {
    content = "Failed to get movie/movies..";
  }

  const [input, setInput] = useState("");

  const clearInput = () => {
    setInput("");
  };

  const inputHandler = (input) => {
    setInput(input.target.value);
    console.log(input.target.value);
  };

  const getMovie = () => {
    getSearchedApi(input, dispatch);

    clearInput();
  };

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
          onChange={inputHandler}
        ></input>
        <div className="search-button-container">
          <button onClick={getMovie} className="search-button">
            Search!
          </button>
        </div>

        {/* <main>
          {content}
        </main> */}

        {/* <div className="magnifyingglass-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingglass"  />
        </div> */}
      </div>
    </div>
  );
};

export default SearchInput;
