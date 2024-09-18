
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AdvancedComponentPatterns = () => {
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
        Advanced Component Patterns in React
      </Typography>
      <Typography variant="body1">
        Topics: Compound components, render props, higher-order components, Context API, custom hooks, atomic design.
      </Typography>
    </Container>
  );
};

export default AdvancedComponentPatterns;
