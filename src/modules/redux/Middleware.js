
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Middleware = () => {
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
        Redux Middleware
      </Typography>
      <Typography variant="body1">
        Topics: Redux Thunk, Redux Saga, handling async logic, error handling.
      </Typography>
    </Container>
  );
};

export default Middleware;
