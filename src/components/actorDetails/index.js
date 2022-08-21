import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// New
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";


const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const ActorDetails = ({ actor }) => {
  const classes = useStyles();
  
  return (
    <>
      <Typography variant="h5" component="h3">
        AKA: 
      </Typography>
      <Typography variant="h6" component="p">
        &emsp; {actor.also_known_as[0]}<br></br>
        &emsp; {actor.also_known_as[1]}<br></br>
        &emsp; {actor.also_known_as[2]}<br></br>
      </Typography>
      <Typography variant="h5" component="h3">
        From: <Typography variant="h6" component="p">
        &emsp; {actor.place_of_birth}
      </Typography>
      </Typography>
      
      
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        &emsp; {actor.biography}
      </Typography>
     
      
    </>
  );
};
export default  ActorDetails ;