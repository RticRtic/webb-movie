


import SearchBackgroundImage from "./SearchBackgroundImage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { STATUS } from "../../features/searchMovie";
import "../../styles/home.css";
import SearchInput from "./SearchInput";


const Home = ({device}) => {

  const status = useSelector((state) => state.searchedMovie.status);
  const movie = useSelector((state) => state.searchedMovie.movie);

  let content = [];

  if (status === STATUS.NORMAL) {
    content = "";
  } else if (status === STATUS.FETCHING) {
    content = "";
  } else if (status === STATUS.SUCCESS) {
    content = movie.results.map((movie) => (
      <div key={movie.id} className="movieItem">
        <Link to="/DetailMovieInfo">
        <img
          className="movie-img"
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt="img"
        />
        </Link>
        
        <div className="vote-average-container">
          <i className="vote-average">{movie.vote_average}</i>
        </div>
      </div>
    ));
    console.log("movies: ", movie);
  } else {
    content = "Failed to get movie/movies..";
  } 

   


  return (device === "web") ? (
    <div className="home-component">
      {/* <SearchBackgroundImage /> */}
      {content}
    </div>
  ) :
  
  (
    <div>
      {/* <SearchBackgroundImage /> */}
      
     
    </div>
  )
    
  
};

export default Home;
