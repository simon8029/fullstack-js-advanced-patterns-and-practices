
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const StorybookHome = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Storybook for UI Development
      </Typography>
      <Typography variant="body1">Explore advanced Storybook concepts:</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/storybook/building-components">
          Building Components
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/storybook/visual-testing">
          Visual Testing
        </Button>
      </Box>
    </Container>
  );
};

export default StorybookHome;
