
import React from 'react';
import { Container, Typography } from '@mui/material';

const VisualTesting = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Visual Testing with Storybook
      </Typography>
      <Typography variant="body1">
        Topics: Chromatic, Jest snapshots, visual regression testing.
      </Typography>
    </Container>
  );
};

export default VisualTesting;
