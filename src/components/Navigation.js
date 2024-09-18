import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();


  const getButtonStyle = (path) => {
    return location.pathname === path
      ? { backgroundColor: '#fff', color: '#1976d2' }
      : { color: '#fff' };
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Fullstack JS Advanced Patterns and Practices
        </Typography>
        <Box>
          <Button sx={getButtonStyle('/react')} component={Link} to="/react">
            React
          </Button>
          <Button sx={getButtonStyle('/redux')} component={Link} to="/redux">
            Redux
          </Button>
          <Button sx={getButtonStyle('/cypress')} component={Link} to="/cypress">
            Cypress
          </Button>
          <Button sx={getButtonStyle('/container')} component={Link} to="/container">
            Container
          </Button>
          <Button sx={getButtonStyle('/nodejs')} component={Link} to="/nodejs">
            Node.js
          </Button>
          <Button sx={getButtonStyle('/storybook')} component={Link} to="/storybook">
            Storybook
          </Button>
          <Button sx={getButtonStyle('/googlecloud')} component={Link} to="/googlecloud">
            Google Cloud
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
