import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import '../../styles/trending-movies.css';
import '../../styles/fa-icons.css'
import 'swiper/css';
import { fetchTrending } from '../../models/apiModel';
import { faShoppingCart, faStar, faDollarSign, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            
        </div>
    )

}

const TrendingMovieCard = ({movie}) => {

    return (

    <div className="trending_movie_card">

        <div className="movie_poster">
            <i><FontAwesomeIcon icon={faShoppingCart}/></i>
            <i><FontAwesomeIcon className="poster_bottom_icon" icon={faStar}/>{movie.vote_average}</i>
            <i><FontAwesomeIcon className="poster_bottom_icon" icon={faDollarSign}/>8</i>
            <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}></img>
        </div>

        <article>
            {movie.title}
            <br/>
            {movie.release_date}
        </article>
        
        <button>More Info</button>
    </div>
        
    )

}

export default TrendingMovies;