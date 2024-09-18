
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const GoogleCloudHome = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Google Cloud for Fullstack Applications
      </Typography>
      <Typography variant="body1">Explore advanced Google Cloud topics:</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/googlecloud/gke">
          Google Kubernetes Engine (GKE)
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/googlecloud/firebase">
          Firebase
        </Button>
      </Box>
    </Container>
  );
};

export default GoogleCloudHome;
