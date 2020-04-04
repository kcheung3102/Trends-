import React from 'react'
import Header from './Header';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
  }));

export default function Landing() {
      const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
        </div>
    )
}
