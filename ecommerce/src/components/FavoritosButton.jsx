import React, { useState } from 'react';
import { useFavorites } from '../context/contexto';
import FavoritosList from './FavoritosList';

const FavoritosButton = () => {
  const { favorites } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition"
      >
        ⭐ {favorites.length}
      </button>
      <FavoritosList isOpen={isOpen} onClose={() => setIsOpen(false)} /> {}
    </>
  );
};

export default FavoritosButton;
