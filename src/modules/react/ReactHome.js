
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ReactHome = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        React Advanced Topics
      </Typography>
      <Typography variant="body1">Explore advanced React concepts:</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/react/MemoAndUseCallback">
          UseMemo And UseCallback
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

export default ReactHome;
