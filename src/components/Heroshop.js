import React from 'react'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ImageHeader from '../images/shop-hero.jpg';


const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundImage: `url(${ImageHeader})`,
        height: '40vh',
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        padding: theme.spacing(11, 0, 6),
      },
      title: {
          fontWeight:350,
          color:'whitesmoke',
      },



}));


export default function Heroshop() {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography  className={classes.title} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Shop
          </Typography>
        </Container>
      </div>
    )
}
