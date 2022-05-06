import { Fragment, useState } from "react";
import "../../styles/filter.css";

const Filter = () => {
  const [genreChecked, setGenreChecked] = useState(false);

  const handleGenreChecked = () => {
    setGenreChecked(!genreChecked);
  };

  return (
    <div className="filter-component">
      <div className="text-filter">
        <header>Filter</header>
      </div>

      <div filter-categories>
        <input
          className="genre-checkbox"
          type="checkbox"
          checked={genreChecked}
          onChange={handleGenreChecked}
        />
        <label>Genre</label> <br />

        <input type="checkbox" />
        <label>Score</label> <br />

        <input type="checkbox" />
        <label>Popularity</label>
      </div>

      {/* <label className="score">
        Score
        <input type="checkbox" />
      </label>

      <label className="popularity">
        Popularity
        <input type="checkbox" />
      </label> */}
    </div>
  );
};

export default Filter;
