import React from 'react';
import Box from '@mui/material/Box';
import Logo from 'images/logo_300h.png';

export default function Topbar () {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          underline="none"
          href="/"
          title="Laudo de Avaliação"
          height={{ xs: 60, md: 60 }}
          width={200}
        >
          <img src={Logo} alt="Laudo de Avaliação" width="100%" height="100%" />
        </Box>
      </Box>
    </Box>
  );
}
