import React from 'react';
import { useFavorites } from '../context/contexto'; 

const FavoritosList = ({ isOpen, onClose }) => {
  const { favorites, removeFavorite, payForFavorite } = useFavorites(); 

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-16 right-4 bg-white border rounded shadow-lg p-4 max-w-sm max-h-80 overflow-auto">
      <h2 className="font-bold">Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No hay favoritos añadidos.</p>
      ) : (
        <ul>
          {favorites.map((item) => (
            <li key={item.id} className="py-4 border-b border-gray-300"> {}
              <h3 className="font-semibold">{item.location}</h3> {}
              <p>{item.descripcion}</p> {}
              <p className="text-blue-600 font-bold">{item.price}</p> {}
              <div className="mt-2"> {}
                <button 
                  onClick={() => payForFavorite(item.id)} 
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                >
                  Pagar
                </button>
                <button 
                  onClick={() => removeFavorite(item.id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition ml-2"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button 
        onClick={onClose} 
        className="mt-2 text-red-500 flex items-center justify-center px-2 py-1 border border-red-500 rounded hover:bg-red-500 hover:text-white transition" 
      >
        <span className="text-xl font-bold mr-1">&times;</span> {}
        Cerrar
      </button> {}
    </div>
  );
};

export default FavoritosList;
