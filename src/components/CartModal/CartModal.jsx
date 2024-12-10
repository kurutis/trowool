import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redusers/cartSlice'; 
import s from './CartModal.module.css'; 

export const CartModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    if (!isOpen) return null;

    return (
        <div className={s.modal}>
            <div className={s.modalContent}>
                <h2>Корзина</h2>
                {cartItems.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className={s.cartItem}>
                            <h3>{item.name}</h3>
                            <p>Количество: {item.quantity}</p>
                            <button className={s.delete_btn} onClick={() => handleRemove(item)}>Удалить</button>
                        </div>
                    ))
                )}
                <button className={s.close_button} onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};
