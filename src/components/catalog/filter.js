import { useState } from "react";
import "../../styles/filter.css";

const Filter = () => {
  const [genreChecked, setGenreChecked] = useState(false);

  const handleGenreChecked = () => {
    setGenreChecked(!genreChecked);
  };

  return (
    <div className="filter-component">
      <label className="genre">
        Genre
        <input
          className="checkbox-genre"
          type="checkbox"
          checked={genreChecked}
          onChange={handleGenreChecked}
        />
      </label>

      <label className="score">
        Score
        <input type="checkbox" />
      </label>

      <label className="popularity">
        Popularity</label>
      <input type="checkbox" />
    </div>
  );
};

export default Filter;
