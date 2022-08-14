export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
  export const getMovie = (args)=> {
    console.log('argsMovie = ' + args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
        }
        //console.log('responseMovie= ' + response.json())
        return response.json();
      })
      .catch((error) => {
        throw error
    });
  };
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    console.log('getMovieImages ->' + `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`);
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then((response) => {
        if(!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
      });
    };

    export const getPopularActors = () => {
      return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
        ).then((response) => {
          if(!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
          throw error
        });
      };

      export const getActorsImages = ({ queryKey }) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
        console.log('queryKey:', queryKey);
        console.log('id:', id);
        console.log('getActorImages ->' + `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`);
        return fetch(
          `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
        ).then( (response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          //console.log('response.json', response.json());
          return response.json();
      
        })
        .catch((error) => {
          throw error
       });

      };

      export const getActorDetails = (args) => {
        console.log(args);
        const [, idPart] = args.queryKey;
        const { id } = idPart;
        console.log(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
        return fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.json().message);
            }
            return response.json();
          })
          .catch((error) => {
            throw error;
          });
      };

      export const getActorTaggedImages = ({ queryKey }) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
        console.log('queryKeyTagged:', queryKey);
        console.log('idTagged:', id);

        return fetch(
          `https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=${process.env.REACT_APP_TMDB_KEY}`
        ).then( (response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          //console.log('response.json', response.json());
          return response.json
      
        })
        .catch((error) => {
          throw error
       });
      };

      export const getTVShows = () => {
        console.log(' TVShows - >' + `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&isort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
        return fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&isort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };


      export const getTVShow = (args)=> {
        console.log('argsTVShow = ' + args)
        const [, idPart] = args.queryKey;
        const { id } = idPart;
        return fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
            }
            //console.log('responseMovie= ' + response.json())
            return response.json();
          })
          .catch((error) => {
            throw error
        });
      };

