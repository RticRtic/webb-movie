import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";

import { apiAction } from "../../models/apiCatalog";
import { apiDrama } from "../../models/apiCatalog";

import "../../styles/filter.css";
import MovieList from "./movieList";

const Filter = () => {
  const [genreActionChecked, setGenreActionChecked] = useState(false);
  const [genreDramaChecked, setGenreDramaChecked] = useState(false);

  const [actionMovies, setActionMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);

  const handleGenreAction = () => {
    if (!genreActionChecked) {
      setGenreActionChecked(true);
      apiAction(setActionMovies);
      
      
    } else {
      setGenreActionChecked(false);
      setActionMovies([]);
    }
  };

  const handleGenreDrama = () => {
    if (!genreDramaChecked) {
      setGenreDramaChecked(true);
      apiDrama(setDramaMovies);

    } else {
      setGenreDramaChecked(false);
      setDramaMovies([]);
    }
  }
  
  
 

  return (
    <div className="filter-component">
      <div className="text-filter">
        <header>Filter</header>
      </div>
      <div className="filter-categories">
        {/* <input
          className="genre-checkbox"
          type="checkbox"
          checked={genreChecked}
          onChange={handleGenreChecked}
        /> */}
        <h4 className="h4-genre">
          Genre <br />
          <input
            className="action-checkbox"
            type="checkbox"
            checked={genreActionChecked}
            onChange={handleGenreAction}
          />
          <label className="label-action">Action</label> <br />


          <input className="drama-checkbox"
           type="checkbox" 
           checked={genreDramaChecked}
           onChange={handleGenreDrama}/>
          <label>Drama</label> <br />

          
          <input type="checkbox" />
          <label>Comedy</label> <br />
          <input type="checkbox" />
          <label>Thriller</label>
        </h4>
        
        <input type="checkbox" />
        <label>Score</label> <br />
        <input type="checkbox" />
        <label>Popularity</label> <br />
        <input type="checkbox" />
        <label>Kids</label>
      </div>
      <MovieList actionMovieData={actionMovies} dramaMovieData={dramaMovies}/>
    </div>
  );
};

export default Filter;
