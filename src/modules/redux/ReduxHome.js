
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ReduxHome = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Redux Advanced Topics
      </Typography>
      <Typography variant="body1">Explore advanced Redux concepts:</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/redux/performance-optimization">
          Performance Optimization
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/redux/middleware">
          Middleware
        </Button>
      </Box>
    </Container>
  );
};

export default ReduxHome;
