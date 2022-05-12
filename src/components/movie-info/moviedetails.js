import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import '../../styles/movie-collection.css';
import MovieCard from '../globals/movieCard';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MovieDetails = ({device, currentMovie, currentMovieCollection }) => {


    const MovieCollection = () => {

        const [my_swiper, set_my_swiper] = useState({});

        let navigate = useNavigate();

        const selectMovie = (movie) => {
            let title = movie.title.replace(/\s+/g, '-');
            navigate('/movie/' + (movie.id) + '/' + (title.toLowerCase()));
        };

        if(currentMovieCollection != null) {
            return (
                <div className='movie_collection_container'>
                    <Swiper
                    className={'swiper-container'}

                    slidesPerView={'auto'}
                    spaceBetween={10}
                    direction={"horizontal"}
                    onInit={(ev) => {
                        set_my_swiper(ev)
                    }}>
                    
                    {currentMovieCollection.parts.map(movie => (
                            <SwiperSlide key={movie.id} onClick={() => selectMovie(movie)}>
                                <MovieCard movie={movie}/>
                            </SwiperSlide>
                        ))}
    
                </Swiper>
                </div>
                
            )
        }
        

    }

    return (
        <div>
            {(currentMovieCollection != null) ?
            (
                <Fragment>
                    <section className='section_title'>
                        Part of the {currentMovieCollection.name}
                    </section>
                    <MovieCollection/>
                </Fragment>
            
            )
            :
            (
                null
            )
        }
            

        </div>
    )

}

export default MovieDetails;