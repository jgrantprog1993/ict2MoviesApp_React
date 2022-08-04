import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPopularActors} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('people', getPopularActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;


  return (
    <PageTemplate
      title="Popular Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
);
};

export default HomePage;