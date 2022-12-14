import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import ActorPage from "./pages/actorDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import PopularActorsPage from "./pages/popularActorsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpComingMoviesPage from "./pages/upComingMoviesPage"; // NEW
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularTVShowsPage from "./pages/tvShowsPage"; // NEW
import TVShowPage from "./pages/tvShowDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />      {/* New Header  */}
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/:id" element={<MovieReviewPage/>} />
            <Route path="/movies/upcoming" element={<UpComingMoviesPage/>}/>
            <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}/>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/movies/:id" element={<MoviePage/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/person/popular" element={<PopularActorsPage/>} />
            <Route path="/tv/popular" element={<PopularTVShowsPage/>} />
            <Route path="/tv/:id" element={<TVShowPage/>} />
            <Route path="/actor/:id" element={<ActorPage/>} />

          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));