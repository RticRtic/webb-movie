import SearchBackgroundImage from "./SearchBackgroundImage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { STATUS } from "../../features/searchMovie";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = ({ device }) => {
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
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          <i className="vote-average">{movie.vote_average}</i>
        </div>
      </div>
    ));
    console.log("movies: ", movie);
  } else {
    content = "Failed to get movie/movies..";
  }

  return device === "web" ? (
    <div className="home-component">
      <div className="background-img-container">
        <div className="background-img">
          <SearchBackgroundImage />
        </div>
      </div>
      <div className="movieList">{content}</div>
    </div>
  ) : 
  (

    //Mobil-Device
    <div className="home-component-mobil">
      <div className="movieList-mobil">
        {content}
      </div>

    </div>
  );
};

export default Home;
