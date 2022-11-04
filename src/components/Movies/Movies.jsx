import React from 'react';
import MovieList from '..';
import { useGetMoviesQuery } from '../Services/TMDB';

const Movies = () => {
  const { data } = useGetMoviesQuery();

  console.log(data, 'vaha');

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
