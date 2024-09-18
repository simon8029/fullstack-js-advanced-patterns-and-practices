
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ReduxPerformanceOptimization = () => {
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/redux"
        sx={{ marginBottom: '20px' }}
      >
        Back to Redux Home
      </Button>
      <Typography variant="h4" gutterBottom>
        Redux Performance Optimization
      </Typography>
      <Typography variant="body1">
        Topics: Reselect, normalizing state shape, createSlice, createAsyncThunk.
      </Typography>
    </Container>
  );
};

export default ReduxPerformanceOptimization;
