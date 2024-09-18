
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CypressHome = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cypress Advanced Testing
      </Typography>
      <Typography variant="body1">Explore advanced Cypress testing strategies:</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/cypress/end-to-end-testing">
          End-to-End Testing
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/cypress/visual-regression-testing">
          Visual Regression Testing
        </Button>
      </Box>
    </Container>
  );
};

export default CypressHome;
