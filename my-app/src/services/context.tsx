import React, { useState, FC} from 'react';
import { Movie, top10Movies } from "./movies.services";


export const MoviesContext = React.createContext<{
    movies: Movie[],
    updateMovies: (movies: Movie[]) => void,
    getTop10Movies: () => void,
  }>({
    movies: [],
    updateMovies: () => {},
    getTop10Movies: () => {},
  });


export const MovieProvider: FC = ({ children }) => {

  const [movies, setMovies] = useState<Movie[]>([])

  const updateMovies = (movies: Movie[]) => {
    console.log(movies)
    setMovies(movies)
  }

  const getTop10Movies = () => {
    top10Movies().then((movies) => {
      setMovies(movies)
    })
  }

  return (
    <MoviesContext.Provider value={{
      movies,
      updateMovies,
      getTop10Movies,
    }}>
      {children}
    </MoviesContext.Provider>
  )
}