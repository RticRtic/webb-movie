import { useState } from "react";
import "../../styles/movieList.css";

import { faStar, faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieList = ({ actionMovieData, dramaMovieData }) => {
  const actionMovies = actionMovieData.map((movie, index) => (
    <div key={index}>
      <img
        className="action-movie-img"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
       <div className="action-shoppingcart-container">
        <i className="action-icon-shoppingcart"><FontAwesomeIcon icon={faShoppingCart}/></i>
      </div>
      <div className="action-movie-vote_average-container">
        <p className="action-movie-vote_average">
          <FontAwesomeIcon className="action-icon-star" icon={faStar} />
          {movie.vote_average}
        </p>
      </div>
      <div className="action-movie_price-container">
        <p className="action-movie-price">
          <FontAwesomeIcon className="action-icon-price" icon={faDollarSign} />
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
   
  ));

  const dramaMovies = dramaMovieData.map((movie, index) => (
    <div key={index}>
      <img
        className="drama-movie-img"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />

      <div className="movie-vote_average-container">
        <i className="movie-vote_average">
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          {movie.vote_average}
        </i>
      </div>
      <div className="movie_price-container">
        <i className="movie-price">
          <FontAwesomeIcon className="icon-price" icon={faDollarSign} />
          99.9
        </i>
      </div>
      <div className="movie-title-release-date-container">
        <article className="movie-title-release-date">
          {movie.title}
          <br />
          {movie.release_date}
        </article>
      </div>
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
