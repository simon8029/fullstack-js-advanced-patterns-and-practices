
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Docker = () => {
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/container"
        sx={{ marginBottom: '20px' }}
      >
        Back to Container Home
      </Button>
      <Typography variant="h4" gutterBottom>
        Docker for Fullstack Applications
      </Typography>
      <Typography variant="body1">
        Topics: Multi-container environment, Docker Compose, NGINX, optimizing Docker images.
      </Typography>
    </Container>
  );
};

export default Docker;
