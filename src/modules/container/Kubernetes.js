
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Kubernetes = () => {
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
        Kubernetes and Orchestration
      </Typography>
      <Typography variant="body1">
        Topics: Deploying applications, auto-scaling, load balancing, service mesh (Istio).
      </Typography>
    </Container>
  );
};

export default Kubernetes;
