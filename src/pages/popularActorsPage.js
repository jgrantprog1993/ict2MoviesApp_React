import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateActorListPage";
import Header from "../components/headerActorList";
import FilterCard from "../components/filterActorsCard";
import { useQuery } from 'react-query'
import { useParams } from "react-router-dom";
import Spinner from '../components/spinner'
import {} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../components/actorList";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) =>  ({
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const PopularActorsPage = (props) => {
  const classes = useStyles();
  const [actors, setActors] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genderId = Number(genderFilter);

  let displayedActors = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genderId > 0 ? m.gender.includes(genderId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenderFilter(value);
  };

  useEffect(() => {
    fetch(
      
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        return json.results;
      })
      .then((actors) => {
        setActors(actors);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Popular Actors Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
    <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          nameFilter={nameFilter}
          genderFilter={genderFilter}
        />
      </Drawer>
    </>
  );
};

export default PopularActorsPage;