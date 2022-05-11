import { useState } from "react";
import "../../styles/movieList.css";

import {
  faStar,
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieList = ({
  actionMovieData,
  dramaMovieData,
  comedyMovieData,
  thrillerMovieData,
  familyMovieData
}) => {
  const actionMovies = actionMovieData.map((movie, index) => (
    <div key={index}>
      <img
        className="movie-img"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
      <div className="shoppingcart-container">
        <i className="icon-shoppingcart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </i>
      </div>
      <div className="movie-vote_average-container">
        <p className="movie-vote_average">
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          {movie.vote_average}
        </p>
      </div>
      <div className="movie_price-container">
        <p className="movie-price">
          <FontAwesomeIcon className="icon-price" icon={faDollarSign} />
          99.9
        </p>
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

  const dramaMovies = dramaMovieData.map((movie, index) => (
    <div key={index}>
      <img
        className="movie-img"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
      <div className="shoppingcart-container">
        <i className="icon-shoppingcart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </i>
      </div>
      <div className="movie-vote_average-container">
        <p className="movie-vote_average">
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          {movie.vote_average}
        </p>
      </div>
      <div className="movie_price-container">
        <p className="movie-price">
          <FontAwesomeIcon className="icon-price" icon={faDollarSign} />
          99.9
        </p>
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

  const comedyMovies = comedyMovieData.map((movie, index) => (
    <div key={index}>
      <img
        className="movie-img"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
      <div className="shoppingcart-container">
        <i className="icon-shoppingcart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </i>
      </div>
      <div className="movie-vote_average-container">
        <p className="movie-vote_average">
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          {movie.vote_average}
        </p>
      </div>
      <div className="movie_price-container">
        <p className="movie-price">
          <FontAwesomeIcon className="icon-price" icon={faDollarSign} />
          99.9
        </p>
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

  const thrillerMovies = thrillerMovieData.map((movie, index) => (
    <div key={index}>
      <img
        className="movie-img"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
      <div className="shoppingcart-container">
        <i className="icon-shoppingcart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </i>
      </div>
      <div className="movie-vote_average-container">
        <p className="movie-vote_average">
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          {movie.vote_average}
        </p>
      </div>
      <div className="movie_price-container">
        <p className="movie-price">
          <FontAwesomeIcon className="icon-price" icon={faDollarSign} />
          99.9
        </p>
      </div>
      <div className="movie-title-release-date-container">
        <article className="movie-title-release-date">
          {movie.title}
          <br />
          {movie.release_date}
        </article>
      </div>
    </div>
  ))

  const familyMovies = familyMovieData.map((movie, index) => (
    <div key={index}>
      <img
        className="movie-img"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
      <div className="shoppingcart-container">
        <i className="icon-shoppingcart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </i>
      </div>
      <div className="movie-vote_average-container">
        <p className="movie-vote_average">
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          {movie.vote_average}
        </p>
      </div>
      <div className="movie_price-container">
        <p className="movie-price">
          <FontAwesomeIcon className="icon-price" icon={faDollarSign} />
          99.9
        </p>
      </div>
      <div className="movie-title-release-date-container">
        <article className="movie-title-release-date">
          {movie.title}
          <br />
          {movie.release_date}
        </article>
      </div>
    </div>
  ))

  return (
    <div className="movieList-component">
      {actionMovies}
      {dramaMovies}
      {comedyMovies}
      {thrillerMovies}
      {familyMovies}
    </div>
  );
};

export default MovieList;
