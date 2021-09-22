import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToFavourites } = useContext(GlobalContext);


  return (
    <div className="result-card">
      <div className="poster-wrapper">
        
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
        </div>

        <div className="controls">
          <button className="btn" onClick={() => addMovieToFavourites(movie)}>
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
};
