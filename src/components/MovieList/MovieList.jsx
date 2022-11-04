import { Grid } from '@mui/material';
import React from 'react';

import useStyles from './styles';

const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>MovieList</Grid>
  );
};

export default MovieList;