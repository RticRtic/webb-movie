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

  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  let content = [];

  if (status === STATUS.NORMAL) {
    content = "";
  } else if (status === STATUS.FETCHING) {
    content = "";
  } else if (status === STATUS.SUCCESS) {
    //content = movie;
    content.push(movie);
    // content.map((movie, index) => <div key={movie.id}>{movie.results[index].title}</div>);
    console.log(movie);
  } else {
    content = "Failed to get movie/movies..";
  }

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
      <div className="searchbar-input-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingglass" />

        {/* <input
          placeholder="Search movie..."
          className="search-input-field"
          value={input}
          onChange={inputHandler}
        ></input> */}
        <button onClick={getMovie} className="search-button">
          Search!
        </button>

        {(content == "") ? (
          <div>
            {content}
          </div>
        ) : (
          <div>
            {content.map((movie, index) => (
              <div>{movie.results[index].title}</div>
            ))}
          </div>
        )
        }

        {/* <div className="magnifyingglass-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingglass"  />
        </div> */}
      </div>
    </div>
  );
};

export default SearchInput;
