import { useState } from "react";
import "../../styles/movieList.css";

import { faStar, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieList = ({ actionMovieData, dramaMovieData }) => {
  const actionMovies = actionMovieData.map((movie, index) => (
    <div key={index}>
      <img
        className="action-movie-img"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
      <div className="action-movie-vote_average-container">
        <p className="action-movie-vote_average">
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          {movie.vote_average}
        </p>
        {/* <i><FontAwesomeIcon className="poster_bottom_icon" icon={faDollarSign}/>9.99</i> */}
      </div>
      <div className="action-movie_price-container">
        <p className="action-movie-price">
          <FontAwesomeIcon className="icon-price" icon={faDollarSign} />
          99.9
        </p>
      </div>
      <div className="action-movie-title-release-date-container">
        <article className="action-movie-title-release-date">
          {movie.title}
          <br />
          {movie.release_date}
        </article>
      </div>
    </div>
    // <div key={index} className="action-movies-title">{movie.title}</div>
  ));

  const dramaMovies = dramaMovieData.map((movie, index) => (
    <div key={index}>
      <img
        className="drama-movie-img"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
    </div>
  ));

  return (
    <div className="movieList-component">
      {actionMovies}
      {dramaMovies}
    </div>
  );
};

export default MovieList;
