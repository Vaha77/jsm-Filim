import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../Services/TMDB';
import genreOrCategoryReducer from '../Fratures/currentGenreOrCategory';
import userReducer from '../Fratures/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,

  },
});
