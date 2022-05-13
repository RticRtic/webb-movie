
import '../../styles/movie-details.css';
import '../../styles/movie-info.css';
import MovieCard from '../globals/movieCard';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MovieDetails = ({device, currentMovie, currentMovieCollection, currentMovieCast }) => {





    // -------------------------------------------------------------------------------

    const MovieCollection = () => {


        let navigate = useNavigate();

        const selectMovie = (movie) => {
            let title = movie.title.replace(/\s+/g, '-');
            navigate('/movie/' + (movie.id) + '/' + (title.toLowerCase()));
        };

        if(currentMovieCollection != null) {
            return (
                <div className='movie_collection_container'>
                    
                    {currentMovieCollection.parts.map(movie => (
                    <article key={movie.id} onClick={() => selectMovie(movie)} style={{margin: '10px'}}>
                        <MovieCard movie={movie}/>
                    </article>
                    ))}

                </div>
                
            )
        }
        

    }

    // -------------------------------------------------------------------------------

    const TopCast = () => {

        return (
            <Fragment>
                {currentMovieCast.slice(0,10).map((cast) => (
                    <article className='actor_card' key={cast.id}>
                        <div>
                            <img className='actor_image' src={'https://image.tmdb.org/t/p/original/' + cast.profile_path}/>

                            <section className='actor_info'>
                                <span>{cast.name}</span>
                                <span>{cast.character}</span>
                            </section>

                        </div>
                    </article>
                ))}
            </Fragment>
        )
    }

    // -------------------------------------------------------------------------------

    const MovieInformation = () => {

        if(currentMovie != null && currentMovieCast != null && currentMovieCollection != null) {
            return (
                <div className='detail_columns'>
                    <ul>
        
                        <li>Directors</li>
                        {(currentMovieCast.filter((cast) => cast.known_for_department === "Directing")).map((director) => (
                        <li key={director.id}> ● {director.name}</li>
                        ))}
        
                    </ul>
                    
                    {(currentMovie.tagline == "") ? 
                    (
                        null
                    )
                    :
                    (
                        <ul>
                            <li>Taglines</li>
                            <li> ● {currentMovie.tagline}</li>
                        </ul>
                    )}
        
                    <ul>
                        <li>Genres</li>
                        {currentMovie.genres.map((genre) => (
                            <li key={genre.id}> ● {genre.name}</li>
                        ))}
                    </ul>
        
                    <ul>
                        <li>Release Date</li>
                        <li> ● {currentMovie.release_date}</li>
                    </ul>
        
                    <ul>
                        <li>Runtime</li>
                        <li> ● {currentMovie.runtime}m</li>
                    </ul>
        
                    <ul>
                        <li>Production Company</li>
                        {currentMovie.production_companies.slice(0,3).map((company) => (
                            <li key={company.id}> ● {company.name}</li>
                        ))}
                    </ul>
        
                    <ul>
                        <li>Budget</li>
                        <li> ● ${currentMovie.budget}</li>
                    </ul>
        
                    <ul>
                        <li>Revenue</li>
                        <li> ● ${currentMovie.revenue}</li>
                    </ul>
                                    
                    </div>
                )
        }


    }

    // -------------------------------------------------------------------------------

    return (
        <div>
            {(currentMovieCollection != null) ?
            (
                <Fragment>

                    <div className='movie_detail_section'>
                        <section className='section_title'>
                            Details
                        </section>
                        <MovieInformation/>
                    </div>

                    <div className='movie_detail_section'>
                        <section className='section_title'>
                            Top Cast
                        </section>
                        <div className='top_cast_container'>
                            <TopCast/>
                        </div>
                    </div>


                    <div className='movie_detail_section'>
                        <section className='section_title'>
                            Part of the {currentMovieCollection.name}
                        </section>
                        <MovieCollection/>
                    </div>
                    
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