import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
<<<<<<< HEAD
    minWidth:345,
    margin:"20px",
  marginLeft:"65px",
  
    
=======
>>>>>>> 6efd0b911313df7b69e7efab48c552714a6f1c7f
  },
  media: {
    height: 400,
  },
});

export default function FactCard() {
  const classes = useStyles();

  return ( 
  <Grid item xs={12} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
<<<<<<< HEAD
            {props.className}
            {props.name}
          </Typography> 
          <Typography gutterBottom variant="p" component="p">
            {props.lifespan}
            
          </Typography> 
          <Typography gutterBottom variant="p" component="p">
            "{props.quote}"
            
          </Typography> 
          <Typography variant="body2" color="textSecondary" component="p">
            {props.about}
=======
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
>>>>>>> 6efd0b911313df7b69e7efab48c552714a6f1c7f
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

        
       
        
    </Grid>
    
  );
}

