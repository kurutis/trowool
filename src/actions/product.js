import { SET_SELECTED_CATEGORY } from './actionTypes';

export const setSelectedCategory = (category) => ({
    type: SET_SELECTED_CATEGORY,
    payload: category,
});