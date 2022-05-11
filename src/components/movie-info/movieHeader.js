import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { convertMinutes, splitDate } from '../../models/constants';
import '../../styles/movie-info.css';
import MovieTrailer from './movieTrailer';


const MovieHeader = ({device, currentMovie, playTrailer}) => {


    const WebHeaderContent = () => {

        if (currentMovie != null) {
            return (
                <section>
                    <h2>
                        {currentMovie.title} ({splitDate(currentMovie.release_date)})
                    </h2>
                    
                    <span className='info_date_time'>
                        {convertMinutes(currentMovie.runtime)} <span><FontAwesomeIcon icon={faStar} style={{color: '#B51B1B'}}/> {currentMovie.vote_average}</span>
                    </span>
    
                    <TrailerButton/>
    
                    <div className='movie_info_overview'>
                        <h3>Overview</h3>
                        <p>{currentMovie.overview}</p>
                    </div>
                    <div className='movie_info_purchase'>
                        <h2>$9.99</h2>
                        <article>In Stock</article>
                        <button className='movie_info_addToCart'>ADD TO CART</button>
                    </div>
                </section>
            )
        }
        

    };

    const TrailerButton = () => {

        return (
            <div className='trailer_button_container'>
                <h3 className='trailer_button' onClick={playTrailer}> <FontAwesomeIcon icon={faPlay}/> Play Trailer </h3>
            </div>
        )
    };


    if(currentMovie != null) {
        return (

            <Fragment>

            <div className='movie_info_header'>
    
                <img src={'https://image.tmdb.org/t/p/original/' + (currentMovie.backdrop_path)}/>
    
                <div className='movie_info_container'>
    
                    <div className='movie_info_inner_container'>
                        <img src={'https://image.tmdb.org/t/p/original/' + (currentMovie.poster_path)}></img>



                        {/* WEB VERSION */}
                        {(device == 'web' && currentMovie != null) ?
                        (
                            <WebHeaderContent/>
                        
                        )
                        :
                        (
                            <TrailerButton/>
                        )
                    }
    
                    </div>
    
                </div>
    
            </div>

            {(device == 'mobile' && currentMovie != null) ? 
            (
                <Fragment>
                <section className='movie_info_section'>
                    <div>
                        <h2>
                            {currentMovie.title} ({splitDate(currentMovie.release_date)})
                        </h2>
                        <section className='mobile_time_rating'>
                            <aside>
                                <span>{convertMinutes(currentMovie.runtime)}</span>
                            </aside>
                            <aside>
                                <span><FontAwesomeIcon icon={faStar} style={{color: '#B51B1B'}}/> {currentMovie.vote_average}</span>
                            </aside>
                        </section>
                        
                        <div className='movie_info_purchase'>
                        <h2>$9.99</h2>
                        <article>In Stock</article>
                        <button className='movie_info_addToCart'>ADD TO CART</button>
                        </div>
                        
                    </div>
                </section>

                <section className='movie_info_section'>

                    <div>
                        {currentMovie.overview}
                    </div>

                </section>
                </Fragment>
            )
            :
            (
                null
            )
        
        }

            </Fragment>
        )
    }
    

}

export default MovieHeader;