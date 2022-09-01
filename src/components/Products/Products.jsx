import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import { Container } from 'semantic-ui-react';
import { Typography } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
import { Category } from '@material-ui/icons';

const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles();

  if (!categories.length) return <p>Loading...</p>;

  return (
    <main  className={classes.content}>
      <div className={classes.toolbar}  />

      {categories.map(category =>{
          return(
          <Container id = "products">
            <Typography className= "headline" variant= "h3" component="h2">
              {category.name}
            </Typography>
              <Grid container justify="center" spacing={4} >
                {category.productsData.map((product) => (
                  <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
           </Grid>
          </Container>
      );
    })}
    </main>
  );
};

export default Products;

