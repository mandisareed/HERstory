import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FactCard from './FactCard'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      
      <Grid   container spacing={3}>
        <Grid item xs={12} md={4}>
        <FactCard />
        </Grid>
        <Grid item xs={12} md={4}>
        <FactCard/>
        </Grid>
        <Grid item xs={12} md={4}>
          <FactCard/>
        </Grid>
        
        
       
      </Grid>
      <Divider className={classes.divider} />
      
      
      </div>
  );
}