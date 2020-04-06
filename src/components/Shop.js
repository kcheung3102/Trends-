import React from 'react';
import Heroshop from './Heroshop';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import ProductList from './ProductList';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    divider: {
        padding: "30px",
    },

    centerDiv: {
        textAlign: 'center',
    }
  }));

const Shop = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
        <Grid item>
          <Heroshop/>
        </Grid>
        <Grid item className={classes.divider}>
          <Divider variant='middle' />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <ProductList />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    );
};

export default Shop;
