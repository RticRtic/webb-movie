import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getReviewDocuments, undoUpvote, upvoteReview } from '../../models/firebaseModel';
import '../../styles/movie-reviews.css';

const MovieReviews = ({ currentMovie, device, reviewChange, setReviewChange }) => {

    const [reviews, setReviews] = useState([]);

    let user = useSelector(state => state.user);
    let navigate = useNavigate();


    useEffect(() => {
        getReviewDocuments(currentMovie.id, setReviews);
    }, [reviewChange])

    const handleUpvote = (review) => {

        if (user.signedIn) {

            if (review.upvotes.includes(user.userID)) {

                undoUpvote(review.reviewID, user.userID, reviewChange, setReviewChange);

            } else {

                upvoteReview(review.reviewID, user.userID, reviewChange, setReviewChange);
            }

        } else {
            navigate("/login");
        }
    }


    // ---------------- Review Card ----------------


    const ReviewCard = ({ review }) => {

        let totalUpvotes = review.upvotes.length;

        return (
            <div className='review_card'>

                <div>
                    <section className='review_details_header'>
                        <aside>
                            <i>{review.username[0].toUpperCase()}</i>
                        </aside>
                        {(device == "web") ?
                            (
                                <div className=''>
                                    <section className='review_details_section username'>
                                        <span>{review.username}</span>
                                        <span>{review.timestamp}</span>
                                    </section>

                                    <section className='review_details_section rating'>
                                        <span><span>{totalUpvotes}</span> people found this review helpful</span>
                                        <span>Rating: {review.rating}</span>
                                    </section>
                                </div>
                            )
                            :
                            (
                                <Fragment>
                                    <div className=''>
                                        <section className='review_details_section username'>
                                            <span>{review.username}</span>
                                            <span>Rating: {review.rating}</span>
                                        </section>
                                    </div>
                                    <span className='review_timestamp_mobile'>{review.timestamp} | <span>{totalUpvotes}</span> people found this review helpful</span>

                                </Fragment>

                            )
                        }




                    </section>
                    <section className='review_text_container'>
                        <p>
                            {review.review}
                        </p>
                    </section>
                    <section className='upvote_container'>
                        {(review.upvotes.includes(user.userID)) ? <span className='found_helpful'>You found this review helpful <button onClick={() => handleUpvote(review)}>Undo</button></span> : <span>I found this review <button onClick={() => handleUpvote(review)}>Helpful</button></span>}
                    </section>
                </div>

            </div>
        )

    }


    // ---------------------------------------------

    if (reviews.length > 0) {

        return (
            <div className='reviews_wrapper'>
                {reviews.sort((a,b) => { return b.upvotes.length - a.upvotes.length}).slice(0, 3).map((review) => (
                    <ReviewCard review={review} key={review.reviewID} />
                ))}
                <div>LOAD MORE</div>
            </div>

        );
    } else {
        return (
            <div className='reviews_wrapper'>
                <h3>
                    No reviews yet!
                </h3>
            </div>

        );
    }

}

export default MovieReviews;