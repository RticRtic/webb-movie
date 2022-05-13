import { useState } from "react";
import "../../styles/movieList.css";
// import "../../styles/movie-card.css";
import MovieCard from '../globals/movieCard';


import {
  faStar,
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieList = ({topScoreMovieData, popularMovieData, movieData}) => {
  
  const movies = movieData.map((movie) => (
    <MovieCard movie = {movie} key={movie.id} />
  ))

  const topScoreMovies = topScoreMovieData.map((movie) => (
    <MovieCard movie = {movie} key={movie.id}/>

  ));

  const popularMovies = popularMovieData.map((movie) => (
    <MovieCard movie = {movie} key={movie.id}/>
  ));

  return (
    <div className="movieList-component">
      {movies}
      {topScoreMovies}
      {popularMovies} 
    </div>
  );
};

export default MovieList;
