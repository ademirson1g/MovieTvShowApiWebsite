import React, {useEffect, useContext} from 'react'
import { TvShowContext } from '../services/TvShowContext';
import { useModal } from 'react-hooks-use-modal';



const TVShowCards = () => {

  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

    const { tvshows, getTop10TvShows } = useContext(TvShowContext);

    useEffect(getTop10TvShows, [])


    return (
      <div className="catalog">
      {tvshows.map((tvshows) => (
      <div className="gallery">
      <div className="content" key={tvshows.id}>
        <img src ={tvshows.picture} alt="noimage" />
        <p>{tvshows.name}</p>
        <h6>Rating: {tvshows.rating}</h6>
        <button className="details" onClick={open}>Get Details</button>
       
          <Modal>
          <div className="modal">
          <img src ={tvshows.picture} alt="noimage" />
          <h1>{tvshows.title}</h1>
          <p>{tvshows.resume}</p>
          <button className="back"onClick={close}>BACK</button>
        </div>
      </Modal>
        </div>
        
        </div>
    
       ))}
       </div>
    )
}

export default TVShowCards
