
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const EndToEndTesting = () => {
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/cypress"
        sx={{ marginBottom: '20px' }}
      >
        Back to Cypress Home
      </Button>
      <Typography variant="h4" gutterBottom>
        End-to-End Testing with Cypress
      </Typography>
      <Typography variant="body1">
        Topics: User journeys, complex form testing, API mocking with cy.intercept().
      </Typography>
    </Container>
  );
};

export default EndToEndTesting;
