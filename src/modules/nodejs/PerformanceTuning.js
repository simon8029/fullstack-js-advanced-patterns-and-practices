
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PerformanceTuning = () => {
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/nodejs"
        sx={{ marginBottom: '20px' }}
      >
        Back to Node.js Home
      </Button>
      <Typography variant="h4" gutterBottom>
        Node.js Performance Tuning
      </Typography>
      <Typography variant="body1">
        Topics: Async programming, Worker Threads, clustering, Redis caching.
      </Typography>
    </Container>
  );
};

export default PerformanceTuning;
