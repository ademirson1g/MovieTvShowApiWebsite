import React, { useState, FC} from 'react';
import { TvShow, top10TvShow } from "./tvshow.services";


export const TvShowContext = React.createContext<{
  tvshows: TvShow[],
  updateTvShows: (tvshows: TvShow[]) => void,
    getTop10TvShows: () => void,
  }>({
    tvshows: [],
    updateTvShows: () => {},
    getTop10TvShows: () => {},
  });


export const TvShowProvider: FC = ({ children }) => {

  const [tvshows, setTvShows] = useState<TvShow[]>([])

  const updateTvShows = (tvshows: TvShow[]) => {
    console.log(tvshows)
    setTvShows(tvshows)
  }

  const getTop10TvShows = () => {
    top10TvShow().then((tvshows) => {
      setTvShows(tvshows)
    })
  }

  return (
    <TvShowContext.Provider value={{
      tvshows,
      updateTvShows,
      getTop10TvShows,
    }}>
      {children}
    </TvShowContext.Provider>
  )
}