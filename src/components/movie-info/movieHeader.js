import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSelected } from '../../models/apiModel';
import { convertMinutes, splitDate } from '../../models/constants';
import '../../styles/movie-info.css';


const MovieHeader = ({device}) => {

    const [currentMovie, setCurrentMovie] = useState(null)

    let params = useParams();

    useEffect(() => {
        if('id' in params) {
            fetchSelected(params.id, setCurrentMovie);
        }
    },[])


    const WebHeaderContent = () => {

        return (
            <section>
                <h2>
                    {currentMovie.title} <span><FontAwesomeIcon icon={faStar} style={{color: '#B51B1B'}}/> {currentMovie.vote_average}</span>
                </h2>
                <span className='info_date_time'>{splitDate(currentMovie.release_date)} • {convertMinutes(currentMovie.runtime)}</span>
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
                        {(device == 'web') ?
                        (
                            <WebHeaderContent/>
                        
                        )
                        :
                        (
                            null
                        )
                    }
    
                    </div>
    
                </div>
    
            </div>

            {(device == 'mobile') ? 
            (
                <section className='movie_info_section'>
                    <div>
                        <h2>
                            {currentMovie.title} <span><FontAwesomeIcon icon={faStar} style={{color: '#B51B1B'}}/> {currentMovie.vote_average}</span>
                        </h2>
                        <span className='info_date_time'>{splitDate(currentMovie.release_date)} • {convertMinutes(currentMovie.runtime)}</span>
                        <div className='movie_info_purchase'>
                        <h2>$9.99</h2>
                        <article>In Stock</article>
                        <button className='movie_info_addToCart'>ADD TO CART</button>
                        </div>
                        
                    </div>
                </section>
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