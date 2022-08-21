import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(0, 0, 0)",
  },
});

export default function TVShowCard({ tvShow, action }) {
  const classes = useStyles();
  //const tvShow = props.tvShow;
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header} title={tvShow.name} />
      <CardMedia
        className={classes.media}
        image={
            tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              
              {""} {tvShow.popularity}{" "}
              <EmojiPeopleIcon fontSize="small" />
            </Typography>
            <Typography variant="h6" component="p">
              
              {""} {tvShow.vote_average}{" "}
              <EmojiPeopleIcon fontSize="small" />
            </Typography>
            <Typography variant="h6" component="p">
              
              {""} {tvShow.vote_count}{" "}
              <EmojiPeopleIcon fontSize="small" />
            </Typography>
     
      
            <Link to={`/tv/${tvShow.id}`}>
              <Button variant="outlined" size="medium" color="primary">
              More Info ...
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}