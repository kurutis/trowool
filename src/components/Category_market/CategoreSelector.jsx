import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../actions/product';
import s from './CategorySelector.module.css';
import menuImg from '../../assets/menu.svg'

export const CategorySelector = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const categories = useSelector(state => state.products.categories);
    const selectedCategory = useSelector(state => state.products.selectedCategory);
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        dispatch(setSelectedCategory(category));
        setIsMenuOpen(false); 
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (e) => {
        if (e.target.className === s.overlay) {
            setIsMenuOpen(false);
        }
    };

    return (
        <div className={s.category_selector}>
            <button className={s.assortiment} onClick={toggleMenu}>
                <img src={menuImg} alt="" />
                {selectedCategory || 'Ассортимент'}
            </button>
            {isMenuOpen && (
                <>
                    <div className={s.overlay} onClick={closeMenu}></div>
                    <div className={`${s.menu} ${isMenuOpen ? s.open : ''}`}>
                        <h2>Категории</h2>
                        {categories.map(category => (
                            <div key={category} onClick={() => handleCategoryClick(category)}>
                                {category}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};