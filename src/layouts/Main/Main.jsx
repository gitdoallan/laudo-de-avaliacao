import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Topbar, Footer } from './components';
import Container from 'common/Container';

const Main = ({children}) => {
  const theme = useTheme();

  return (
    <div>
      <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={1}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 }}>
          <Topbar />
        </Container>
      </AppBar>
      <main>
        <Box height={{ xs: 56, sm: 64 }} />
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
