
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const GKE = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Google Kubernetes Engine (GKE)
      </Typography>
      <Typography variant="body1">
        Topics: Deploying containerized applications, auto-scaling, load balancing.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/googlecloud"
        sx={{ marginTop: '20px' }}
      >
        Back to Google Cloud Home
      </Button>
    </Container>
  );
};

export default GKE;
