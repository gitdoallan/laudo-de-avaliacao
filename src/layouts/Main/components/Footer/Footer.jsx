import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WhatsApp from './WhatsApp';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom
      >
        &copy; 2022, Laudo de Avaliação.
      </Typography>
  
      <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
        Quando você visita ou interage com este site, serviço e ferramentas, nós ou nossos provedores de serviços podem utilizar cookies
        para melhorar a sua experiência de navegação.
      </Typography>

      <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
        Este site foi programado por <a href="https://allan-in-the.cloud/">Allan Carvalho</a> utilizando as ferramentas MUI, Webbee, ReactJS, JavaScript, Git, CSS e SASS. 
      </Typography>

    </Grid>
    <WhatsApp />
  </Grid>
);

export default Footer;
