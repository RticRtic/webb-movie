import { useState } from "react";
import "../../styles/movieList.css";

const MovieList = ({movieData}) => {
      
    const movie = movieData.map((movie, index) => (
        <div key={index}>{movie.title}</div>
    ))
    
    return(
        <div className="movieList-component">
           {movie}
        </div>
    );

}

export default MovieList;