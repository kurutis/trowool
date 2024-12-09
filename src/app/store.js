import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from '../redusers/cities';
import forprofileReducer from "../redusers/forprofile";
import reviewReducer from "../redusers/review";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    forProfile: forprofileReducer,
    review: reviewReducer,
  },
});