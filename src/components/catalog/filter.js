import { faL, faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import actionLogo1 from "../../img/actionLogo1.png";
import dramaLogo from "../../img/dramaLogo.jpg";
import comedyLogo1 from "../../img/comedyLogo1.webp";
import thrillerLogo from "../../img/thrillerLogo.jpg";
import topScoreLogo from "../../img/topScoreLogo.jpg";
import popularLogo from "../../img/popularLogo.jpg";
import baloonsLogo from "../../img/baloonsLogo.jpg";
import { apiMovies, apiTopScoreOrPopular } from "../../models/apiCatalog";

import MovieList from "./movieList";
import MovieListMobil from "./movieListMobil";

import {
  faStar,
  faShoppingCart,
  faDollarSign,
  faArrowRight,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/filter.css";

const Filter = () => {

  const location = useLocation();



  const [movies, setMovies] = useState([]);
  const [genreNumber, setGenreNumber] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const [genreActionChecked, setGenreActionChecked] = useState(false);
  const [genreDramaChecked, setGenreDramaChecked] = useState(false);
  const [genreComedyChecked, setGenreComedyChecked] = useState(false);
  const [genreThrillerChecked, setGenreThrillerChecked] = useState(false);
  const [genreFamilyChecked, setGenereFamilyChecked] = useState(false);
  const [genreTopScoreChecked, setGenreTopScoreChecked] = useState(true);
  const [genrePopularChecked, setGenrePopularChecked] = useState(false);

  

  //* Api genreNumbers
  //! 28 action
  //! 18 drama
  //! 35 comedy
  //! 53 thriller
  //! 10751 family
  //! top_rated
  //! popular

  useEffect(() => {
    
    navigatedFromPopularGenre()

    if (location.state === null ) {
      apiTopScoreOrPopular(setMovies, "top_rated");
    } else { 
      apiMovies(setMovies, location.state.genre)
    }
  }, []);

  const handleIncreaseApiPage = () => {
    if(pageNumber < 10) {
      let page = pageNumber + 1;
      setPageNumber(page);
      console.log("pageNumberpage2: ", page);
      apiMovies(setMovies, genreNumber, page.toString());
    }   
  };

  const handleDecreaseApiPage = () => {
    if(pageNumber > 1) {
     let page = pageNumber - 1;
     setPageNumber(page);
      apiMovies(setMovies, genreNumber, page.toString());
      console.log("page: ", page);
    }
  }

  const navigatedFromPopularGenre = () => {
    if (location.state !== null ) {
      setGenreTopScoreChecked(false);
        if (location.state.genre === "18") {
          setGenreDramaChecked(true);
        } else if (location.state.genre === "28") {
          setGenreActionChecked(true);
        } else if (location.state.genre === "35") {
          setGenreComedyChecked(true);
        } else if (location.state.genre === "53") {
          setGenreThrillerChecked(true);
        } else if (location.state.genre === "10751") {
          setGenereFamilyChecked(true);
        } else if (location.state.genre === "top_rated") {
          setGenreTopScoreChecked(true);
        }
    }
  }

  const handleGenre = (input) => {
    setPageNumber(1);
    apiMovies(setMovies, input, "1");
    setGenreActionChecked(false);
    setGenreDramaChecked(false);
    setGenreComedyChecked(false);
    setGenreThrillerChecked(false);
    setGenereFamilyChecked(false);
    setGenreTopScoreChecked(false);
    setGenrePopularChecked(false);
   
    if ("28" === input) {
      setGenreNumber(input);
      setGenreActionChecked(true);
      console.log("ActionPage: ", pageNumber)
    } else if ("18" === input) {
      setGenreNumber(input);
      setGenreDramaChecked(true);
    } else if ("35" === input) {
      setGenreNumber(input);
      setGenreComedyChecked(true);
    } else if ("53" === input) {
      setGenreNumber(input);
      setGenreThrillerChecked(true);
    } else if ("10751" === input) {
      setGenreNumber(input);
      setGenereFamilyChecked(true);
    } 
  };

  const handleGenreTopRatedOrPopular = (input) => {
    apiTopScoreOrPopular(setMovies, input, pageNumber.toString());
    setGenreActionChecked(false);
    setGenreDramaChecked(false);
    setGenreComedyChecked(false);
    setGenreThrillerChecked(false);
    setGenereFamilyChecked(false);
    setGenreTopScoreChecked(false);
    setGenrePopularChecked(false);
    if("top_rated" === input) {
     setGenreNumber(input);
      setGenreTopScoreChecked(true);
    } else {
     setGenreNumber(input);
      setGenrePopularChecked(true);
    }

        if (location.state !== null) {
          location.state.genre = null
        }
  };
  
  return (
    <div className="filter-component">
      <div className="filter-categories">
        <h4 className="h4-genre">
          <div className="img-container">
            <img
              src={actionLogo1}
              alt="logo"
              className="actionLogo"
              onClick={() => {
                // handleIncreaseApiPage("28", apiPage.toString())
                handleGenre("28")
              }}
              style={{ opacity: genreActionChecked ? 0.8 : 0.5 }}
            />
            <img
              src={dramaLogo}
              alt="logo"
              className="dramaLogo"
              //
              onClick={() => handleGenre("18")}
              style={{ opacity: genreDramaChecked ? 1 : 0.5 }}
            />
            <img
              src={comedyLogo1}
              alt="logo"
              className="comedyLogo"
              onClick={() => handleGenre("35")}
              style={{ opacity: genreComedyChecked ? 1 : 0.5 }}
            />
            <img
              src={thrillerLogo}
              alt="logo"
              className="thrillerLogo"
              onClick={() => handleGenre("53")}
              style={{ opacity: genreThrillerChecked ? 1 : 0.5 }}
            />
            <img
              src={baloonsLogo}
              alt="logo"
              className="familyLogo"
              onClick={() => handleGenre("10751")}
              style={{ opacity: genreFamilyChecked ? 1 : 0.5 }}
            />
            <img
              src={topScoreLogo}
              alt="logo"
              className="topScoreLogo"
              onClick={() => handleGenreTopRatedOrPopular("top_rated")}
              style={{ opacity: genreTopScoreChecked ? 1 : 0.5 }}
            />
            <img
              src={popularLogo}
              alt="logo"
              className="popularLogo"
              //
              onClick={() => handleGenreTopRatedOrPopular("popular")}
              style={{ opacity: genrePopularChecked ? 1 : 0.5 }}
            />
          </div>
          <div className="label-action-container">
            <label
              className="label-action"
              onClick={() => handleGenre("28")}
              style={{ color: genreActionChecked ? "#B51B1B" : "white" }}
            >
              Action
            </label>
          </div>

          <div className="label-drama-container">
            <label
              className="label-drama"
              onClick={() => handleGenre("18")}
              style={{ color: genreDramaChecked ? "#B51B1B" : "white" }}
            >
              Drama
            </label>
          </div>

          <div className="label-comedy-container">
            <label
              className="label-comedy"
              onClick={() => handleGenre("35")}
              style={{ color: genreComedyChecked ? "#B51B1B" : "white" }}
            >
              Comedy
            </label>
          </div>

          <div className="label-thriller-container">
            <label
              className="label-thriller"
              onClick={() => handleGenre("53")}
              style={{ color: genreThrillerChecked ? "#B51B1B" : "white" }}
            >
              Thriller
            </label>
          </div>

          <div className="label-family-container">
            <label
              className="label-family"
              onClick={() => handleGenre("10751")}
              style={{ color: genreFamilyChecked ? "#B51B1B" : "white" }}
            >
              Family
            </label>
          </div>

          <div className="label-topScore-container">
            <label
              className="label-topScore"
              onClick={() => handleGenreTopRatedOrPopular("top_rated")}
              style={{ color: genreTopScoreChecked ? "#B51B1B" : "white" }}
            >
              Top Score
            </label>
          </div>

          <div className="label-popular-container">
            <label
              className="label-popular"
              onClick={() => handleGenreTopRatedOrPopular("popular")}
              style={{ color: genrePopularChecked ? "#B51B1B" : "white" }}
            >
              Popular
            </label>
          </div>
        </h4>
        
        <div className="arrow-container">
        <i className="arrow-right">
          <FontAwesomeIcon icon={faArrowLeft}
          onClick={()=>handleDecreaseApiPage()}
          />
        </i>
        <p className="page-number">{pageNumber}</p>
        
        <i className="arrow-left">
          <FontAwesomeIcon icon={faArrowRight}
          onClick={()=>handleIncreaseApiPage()}
          
          />
          
          </i>
      </div>
      </div>
      <MovieList movieData={movies} />
    </div>
  );
};

export default Filter;
