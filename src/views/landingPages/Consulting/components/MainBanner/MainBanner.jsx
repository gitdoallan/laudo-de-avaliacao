/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import NameInput from '../InputForms/Contact/NameInput';
import EmailInput from '../InputForms/Contact/EmailInput';
import PhoneNumberInput from '../InputForms/Contact/PhoneNumberInput';
import CategoryInput from '../InputForms/Contact/CategoryInput';
import NeighborhoodInput from '../InputForms/Contact/NeighborhoodInput';
import SubmitForm from '../InputForms/Contact/SubmitForm';

export default function MainBanner() {

  const GridItemHeadlineBlock = () => (
    <Box marginBottom={4} marginTop={4}>
      <Typography
        variant="h2"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
        }}
      >
        Precisa de laudo de avaliação?
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="textPrimary"
        align={'center'}
        sx={{
          fontWeight: 400,
        }}
      >
        Fazemos laudo de avaliação de imóveis residenciais e comerciais. Emitimos o Laudo Técnico por arquiteto certificado em Avaliações Imobiliárias e Pericias Judiciais.
        <br />
        Também emitimos laudos judiciais com valor jurídico em ações judiciais por peritos certificados.
        <br />
      </Typography>
    </Box>
  );

  const GridItemFormBlock = () => (
    <Box
      padding={{ xs: 3, sm: 6 }}
      width={'100%'}
      component={Card}
      borderRadius={2}
      boxShadow={4}
      marginBottom={4}
    >
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <NameInput />
          </Grid>
          <Grid item xs={12} sm={6}>
            <EmailInput />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PhoneNumberInput />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NeighborhoodInput />
          </Grid>
          <Grid item xs={12}>
            <CategoryInput />
          </Grid>
          <Grid item xs={12}>
            <SubmitForm />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      </form>
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemFormBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
