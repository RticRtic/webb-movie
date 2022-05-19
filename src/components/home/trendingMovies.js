import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";

import '../../styles/trending-movies.css';
import '../../styles/fa-icons.css'

// import 'swiper/swiper-bundle.min.css'

import 'swiper/css';


 
// import 'swiper/swiper.min.css'


import { fetchTrending } from '../../models/apiModel';
import { faShoppingCart, faStar, faDollarSign, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import MovieCard from "../globals/movieCard";

const TrendingMovies = () => {

    const dispatch = useDispatch();
    const trending = useSelector(state => state.trendingMovies);

    const [my_swiper, set_my_swiper] = useState({});

    useEffect(() => {
        fetchTrending(dispatch);
    },[])


    // If currently fetching, display the status else load the movies

    return (trending.data == null) ? 

    (
        <div>
            {trending.status}
        </div>
    )
    :
    (
        <div className="trending_container">
            <header className="section_title">Trending Movies</header>
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
                            <MovieCard movie={movie}/>
                        </SwiperSlide>
                    ))}
                    
                    <button className={('trending_pagination_button') + (' right')} onClick={() => { my_swiper.slideNext() }}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                        </button>

            </Swiper>


            </div>
            
        </div>
    )

}



export default TrendingMovies;