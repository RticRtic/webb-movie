import "../../styles/searchInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getSearchedApi } from "../../models/apiSearchInput";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";


const SearchInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  

  const clearInput = () => {
    setInput("");
  };

  const inputHandler = (input) => {
    setInput(input.target.value);
    console.log(input.target.value);
  };

  const getMovie = (event) => {
    if (event.key === "Enter") {
      getSearchedApi(input, dispatch);

      clearInput();
    }
  };

  return (
    <div className="search-input">
      {/* <div className="searchbar-input-container"> */}
        
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="faMagnifyingGlass"
          />
        

        <input
          placeholder="Search movie..."
          className="search-input-field"
          value={input}
          onChange={inputHandler}
          onKeyDown={getMovie}
        ></input>

        {/* <div className="magnifyingglass-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingglass"  />
        </div> */}
      {/* </div> */}
    </div>
  );
};

{
  /* <div className="trending_container">
            <header>Trending Movies</header>
            <div>

                

                <Swiper
                className={'swiper-container'}

                slidesPerView={'auto'}
                spaceBetween={10}
                direction={"horizontal"}
                onInit={(ev) => {
                    set_my_swiper(ev)
                }}
                >
                    
                    <button className={('trending_pagination_button') + (' left')} onClick={() => { my_swiper.slidePrev() }}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                    
                    {trending.data.results.map(movie => (
                        <SwiperSlide key={movie.id} className='swiper-slide'>
                            <TrendingMovieCard movie={movie}/>
                        </SwiperSlide>
                    ))}
                    
                    <button className={('trending_pagination_button') + (' right')} onClick={() => { my_swiper.slideNext() }}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                        </button>

            </Swiper>


            </div>
            
        </div> */
}

export default SearchInput;
