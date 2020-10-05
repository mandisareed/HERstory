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
    maxWidth: 300,
    minWidth:300,
    // marginRight: "10px"
    justifyContent: "center"
    
  // marginLeft:"65px",
  },
  media: {
    height: 400,
  },
});

export default function FactCard(props) {
  const classes = useStyles();

  return ( 
    <div style={{
      flexGrow: 1,
    }}>
  <Grid item xs={12} md={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
        />
        <CardContent>
          <Typography  style={{color:"black", fontFamily: "Montserrat"}} gutterBottom variant="h5" component="h2">
            {props.className}
            {props.name}
          </Typography> 
          <Typography style={{color:"black", fontFamily: "Montserrat"}} gutterBottom variant="p" component="p">
            {props.lifespan}
            
          </Typography> 
          <Typography style={{fontFamily: "Montserrat"}} gutterBottom variant="p" component="p">
            "{props.quote}"
            
          </Typography> 
          <Typography style={{fontFamily: "Montserrat"}} variant="body2" color="textSecondary" component="p">
            {props.about}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        
       
        
    </Grid>
    </div>
  );
}

