import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateActorListPage";
import Header from "../components/headerActorList";
import FilterCard from "../components/filterActorsCard";
import { useQuery } from 'react-query'
import { useParams } from "react-router-dom";
import Spinner from '../components/spinner'
import {getPopularActors} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../components/actorList";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";


const PopularActorsPage = (props) => { 
  const {  data, error, isLoading, isError }  = useQuery("PopularActors", getPopularActors)
  
 
if (isLoading) {
  return <Spinner />
}

if (isError) {
  return <h1>{error.message}</h1>
}  
const actors = data.results;

return (
  <PageTemplate
    title='Current Popular Actors'
    actors={actors}
    
    
  />
);
};


export default PopularActorsPage;