
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ContainerHome = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Containerization with Docker & Kubernetes
      </Typography>
      <Typography variant="body1">Explore advanced containerization topics:</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/container/docker">
          Docker
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/container/kubernetes">
          Kubernetes
        </Button>
      </Box>
    </Container>
  );
};

export default ContainerHome;
