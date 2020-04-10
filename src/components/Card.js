import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CardMain from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

import { connect } from 'react-redux'
import { addCart } from '../actions/addAction';


const useStyles = makeStyles({
  content: {
    fontSize: 12,
  },
  borderColor: {
    borderColor: 'white',
  },
 title: {
   fontSize: 14,
 },
 button: {
   fontSize:13,
 },
 picSize: {
   height: "320px",
 },
 favIcon: {
   margin: 20,
 }
});

const Card = (props) => {
  console.log(props);
  const classes = useStyles();
  const {id, title, description, img, price} = props;
  return (
    <CardMain variant="outlined" className={classes.borderColor}>
      <CardHeader 
        action={
          <IconButton>
            <Fab disabled aria-label="like" className={classes.favIcon}>
                <FavoriteIcon />
            </Fab>
          </IconButton>
        }

      />
           
 
         <CardMedia
        image={img}  
        className={classes.picSize}
      />
      <CardContent>
      <Typography variant="h5" component="h2">
         {title}
        </Typography>
        <Typography>
         {price}
        </Typography>
        <Typography className={classes.content} color="textSecondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.addCart} className={classes.button}>Add To Cart</Button>
        <Button size="small" className={classes.button}>More Info</Button>
        <IconButton aria-label="settings">
          </IconButton>
      </CardActions>
    </CardMain>
  );
};

export default connect(null, {addCart})(Card);