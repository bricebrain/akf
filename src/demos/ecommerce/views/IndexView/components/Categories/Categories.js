import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const mock = [
  {
    title: 'Maroquinerie',
    price: '$39.20',
    href: '/demos/ecommerce/listing',
    images: [
      {
        title: '',
        src: 'https://saint-laurent.dam.kering.com/m/7c8cccce9efb9716/Large-494699DV7279207_A.jpg?v=8',
      },
      {
        title: '',
        src: 'https://saint-laurent.dam.kering.com/m/61bed65e5536eba7/Large-574947DV7271000_D.jpg?v=2',
      },
      {
        title: '',
        src: 'https://saint-laurent.dam.kering.com/m/3fee72f3207fa84b/Medium-623930BOW0W1202_A.jpg?v=2',
      },
    ],
  },
  {
    title: 'Prêt à porter',
    price: '$89.00',
    href: '/demos/ecommerce/listing',
    images: [
      {
        title: '',
        src: 'https://parisfashionshops.com/image/fr/big/vert-bouteille/1/alice-desir-robes-de-soire23.jpg',
      },
      {
        title: '',
        src: 'https://parisfashionshops.com/image/fr/big/dore/1/alice-desir-robes-de-soire27.jpg',
      },
      {
        title: '',
        src: 'https://parisfashionshops.com/image/fr/big/fuchsia/1/alice-desir-robes-de-soire20.jpg',
      },
    ],
  },
  {
    title: 'Beauté/Soins',
    price: '$29.40',
    href: '/demos/ecommerce/listing',
    images: [
      {
        title: '',
        src: 'https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw07f5615e/images/hi-res/SKU/SKU_3376/637098_swatch.jpg',
      },
      {
        title: '',
        src: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Library-Sites-SephoraV2/fr_FR/dwec167a76/landingpage/LP_top_cat/mup-good-for-W42.jpg',
      },
      {
        title: '',
        src: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Library-Sites-SephoraV2/fr_FR/dw909038b9/landingpage/LP_top_cat/BG_MASCARA.jpg',
      },
    ],
  },
];

const Categories = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      {mock.map((item, i) => (
        <Grid key={i} item xs={12} sm={4}>
          <Card variant={'outlined'}>
            <ImageList
              variant="quilted"
              cols={2}
              rowHeight={140}
              sx={{ margin: 0 }}
            >
              {item.images.map((image, j) => (
                <ImageListItem key={j} cols={1} rows={j === 0 ? 2 : 1}>
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    style={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Box
              padding={4}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Typography variant={'h5'} fontWeight={700} align={'center'}>
                {item.title}
              </Typography>
              <Typography align={'center'} color={'text.secondary'} marginY={2}>
                {/* Starting at {item.price} */}
              </Typography>
              <Button
                component={'a'}
                href={item.href}
                variant={'contained'}
                color={'primary'}
                size={'large'}
              >
                View all
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
