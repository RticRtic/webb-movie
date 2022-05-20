import { useEffect, useState } from 'react';
import { getReviewDocuments } from '../../models/firebaseModel';
import '../../styles/movie-reviews.css';

const MovieReviews = ({ currentMovie }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviewDocuments(currentMovie.id, setReviews)
    }, [])

    // ---------------- Review Card ----------------


    const ReviewCard = ({ review }) => {

        return (
            <div className='review_card'>

                <div>
                    <section className='review_details_container'>
                        <i>{review.username[0].toUpperCase()}</i>

                        <div>
                            <section className='review_details_section username'>
                                <span>{review.username}</span>
                                <span>{review.timestamp}</span>
                            </section>

                            <section className='review_details_section rating'>
                                <span>{review.upvotes.length} people found this review helpful</span>
                                <span>Rating: {review.rating}</span>
                            </section>
                        </div>

                    </section>
                    <section className='review_text_container'>
                        <p>
                            {review.review}
                        </p>
                    </section>
                </div>

            </div>
        )

    }


    // ---------------------------------------------

    if (reviews.length > 0) {

        return (
            <div className='reviews_wrapper'>
                {reviews.slice(0, 3).map((review) => (
                    <div key={review.userID}>
                        <ReviewCard review={review} />
                    </div>
                ))}
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