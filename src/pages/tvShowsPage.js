import React from "react";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import TVShowListPageTemplate from '../components/templateTVShowListPage'
import AddToWatchLaterlistIcon from  "../components/cardIcons/addToWatchLaterlistIcon.js";
import {  getTVShows } from "../api/tmdb-api";


const PopularTVShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery("TVShows", getTVShows)
  
 
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;
  
  return (
    <TVShowListPageTemplate
      title='Current TV Shows'
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToWatchLaterlistIcon tvShow={tvShow} />;
      }}
    />
  );
};

export default PopularTVShowsPage;