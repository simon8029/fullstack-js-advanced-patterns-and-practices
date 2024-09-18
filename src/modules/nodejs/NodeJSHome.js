
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NodeJSHome = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Node.js Advanced Topics
      </Typography>
      <Typography variant="body1">Explore advanced Node.js topics:</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/nodejs/performance-tuning">
          Performance Tuning
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/nodejs/microservices">
          Microservices
        </Button>
      </Box>
    </Container>
  );
};

export default NodeJSHome;
