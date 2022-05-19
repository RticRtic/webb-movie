import { useState } from "react";
import "../../styles/movieList.css";
// import "../../styles/movie-card.css";
import MovieCard from "../globals/movieCard";

import {
  faStar,
  faShoppingCart,
  faDollarSign,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const MovieList = ({ movieData }) => {
  const movies = movieData.map((movie) => (
    <MovieCard movie={movie} key={movie.id} />
  ));

 

  

  return (
    <div className="movieList-component">
      {movies}

      <div className="arrow-container">
        <i className="arrow-right">
          <FontAwesomeIcon icon={faArrowRight}
          style={{color : "white"}} />
        </i>
      </div>
    </div>
  );
};

export default MovieList;
