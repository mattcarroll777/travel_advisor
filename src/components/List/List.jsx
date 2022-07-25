import React, { useState } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('resturants');
  const [rating, setRating] = useState('');

  return (
    <div className={classes.container}>
      <Typography varinat="h4">Resturants hotels and atractions</Typography>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="resturants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attriations</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Abv 3.0</MenuItem>
          <MenuItem value={4}>Abv 4.0</MenuItem>
          <MenuItem value={4.5}>Abv 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
