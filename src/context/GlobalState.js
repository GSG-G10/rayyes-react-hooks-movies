import React, { createContext, useEffect, useState } from "react";

// initial state
const initialState = {
  Favourites: localStorage.getItem("Favourites")
    ? JSON.parse(localStorage.getItem("Favourites"))
    : [],
};
// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(state.Favourites || []));
  }, [state]);

  // action
  const addMovieToFavourites = (movie) => {
    setState((prevState) => {
      console.log({ prevState });
      return { Favourites: [...prevState.Favourites, movie] };
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        Favourites: state.Favourites,
        addMovieToFavourites,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
