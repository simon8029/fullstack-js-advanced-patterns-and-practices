import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Architecture = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Architecture Advanced Topics
      </Typography>
      <Typography variant="body1">Explore advanced architecture concepts:</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/react/MemoAndUseCallback">
          Babel
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/react/performance-optimization">
          Performance Optimization
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/react/advanced-component-patterns">
          Advanced Component Patterns
        </Button>
      </Box>
    </Container>
  );
};

export default Architecture;
