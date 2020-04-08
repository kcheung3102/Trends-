import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';


const useStyles = makeStyles(theme => ({

    title: {
       flexGrow: 1,
       color:'black',
      },
    navbar: {
      boxShadow:'none',
      background:'transparent !important',
    },
    basket: {
      fontWeight:'bold',
      padding: '10px',
    },
    links: {
      textDecoration: 'none',
      margin: '10px',
    },
    buttonSize: {
      fontSize: '18px',
    }
}));

function Navbar(props) {

  useEffect(() => {
    getNumbers();
  }, [])

    const classes = useStyles();
    return (
        <div>
             <AppBar 
             position='static'
             className={classes.navbar}
             >
                <Toolbar>
                  <Typography variant="h4" className={classes.title}>
                    Trends
                  </Typography>
                    <Link to='/' className={classes.links}>
                  <Button className={classes.buttonSize} >Home</Button>
                  </Link>
                  <Link to='/Shop' className={classes.links}>
                  <Button className={classes.buttonSize}>Shop</Button>
                  </Link>
                  <Link to='/Cart' className={classes.links}>
                  <Button className={classes.buttonSize}>
                    Cart
                    <span className={classes.basket}>
                      <Badge badgeContent={props.cartProps.cartNumbers} color="secondary">
                        <ShoppingCartIcon />
                      </Badge>
                    </span>
                  </Button>
                  </Link>
                </Toolbar>
              </AppBar>
        </div>
    )
}
 
const mapStatesToProps = state => ({
  cartProps: state.cartState
})
export default connect(mapStatesToProps, { getNumbers })(Navbar);