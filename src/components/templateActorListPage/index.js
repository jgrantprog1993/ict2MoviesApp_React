import React, { useState } from "react";
import Header2 from "../headerActorList";
import FilterActorsCard from "../filterActorsCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../actorList";

const useStyles = makeStyles((theme) =>  ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ActorListPageTemplate({ actors, name, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setgenderFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genderId = Number(genderFilter);

  let displayedActors = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genderId > 0 ? m.gender === genderId : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setgenderFilter(value);
  };

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header2 title={name} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={displayedActors} />
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
        <FilterActorsCard
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genderFilter={genderFilter}
        />
      </Drawer>
    </>    
  );
}
export default ActorListPageTemplate;