import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Process = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Propostas rápidas e efetivas
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Analisamos o seu caso e lhe retornamos em até 12 horas.
          <br />
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Entre em contato',
            subtitle:
              'Você envia os detalhes do serviço que está precisando.',
          },
          {
            title: 'Idenficamos',
            subtitle:
              'Em até 12 horas entraremos em contato para tirarmos as dúvidas para enviarmos a sua proposta',
          },
          {
            title: 'Aprovação da proposta',
            subtitle:
              'Aguardamos o seu retorno com a aprovação da proposta para marcarmos a vistoria.',
          },
          {
            title: 'Pagamento',
            subtitle:
              'O pagamento será feito no local da vistoria. Aceitamos cartão de crédito.',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
            <Box display={'flex'} flexDirection={'column'}>
              <Box display={'flex'} alignItems={'center'} marginBottom={1}>
                <Box
                  borderRadius={'100%'}
                  bgcolor={theme.palette.secondary.main}
                  marginRight={2}
                  width={40}
                  height={40}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Box
                    component={Typography}
                    variant={'h6'}
                    fontWeight={600}
                    color={theme.palette.common.white}
                  >
                    {i + 1}
                  </Box>
                </Box>
                <Typography variant={'h6'} gutterBottom fontWeight={500}>
                  {item.title}
                </Typography>
              </Box>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </Box>
          </Grid>
        ))}
        <Grid
          item
          container
          xs={12}
          marginBottom={4}
          justifyContent={'center'}
          data-aos={'fade-up'}
        >
          <Button variant={'contained'} color={'primary'} size={'large'}>
            Gostou? Fale conosco via WhatsApp agora!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Process;
