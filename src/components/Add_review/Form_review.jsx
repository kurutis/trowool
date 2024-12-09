import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../actions/review'; 
import { Modal } from '../Modal_profile/Modal';
import { AuthForm } from '../AuthForm_profile/AuthForm';
import s from './Form_review.module.css';
import go from '../../assets/go.svg';
import { AutoResizeTextarea } from '../AutoResazeTextarea/AutoresizeTextarea';

export const ReviewForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(1);
    const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.forProfile.user ? state.forProfile.user.nick : null);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files).map(file => URL.createObjectURL(file));
        setImages(prevImages => prevImages.concat(files));
    };

    useEffect(() => {
        return () => {
            images.forEach(image => URL.revokeObjectURL(image));
        };
    }, [images]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userName) { 
            setShowModal(true);
            return;
        }

        // Отправляем отзыв
        dispatch(addReview({ name: userName, text, rating, images }));
        // Сброс значений формы
        setText(''); 
        setRating(1); 
        setImages([]); 
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <form className={s.review_form} onSubmit={handleSubmit}>
                <AutoResizeTextarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Оставьте ваш отзыв!"
                />
                <div className={s.else}>
                    <select value={rating} onChange={(e) => setRating(+e.target.value)}>
                        {[1, 2, 3, 4, 5].map(star => (
                            <option key={star} value={star}>
                                {star} {star === 1 ? 'звезда' : 'звезды'}
                            </option>
                        ))}
                    </select>
                    <input type="file" multiple onChange={handleImageChange} />
                    <button type="submit"><img src={go} alt="Отправить" /></button>
                </div>
            </form>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <h2 style={{ textAlign: 'center' }}>Ошибка</h2>
                <p style={{ textAlign: 'center' }}>Пожалуйста, войдите в систему, чтобы оставить отзыв.</p>
                <AuthForm onSuccess={handleCloseModal} />
            </Modal>
        </>
    );
};