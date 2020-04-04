import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import CardMain from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import CardMedia from '@material-ui/core/CardMedia';

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
   fontSize:11,
 }
});

const Card = props => {
  const classes = useStyles();
  const {id, title, description, img, price} = props;
  return (
    <CardMain variant="outlined" className={classes.borderColor}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe">
        //     R
        //   </Avatar>
        // }

      />
         <CardMedia
        image={img}  
        style={{ height: "250px" }} 
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
        <Button size="small" className={classes.button}>Add To Cart</Button>
        <Button size="small" className={classes.button}>More Info</Button>
        <IconButton aria-label="settings">
            <ShareOutlinedIcon />
          </IconButton>
      </CardActions>
    </CardMain>
  );
};

export default Card