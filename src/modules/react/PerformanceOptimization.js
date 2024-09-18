
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PerformanceOptimization = () => {
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/react"
        sx={{ marginBottom: '20px' }}
      >
        Back to React Home
      </Button>
      <Typography variant="h4" gutterBottom>
        React Performance Optimization
      </Typography>
      <Typography variant="body1">
        Topics: Code splitting, lazy loading, memoization strategies, concurrent mode, reducing re-renders.
      </Typography>
    </Container>
  );
};

export default PerformanceOptimization;
