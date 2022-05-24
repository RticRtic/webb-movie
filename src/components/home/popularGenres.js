import React from 'react';
import '../../styles/popular-genres.css';

import actionposter from '../../images/action-movie-poster.jpeg'
import dramaposter from '../../images/drama-poster.jpeg'
import romanceposter from '../../images/romance-poster.jpeg'
import fantasyposter from '../../images/fantasy-poster.webp'
import horrorposter from '../../images/horror-poster.webp'
import thrillerposter from '../../images/thriller-poster.jpeg'
import familyposter from '../../images/family-poster.jpeg'

import comedyposter from '../../images/comedy-poster.webp'
import topratedposter from '../../images/top-rated-poster.jpeg'


const PopularGenres = () => {

    return (
        <div className="popular_genres_container">
            <div className="section_title">
                <span>Popular genres</span>
            </div>
            <div className="genre_card_container">
                <div className="card">
                    <img className='poster_image' src={actionposter} alt="" />
                    <div className='poster_text'>Action</div> 
                </div>
                <div className="card">
                    <img className='poster_image' src={dramaposter} alt=""></img>
                    <div className='poster_text'>Drama</div> 
                </div>
                <div className="card">
                    <img className='poster_image' src={familyposter} alt="" />
                    <div className='poster_text'>Family</div> 
                </div>
                <div className='break'></div>
                <div className="card">
                    <img className='poster_image' src={comedyposter} alt="" />
                    <div className='poster_text'>Comedy</div> 
                </div>
                <div className="card">
                    <img className='poster_image' src={thrillerposter} alt="" />
                    <div className='poster_text'>Thriller</div> 
                </div>
                <div className='card'>
                    <img className='poster_image' src={topratedposter} alt="" />
                    <div className='poster_text'>Top Rated</div> 
                </div>
            </div>

            
        </div>
    )

}

export default PopularGenres;

