import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { VerticalAlignCenterSharp } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    minWidth: 300,
    justifyContent: "center",
    marginLeft: "15%",
    marginRight: "-10%",
    marginBottom: 50
  },
  media: {
    height: 400,
  },
  grid: {
    display: "flex",
    // justifyContent: "center"
    position: "relative",
alignSelf: "center"  }
});

export default function FactCard(props) {
  const classes = useStyles();

  return (
    <div
      style={{
        flexGrow: 1,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} md={3} className={classes.grid}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={props.src} />
            <CardContent>
              <Typography
                style={{ color: "black", fontFamily: "Montserrat" }}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {props.className}
                {props.name}
              </Typography>
              <Typography
                style={{ color: "black", fontFamily: "Montserrat" }}
                gutterBottom
                variant="p"
                component="p"
              >
                {props.lifespan}
              </Typography>
              <Typography
                style={{ fontFamily: "Montserrat" }}
                gutterBottom
                variant="p"
                component="p"
              >
                "{props.quote}"
              </Typography>
              <Typography
                style={{ fontFamily: "Montserrat" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {props.about}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
}
