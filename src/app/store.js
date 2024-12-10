import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from '../redusers/cities';
import forprofileReducer from "../redusers/forprofile";
import reviewReducer from "../redusers/review";
import productReducer from "../redusers/products";
import cartReducer from '../redusers/cartSlice'

export default configureStore({
  reducer: {
    cities: citiesReducer,
    forProfile: forprofileReducer,
    review: reviewReducer,
    products: productReducer,
    cart: cartReducer,
  },
});