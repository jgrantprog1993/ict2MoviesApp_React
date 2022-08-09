import React from "react";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import MovieListPageTemplate from '../components/templateMovieListPage'
import AddToWatchLaterlistIcon from  "../components/cardIcons/addToWatchLaterlistIcon.js";
import {  getUpcomingMovies } from "../api/tmdb-api";


const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery("upcoming", getUpcomingMovies)
  
 
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  
  return (
    <MovieListPageTemplate
      title='Upcoming  Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchLaterlistIcon movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;