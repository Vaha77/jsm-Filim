import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import { useGetMoviesQuery } from '../../Services/TMDB';

import { selectGenreOrCategory } from '../../Fratures/currentGenreOrCategory';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);

  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured.';
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
