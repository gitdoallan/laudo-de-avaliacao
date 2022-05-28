/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

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
        Fazemos laudo de avaliação de imóveis residenciais e comerciais. Emitimos o PTAM (Parecer técnico de Avaliação Mercadológica) por arquiteto certificado em Avalições Imobiliárias e Pericias Judiciais.
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
            <TextField
              sx={{ height: 54 }}
              label="Nome"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label="Email"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mensagem"
              multiline
              rows={4}
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{ height: 54 }}
              variant="contained"
              color="primary"
              size="medium"
              fullWidth
            >
            Enviar mensagem
            </Button>
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
