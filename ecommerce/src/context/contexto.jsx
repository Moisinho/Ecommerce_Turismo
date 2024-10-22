import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    setFavorites((prev) => [...prev, item]);
  };

  const removeFavorite = (itemId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== itemId));
  };

  const payForFavorite = (itemId) => {
    alert(`Pagando por: ${itemId}`);
    removeFavorite(itemId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, payForFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
