import React from 'react';
import s from './Market.module.css'
import { CategorySelector } from '../../components/Category_market/CategoreSelector';
import { ProductList } from '../../components/ProductList/ProductList';

export  let loader = async () => {
    let arr = JSON.parse(localStorage.getItem('Market'))
    if (arr) {
        return arr
    } 
    return []
}

export const Market = () => {
    return(
       <div className={s.container}>
        <CategorySelector />
        <ProductList />
       </div>
    )
};