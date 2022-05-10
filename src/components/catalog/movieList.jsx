import { useState } from "react";
import "../../styles/movieList.css";

const MovieList = ({actionMovieData, dramaMovieData}) => {
      
    const actionMovies = actionMovieData.map((movie, index) => (
        <div key={index}>
            <img className="action-movie-img" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
        </div>
        // <div key={index} className="action-movies-title">{movie.title}</div>
    ))

    const dramaMovies = dramaMovieData.map((movie, index)=> (
        <div key={index}>
            <img className="drama-movie-img" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
        </div>
    ))
    
    return(
        <div className="movieList-component">
           {actionMovies} 
           {dramaMovies}
        </div>
    );

}

export default MovieList;