import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from '../redusers/cities';
import forprofileReducer from "../redusers/forprofile";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    forProfile: forprofileReducer,
  },
});