import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function Services () {
  const theme = useTheme();

  return (
    <Box>
      <Box
        component={Typography}
        fontWeight={700}
        marginTop={4}
        variant={'h3'}
        gutterBottom
        align={'center'}
      >
          Serviços
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        align={'center'}
      >
        A Laudo de Avaliação é uma empresa de Arquitetura, Avaliações Imobiliárias e Perícias Judicias com 25 anos de atuação no mercado em Brasília, São Paulo e Rio de Janeiro.
        <br />
        Nossa equipe de arquitetos avaliadores são certificados pela Laudo Consult e credenciados no TJDFT.
        <br />
        {' - '}
      </Typography>
      <Box component={Card} boxShadow={4} data-aos={'fade-up'}>
        <Box component={CardContent} padding={{ sm: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box marginBottom={4}>
                <Typography fontWeight={600} variant={'h6'} gutterBottom>
                Avaliação de Imóveis
                </Typography>
              </Box>
              <Grid container spacing={1}>
                {[
                  'Venda e Locação',
                  'Renovação de Aluguel',
                  'Revisão dos impostos de IPTU',
                  'Financiamentos Bancários',
                  'Imóveis residênciais',
                  'Imóveis comerciais',
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                width={'100%'}
                height={'100%'}
                borderLeft={{ xs: 0, sm: `1px solid ${theme.palette.divider}` }}
                paddingLeft={{ xs: 0, sm: 4 }}
                paddingTop={{ xs: 4, sm: 0 }}
                borderTop={{ xs: `1px solid ${theme.palette.divider}`, sm: 0 }}
              >
                <Box marginBottom={4}>
                  <Box
                    component={Typography}
                    fontWeight={600}
                    variant={'h6'}
                    gutterBottom
                  >
                    Laudo para ações judiciais
                    <br />
                    .
                  </Box>
                  <Typography>
                  Emitimos Laudos Judiciais com valor jurídico em ações judiciais por peritos certificados.
                  </Typography>
                </Box>
                <Button size={'large'} variant={'contained'}>
                  Entrar em contato
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <br />
      {' - '}
      <Box component={Card} boxShadow={4} data-aos={'fade-up'} marginBottom={4}>
        <Box component={CardContent} padding={{ sm: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={12}>
              <Box
                width={'100%'}
                height={'100%'}
                paddingTop={{ xs: 4, sm: 0 }}
                borderTop={{ xs: `1px solid ${theme.palette.divider}`, sm: 0 }}
              >
                <Box marginBottom={4}>
                  <Box
                    component={Typography}
                    fontWeight={600}
                    variant={'h6'}
                    gutterBottom
                  >
                    Projetos de Arquitetura e Home Staging 3D
                    <br />
                  </Box>
                  <Typography>
                  Fazemos projetos residenciais, comerciais, corporativo trabalhamos com imobiliarias para serviços de home staging 3D (imagens realistas).
                  </Typography>
                </Box>
                <Button size={'large'} variant={'contained'}>
                  Entrar em contato
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
