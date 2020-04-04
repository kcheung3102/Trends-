import React from 'react'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ImageHeader from '../images/hero-img.jpg';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';


const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundImage: `url(${ImageHeader})`,
        height: '80vh',
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        padding: theme.spacing(11, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(2),
      },
      heroButton: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0,0,0,0)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
      title: {
          fontWeight:350,
          color:'whitesmoke',
      },
      heading: {
          color:'whitesmoke',
      }



}));


export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography  className={classes.title} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Trends
          </Typography>
          <Typography variant="h5" align="center" className={classes.heading} paragraph>
            Shop for the latest styles
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container justify="center">
              <Grid item>
                <Button className={classes.heroButton} color='default' endIcon={<ArrowForwardIosRoundedIcon />}>
                  Shop now
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    )
}
