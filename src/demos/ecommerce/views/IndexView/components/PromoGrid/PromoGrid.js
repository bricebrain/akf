import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    caption: 'Nouveau',
    title: 'LOVINA',
    description: 'Sac A Main Matelassé',
    image:
      'https://parisfashionshops.com/image/fr/big/camel/1/new-bag-creation-sac-a-main34.jpg',
    href: '/demos/ecommerce/product-overview',
  },
  {
    caption: 'Top prix',
    title: 'LOVINA',
    description: 'WSac A Main Matelassé',
    image:
      'https://parisfashionshops.com/image/fr/big/camel/1/new-bag-creation-sac-a-main34.jpg',
    href: '/demos/ecommerce/product-overview',
  },
  {
    caption: 'Nouveau',
    title: 'LOVINA',
    description: 'Sac A Main Matelassé',
    image:
      'https://parisfashionshops.com/image/fr/big/camel/1/new-bag-creation-sac-a-main34.jpg',
    href: '/demos/ecommerce/product-overview',
  },
];

const PromoGrid = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={{ xs: 2, sm: 4 }}>
      <Grid item xs={12} md={5}>
        <Card
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },

            height: '70%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ p: 0, mb: 0 }}>
            <Box
              component={LazyLoadImage}
              effect="blur"
              src={mock[0].image}
              width={1}
              maxWidth={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
          </Box>
          <Box>
            <Typography
              color={'text.secondary'}
              fontWeight={700}
              variant={'caption'}
              sx={{ textTransform: 'uppercase' }}
            >
              {mock[0].caption}
            </Typography>
            <Typography variant={'h5'} fontWeight={700} marginY={1}>
              {mock[0].title}
            </Typography>
            <Typography color={'text.secondary'}>
              {mock[0].description}
            </Typography>
            <Link
              href={mock[0].href}
              variant={'subtitle2'}
              color={'primary'}
              fontWeight={700}
              underline={'hover'}
              sx={{
                textTransform: 'uppercase',
                display: 'block',
                mt: { xs: 2, sm: 4 },
              }}
            >
              Achetez maintenant
            </Link>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          <Grid item xs={12}>
            <Card
              elevation={3}
              sx={{
                p: { xs: 2, sm: 4 },
                height: '70%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row-reverse' },
                alignItems: 'center',
              }}
            >
              <Box sx={{ p: 4, mb: 2 }}>
                <Box
                  component={LazyLoadImage}
                  effect="blur"
                  src={mock[1].image}
                  width={'412px'}
                  height={'321px'}
                  maxWidth={1}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.5)'
                        : 'none',
                  }}
                />
              </Box>
              <Box>
                <Typography
                  color={'text.secondary'}
                  fontWeight={700}
                  variant={'caption'}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {mock[1].caption}
                </Typography>
                <Typography variant={'h5'} fontWeight={700} marginY={1}>
                  {mock[1].title}
                </Typography>
                <Typography color={'text.secondary'}>
                  {mock[1].description}
                </Typography>
                <Link
                  href={mock[1].href}
                  variant={'subtitle2'}
                  color={'primary'}
                  fontWeight={700}
                  underline={'hover'}
                  sx={{
                    textTransform: 'uppercase',
                    display: 'block',
                    mt: { xs: 2, sm: 4 },
                  }}
                >
                  Achetez maintenant
                </Link>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              elevation={3}
              sx={{
                p: { xs: 2, sm: 4 },
                height: '70%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
              }}
            >
              <Box sx={{ p: 4, mb: 2 }}>
                <Box
                  component={LazyLoadImage}
                  effect="blur"
                  src={mock[2].image}
                  width={1}
                  maxWidth={1}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.5)'
                        : 'none',
                  }}
                />
              </Box>
              <Box>
                <Typography
                  color={'text.secondary'}
                  fontWeight={700}
                  variant={'caption'}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {mock[2].caption}
                </Typography>
                <Typography variant={'h5'} fontWeight={700} marginY={1}>
                  {mock[2].title}
                </Typography>
                <Typography color={'text.secondary'}>
                  {mock[2].description}
                </Typography>
                <Link
                  href={mock[2].href}
                  variant={'subtitle2'}
                  color={'primary'}
                  fontWeight={700}
                  underline={'hover'}
                  sx={{
                    textTransform: 'uppercase',
                    display: 'block',
                    mt: { xs: 2, sm: 4 },
                  }}
                >
                  Achetez maintenant
                </Link>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PromoGrid;
