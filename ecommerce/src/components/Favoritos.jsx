import React from 'react';
import { useFavorites } from '../context/contexto';

const Favoritos = () => {
    const { favorites, removeFavorite, clearFavorites } = useFavorites();

    return (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4">
            <h4 className="font-bold">Favoritos</h4>
            <ul>
                {favorites.map((item) => (
                    <li key={item.id} className="flex justify-between items-center">
                        <span>{item.location}</span>
                        <button
                            className="text-red-500"
                            onClick={() => removeFavorite(item.id)}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
            {favorites.length > 0 && (
                <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => {
                        alert("Proceso de pago iniciado");
                        clearFavorites();
                    }}
                >
                    Pagar
                </button>
            )}
        </div>
    );
};

export default Favoritos;
