import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import {
  MainBanner,
  Reviews,
  Services,
  Process,
} from './components';

const Consulting = () => {
  return (
    <Box>
      <Container>
        <MainBanner />
      </Container>
      <Container>
        <Process />
      </Container>
      <Divider />
      <Container>
        <Services />
      </Container>
      <Divider />
      <Container>
        <Reviews />
      </Container>
      <Divider />
    </Box>
  );
};

export default Consulting;
