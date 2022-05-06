
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { STATUS } from "../../features/searchMovieReducer";
import "../../styles/searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


  const SearchResults = ({input}) => {

    const status = useSelector((state) => state.searchedMovie.status);
    const movie = useSelector((state) => state.searchedMovie.movie);

    let navigate = useNavigate();

    const selectMovie = (movie) => {
      let title = movie.title.replace(/\s+/g, '-');
      navigate('/movie/' + (movie.id) + '/' + (title.toLowerCase()));
  };

  let content = [];


  if (status === STATUS.NORMAL) {
      
    content = "";

  } else if (status === STATUS.FETCHING) {

    content = "";

  } else if (status === STATUS.SUCCESS) {

    content = 
    <div className="search_result_container">

        {movie.results.slice(0,10).map((movie) => (
      <div key={movie.id} className='search_result_card' onClick={() => selectMovie(movie)}>
          <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className='search_result_img'/>
          <aside className="search_result_info">
              <h3>{movie.original_title}</h3>
              <span><FontAwesomeIcon icon={faStar} style={{color: 'red'}} /> {movie.vote_average}</span>
              <span>{movie.release_date}</span>
          </aside>
          
      </div>
    ))}

    </div>

  } else {

    content = "Failed to get movie/movies..";

  }

    return (movie != null) ? (

        <Fragment>

            {content}

        </Fragment>
    )
    : 
    (
        null
    )

  }

  export default SearchResults;