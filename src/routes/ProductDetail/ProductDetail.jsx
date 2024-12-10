import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './ProductDetail.module.css';
import back from '../../assets/back.svg';
import { addToCart, removeFromCart } from '../../redusers/cartSlice'; 
import basket from '../../assets/basketIcon.svg';

export  let loader = async () => {
    let arr = JSON.parse(localStorage.getItem('/product/:id'))
    if (arr) {
        return arr
    } 
    return []
}

export const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const product = products.find(product => product.id === parseInt(id));

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    if (!product) {
        return (
            <div className={s.container}>
                <p>Товар не найден</p>
            </div>
        );
    }

    return (
        <div className={s.container}>
            <button className={s.back} onClick={() => navigate('/Market')}>
                <img src={back} alt="" />
                Назад
            </button>
            <h1 className={s.product_name}>{product.name}</h1>
            <div className={s.product}>
                <img src={product.images[0]} alt={product.name} />
                <div className={s.product_info}>
                    <h2>Характеристики:</h2>
                    <p>Бренд: {product.brand}</p>
                    <p>Сезон: {product.season}</p>
                    <p>Серия: {product.series}</p>
                    <p>Состав пряжи: {product.composition_proccent}</p>
                    <p>В одной упаковке: {product.packQuantity}</p>
                    <p>Длина нити(м): {product.threadLength}</p>
                    <p>Вес (г): {product.weight}</p>
                    <h2>Описание</h2>
                    <p className={s.description}>{product.description}</p>
                </div>
            </div>
            <div className={s.actions}>
                <div className={s.colors}>
                    <h2>Выбрать цвет</h2>
                </div>
                <div className={s.info_line}>
                    <p>{product.price} руб/шт</p>
                    <button className={s.basket_button} onClick={handleAddToCart}>
                        В корзину
                        <img src={basket} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};