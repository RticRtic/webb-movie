import { useState } from "react";
import "../../styles/movieList.css";
// import "../../styles/movie-card.css";
import MovieCard from "../globals/movieCard";


  import { apiMovies } from "../../models/apiCatalog";



const MovieList = ({ movieData }) => {
  const movies = movieData.map((movie) => (
    
    <MovieCard movie={movie} key={movie.id} />
  ));

 

  

  return (
    <div className="movieList-component">
      {movies}
    </div>
  );
};

export default MovieList;
