import React from 'react';
import { useSelector } from 'react-redux'
import s from './Reviews.module.css'
import { ReviewForm } from '../../components/Add_review/Form_review';

export  let loader = async () => {
    let arr = JSON.parse(localStorage.getItem('Reviews'))
    if (arr) {
        return arr
    } 
    return []
}


export const Reviews = () => {
    const reviews = useSelector((state) => state.review);

    if (!reviews){
        reviews = []
    }


    return (
        <div className={s.container}>
            <ReviewForm />
            {reviews.length > 0 ? (
                <ul className={s.reviews}>
                    {reviews.map((review, index) => (
                        <li className={s.review} key={index}>
                            <div className={s.inline}>
                                <h3>{review.name}</h3>
                                <p>Рейтинг: {review.rating} {review.rating === 1 ? 'звезда' : 'звезды'}</p>
                            </div>

                            <p>{review.text}</p>
                            
                            {review.images.length > 0 && (
                                <div>
                                    {review.images.map((src, imgIndex) => (
                                        <img key={imgIndex} src={src} alt={`review-img-${imgIndex}`} style={{ width: '100px', margin: '5px' }} />
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Отзывов пока нет.</p>
            )}
        </div>
    );
};