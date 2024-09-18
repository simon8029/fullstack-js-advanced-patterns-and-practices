
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const VisualRegressionTesting = () => {
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
        Visual Regression Testing with Cypress
      </Typography>
      <Typography variant="body1">
        Topics: Percy, Applitools, automated visual diffs in CI/CD pipeline.
      </Typography>
    </Container>
  );
};

export default VisualRegressionTesting;
