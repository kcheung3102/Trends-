import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
    title: {
       flexGrow: 1,
       color:'black',
      },
    navbar: {
      boxShadow:'none',
      background:'transparent !important',
    }
}));

export default function Navbar() {

    const classes = useStyles();
    return (
        <div className='classes.root'>
             <AppBar 
             position="static"
             className={classes.navbar}
             >
           
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Trends
          </Typography>
            <Link to='/' className='hidelink'>
          <Button className=''>Home</Button>
          </Link>
          <Link to='/Shop' className='hidelink'>
          <Button >Shop</Button>
          </Link>
          <Link to='/Cart' className='hidelink'>
          <Button color=''>Cart</Button>
          </Link>
        </Toolbar>
      </AppBar>
        </div>
    )
}
