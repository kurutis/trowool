import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ProductList.module.css';
import basket from '../../assets/gray_basket.svg'
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redusers/cartSlice';


export const ProductList = () => {
    const products = useSelector(state => state.products.products);
    const selectedCategory = useSelector(state => state.products.selectedCategory);
    const dispatch = useDispatch();

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className={s.productGrid}>
            {filteredProducts.length === 0 ? (
                <p>Товары не найдены</p>
            ) : (
                filteredProducts.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className={s.productCard}>
                        <img src={product.images[0]} alt={product.name} />
                        <div className={s.stroke}>
                            <h2>{product.name}</h2>
                            <button onClick={handleAddToCart}><img src={basket} alt="" /></button>
                        </div>
                        <p className={s.composition}>{product.composition_proccent}</p>
                        <div className={s.cost}>
                            <p>Цена: {product.price} р./шт</p>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
}