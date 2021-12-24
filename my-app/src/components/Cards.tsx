import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../services/context";
import { useModal } from 'react-hooks-use-modal';


const Card = () => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
  const { movies, getTop10Movies } = useContext(MoviesContext);

    useEffect(getTop10Movies, [])

    return (
      <div className="catalog">
        {movies.map((movie) => (
        <div className="gallery">
        <div className="content" key={movie.id}>
          <img src ={movie.picture} alt="noimage" />
          <p>{movie.title}</p>
          <h6>Rating: {movie.rating}</h6>
          <button className="details" onClick={open}>Get Details</button>
          <Modal>
          <div>
          <h1>Title</h1>
          <p>This is a customizable modal.</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal>
        </div>
        
        </div>
    
       ))}
       </div>
    );
};

export default Card;