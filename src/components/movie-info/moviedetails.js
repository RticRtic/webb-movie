
import '../../styles/movie-details.css';
import '../../styles/movie-info.css';
import '../../styles/movie-reviews.css';
import MovieCard from '../globals/movieCard';
import { Fragment, useCallback, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MovieReviews from './movieReviews';
import { faPen, faPencil, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { getDate } from '../../models/constants';
import { createReviewEntry } from '../../models/firebaseModel';


const MovieDetails = ({ device, currentMovie, currentMovieCollection, currentMovieCast }) => {


    let user = useSelector(state => state.user);
    let navigate = useNavigate();
    const [reviewChange, setReviewChange] = useState(0);

    const [isWritingReview, setIsWritingReview] = useState(false);
    let reviewRef = useRef("");
    let ratingRef = useRef(0);

    const submitReview = () => {
        let date = getDate();
        
        if(ratingRef.current.value != 0 && reviewRef.current.value != "" && user.signedIn) {
            if(createReviewEntry(
                user.username,
                currentMovie.title,
                user.userID, 
                currentMovie.id,
                date,
                ratingRef.current.value,
                reviewRef.current.value)) {
                    setIsWritingReview(false);
                    setReviewChange(reviewChange + 1);
                }
            
        };
        
    };



    // -------------------------------------------------------------------------------

    const MovieCollection = () => {


        let navigate = useNavigate();

        const selectMovie = (movie) => {
            let title = movie.title.replace(/\s+/g, '-');
            navigate('/movie/' + (movie.id) + '/' + (title.toLowerCase()));
        };

        if (currentMovieCollection != null) {
            return (
                <div className='movie_collection_container'>

                    {currentMovieCollection.parts.map(movie => (
                        <article key={movie.id} onClick={() => selectMovie(movie)} style={{ margin: '10px' }}>
                            <MovieCard movie={movie} />
                        </article>
                    ))}

                </div>

            )
        }


    }

    // -------------------------------------------------------------------------------

    const TopCast = () => {

        if (currentMovieCast != null) {
            return (
                <Fragment>
                    {currentMovieCast.slice(0, 10).map((cast) => (
                        <article className='actor_card' key={cast.id}>
                            <div>
                                <img className='actor_image' src={'https://image.tmdb.org/t/p/original/' + cast.profile_path} />

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

    }

    // -------------------------------------------------------------------------------

    const MovieInformation = () => {

        if (currentMovie != null && currentMovieCast != null && currentMovieCollection != null) {
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
                        {currentMovie.production_companies.slice(0, 3).map((company) => (
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

    const WriteReview = () => {

        if (isWritingReview) {
            return (
                <div className='movie_write_review_wrapper'>
                    <div className='inner'>
                        <div className='movie_review_rating_container'>
                            <i>{user.username[0].toUpperCase()}</i>
                            <h3>Review by {user.username}</h3>
                            <h3>Movie to Review: {currentMovie.title}</h3>
                            <select className='movie_rating_select' ref={ratingRef}>
                                <option value={0} > ⭐ Select Rating</option>
                                <option value={10} > ⭐ (10) Masterpiece</option>
                                <option value={9}> ⭐ (9) Great</option>
                                <option value={8}> ⭐ (8) Very Good</option>
                                <option value={7}> ⭐ (7) Good</option>
                                <option value={6}> ⭐ (6) Fine</option>
                                <option value={5}> ⭐ (5) Average</option>
                                <option value={4}> ⭐ (4) Bad</option>
                                <option value={3}> ⭐ (3) Very Bad</option>
                                <option value={2}> ⭐ (2) Horrible</option>
                                <option value={1}> ⭐ (1) Appalling</option>
                            </select>

                        </div>
                        <div className='movie_review_input_container'>
                            <textarea ref={reviewRef} placeholder="Start writing ..."></textarea>
                            <button onClick={submitReview}>Submit</button>
                        </div>
                    </div>

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
                            <MovieInformation />
                        </div>

                        <div className='movie_detail_section'>
                            <section className='section_title'>
                                Top Cast
                            </section>
                            <div className='top_cast_container'>
                                <TopCast />
                            </div>
                        </div>


                        <div className='movie_detail_section'>
                            <section className='section_title'>
                                Part of the {currentMovieCollection.name}
                            </section>
                            <MovieCollection />
                        </div>

                        <div className='movie_detail_section'>
                            <section className='section_title section_title_review'>
                                <span>Reviews</span>
                                {(user.signedIn) ?
                                    (
                                        <span className='write' onClick={() => {
                                            setIsWritingReview(!isWritingReview);
                                        }}>Write a review <FontAwesomeIcon icon={faPen} /></span>
                                    )
                                    :
                                    (
                                        null
                                    )

                                }

                            </section>
                            <WriteReview />
                            <MovieReviews currentMovie={currentMovie} device={device} reviewChange={reviewChange} setReviewChange={setReviewChange}/>
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