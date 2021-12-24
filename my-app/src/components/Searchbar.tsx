import React, { useState, useEffect, useContext } from "react";

import { searchMovies } from "../services/movies.services";
import { MoviesContext, MovieProvider } from "../services/context";
import { TvShowContext, TvShowProvider } from "../services/TvShowContext";
import useDebounced from "../hooks/useDebounced";
import useDidMountEffect from "../hooks/useDidMountEffect";
import { searchTvShow } from "../services/tvshow.services";


const Searchbar = () => {
    const [search, setSearchbar] = useState("")
    const debouncedSearch = useDebounced<string>(search, 1000)

    const { updateMovies, getTop10Movies } = useContext(MoviesContext);
    const { updateTvShows, getTop10TvShows } = useContext(TvShowContext);


    const handleSearch = (search: string) => {
      if (search) {
        searchMovies(search).then((movies) => {
          updateMovies(movies);
        });
        if (search) {
          searchTvShow(search).then((tvshows) =>{
            updateTvShows(tvshows);
          } )
        }
      }
    }

    const handleOnSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      handleSearch(search)
    };

    useDidMountEffect(() => {
      if (debouncedSearch && debouncedSearch.length >= 3) {
        handleSearch(debouncedSearch)
      }

      if (!debouncedSearch) {
        getTop10Movies()
      }
      if (!debouncedSearch) {
        getTop10TvShows()
      }
    }, [debouncedSearch])

    

    return ( 
        <div>
        <form name="form" onSubmit={(e) => handleOnSubmit(e)} noValidate>
          <input
            type="text"
            name="movie"
            className="search__input"
            placeholder="Search Movie and Tv Show"
            value={search}
            onChange={(e) => setSearchbar(e.target.value)}
          />
        </form>
      </div>
    );
  };
export default Searchbar;