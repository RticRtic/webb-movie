import React, { Fragment, useEffect, useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import '../../styles/trending-movies.css';
import '../../styles/fa-icons.css'

// import 'swiper/swiper-bundle.min.css'

import 'swiper/css';


 
// import 'swiper/swiper.min.css'


import { fetchTrending } from '../../models/apiModel';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieCard from "../globals/movieCard";

const MovieSwiper = ({ movies, sectionTitle }) => {


    const [my_swiper, set_my_swiper] = useState({});


    return (movies == null) ? 

    (
        <div>
            LOADING...
        </div>
    )
    :
    (
        <div className="trending_container">
            <header className="section_title">{sectionTitle}</header>
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
                    
                    {movies.results.map(movie => (
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



export default MovieSwiper;