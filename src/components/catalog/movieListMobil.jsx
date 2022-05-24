import { useEffect, useState } from "react";
import { apiMovies, apiTopScoreOrPopular } from "../../models/apiCatalog";
import { faStar, faArrowDown, faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import "../../styles/movielist-mobil.css";
import actionLogo1 from "../../img/actionLogo1.png";
import dramaLogo from "../../img/dramaLogo.jpg";
import baloonsLogo from "../../img/baloonsLogo.jpg";
import thrillerLogo from "../../img/thrillerLogo.jpg";
import topScoreLogo from "../../img/topScoreLogo.jpg";
import popularLogo from "../../img/popularLogo.jpg";
import comedyLogo1 from "../../img/comedyLogo1.webp";


const MovieListMobil = () => {
  const [mobilMovies, setMobilMovies] = useState([]);
  const [genreInput, setGenreInput] = useState(false);
  const [genreNumber, setGenreNumber] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  

  const [title, setTitle] = useState("Top Rated")

  

  useEffect(() => {
    apiTopScoreOrPopular(setMobilMovies, "top_rated");
  }, []);

  const handleIncreaseApiPage = () => {
    if(pageNumber < 10) {
      let page = pageNumber + 1;
      setPageNumber(page);
      apiMovies(setMobilMovies, genreNumber, page.toString());
    }   
  };

  const handleDecreaseApiPage = () => {
    if(pageNumber > 1) {
     let page = pageNumber - 1;
      setPageNumber(page);
      apiMovies(setMobilMovies, genreNumber, page.toString());
      
    }
  }

  
  const handleTitlesAndGenres = (input) => {
    setPageNumber(1);
    if(input === "28") {
      setTitle("Action");
      setGenreNumber(input);
      apiMovies(setMobilMovies, input)

    } else if (input === "18") {
      setTitle("Drama");
      setGenreNumber(input);
      apiMovies(setMobilMovies, input)

    } else if(input === "35") {
      setTitle("Comedy");
      setGenreNumber(input);
      apiMovies(setMobilMovies, input)

    } else if (input === "10751") {
      setTitle("Family");
      setGenreNumber(input);
      apiMovies(setMobilMovies, input)

    } else if (input ==="53") {
      setTitle("Thriller");
      setGenreNumber(input);
      apiMovies(setMobilMovies, input)

    } 
  }
  
  const handleGenreTopScoreOrPopular = (input) => {
    setPageNumber(1);
    if(input === "top_rated") {
      setTitle("Top Rated");
      setGenreNumber(input);
      apiTopScoreOrPopular(setMobilMovies, input)

    } else {
      setTitle("Popular")
      setGenreNumber(input);
      apiTopScoreOrPopular(setMobilMovies, input)

    }
   
    
  }

  let navigate = useNavigate()

  const selectMovie = (movie) => {
    let title = movie.title.replace(/\s+/g, '-');
    navigate('/movie/' + (movie.id) + '/' + (title.toLowerCase()));
};

//*Api genreNumbers
//! 28 action
//! 18 drama
//! 35 comedy
//! 53 thriller
//! 10751 family
//! top_rated
//! popular

const handleGenreInput = () => {
  if(!genreInput) {
    setGenreInput(true)
    

  } else {
    setGenreInput(false)
  }
}

 
  const movies = mobilMovies.slice(0,5).map((movie) => (
    <div key={movie.id} className="movielistMobil-component">
      <div className="title-container">
        <h2 className="toprated">{title}</h2> 

        <div className="arrows-container">
        <i><FontAwesomeIcon icon={faArrowLeft}
         className="arrow-left-mobil"
         onClick={handleDecreaseApiPage}/></i>

        <p className="number">{pageNumber}</p>
        <i><FontAwesomeIcon icon={faArrowRight}
         className="arrow-right-mobil"
         onClick={handleIncreaseApiPage}/></i>
        </div>

         <h3  
         onClick={handleGenreInput} 
         className="genre">Genre
          <FontAwesomeIcon 
            className="arrowDown" 
            icon={faArrowDown}  /></h3>
         {
          genreInput?<div className="genre-menu">
            <div className="menu-imgs">
              <img className="action-img" src={actionLogo1} alt="img" />
              <img className="drama-img" src={dramaLogo} alt="img" />
              <img className="comedy-img" src={comedyLogo1} alt="img" />
              <img className="family-img" src={baloonsLogo} alt="img" />
              <img className="thriller-img" src={thrillerLogo} alt="img" />
              <img className="topscore-img" src={topScoreLogo} alt="img" />
              <img className="popular-img" src={popularLogo} alt="img" />              
            </div>
            
            <div className="titles">
            <p onClick={() => handleTitlesAndGenres("28")} className="action-title">Action</p>
              <p onClick={() => handleTitlesAndGenres("18")} className="drama-title">Drama</p>
              <p onClick={() => handleTitlesAndGenres("35")} className="comedy-title">Comedy</p>
              <p onClick={() => handleTitlesAndGenres("10751")} className="family-title">Family</p>
              <p onClick={() => handleTitlesAndGenres("53")} className="thriller-title">Thriller</p>
              <p onClick={() => handleGenreTopScoreOrPopular("top_rated")} className="topscore-title">Top Rated</p>
              <p onClick={() => handleGenreTopScoreOrPopular("popular")} className="popular-title">Popular</p>
            </div>
          </div>
         : null }
        
         
      </div>
      
      <div className="moviecard-container">
        <div className="img-container">
          <img
            className="img"
            src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
            alt="img"
          />
          <div className="img-backdrop-patch-container"></div>
          <img
            className="img-backdrop-path"
            src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
            alt="img"
          />
        
        </div>
        <div className="info-text-container">
            <h4 className="title">{movie.title}</h4>
            <article 
            className="info">
              {movie.release_date} <br />
              <FontAwesomeIcon icon={faStar} className="star-logo" />{movie.vote_average} <br />
              $9.99
            </article>
          </div>

          <div className="button-container">
            <button 
            className="button"
            onClick={() => selectMovie(movie)}>Learn More</button>
          </div>
        
      </div>
    </div>
  ));

  return <div>{movies}</div>;
};

export default MovieListMobil;
