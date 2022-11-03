import React from 'react';
import { useGetMoviesQuery } from '../Services/TMDB';

const Movies = () => {
  const { data } = useGetMoviesQuery();

  console.log(data, 'vaha');

  return (
    <div>
      Movies
    </div>
  );
};

export default Movies;
