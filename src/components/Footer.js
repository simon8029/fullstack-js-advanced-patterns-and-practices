import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2">
          © 2024 Fullstack JS Advanced Patterns and Practices. All rights reserved.
        </Typography>
        <Link
          href="https://github.com/simon8029/fullstack-js-advanced-patterns-and-practices"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'underline', color: 'inherit' }}
        >
          <GitHubIcon sx={{ mr: 1 }} /> GitHub
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
