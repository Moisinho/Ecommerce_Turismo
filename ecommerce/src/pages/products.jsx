import React from 'react';
import destino1 from '../assets/img/destinos-turisticos-mas-atractivos-en-panama-3.jpg';
import destino2 from '../assets/img/destinos-turisticos-mas-atractivos-en-panama-2.jpg';
import destino3 from '../assets/img/destinos-turisticos-mas-atractivos-en-panama-5.jpg';
import destino4 from '../assets/img/destinos-turisticos-mas-atractivos-en-panama-4.jpg';
import { useFavorites } from '../context/contexto';

const ProductsPage = [
  {
    id: 1,
    image: destino1,
    location: 'Bocas del Toro',
    descripcion: "Situado en la costa noroeste del Caribe, este archipiélago de nueve islas tropicales ha conservado una fuerte influencia de las Indias Occidentales. El turismo ecológico y de aventura, cuentan con algunos de los mejores de buceo y de surf breaks en el país.",
    price: 'Precio estimado: $150',
  },
  {
    id: 2,
    image: destino2,
    location: 'Casco Antiguo',
    descripcion: "Situado en la Ciudad de Panamá, cuenta con techos de tejas anaranjadas y arquitectura colonial española del casco antiguo de la ciudad de Panamá, están en contraste con los rascacielos de la bahía. Además, cuenta con una vida nocturna muy atractiva.",
    price: 'Precio estimado: $10',
  },
  {
    id: 3,
    image: destino3,
    location: 'Islas San Blas',
    descripcion: "Son majestuosas y maravillosas, son propiedad y están operadas y protegidas por los indios Kuna. Este archipiélago de atolones de la costa norte de Panamá, tiene una isla tropical para todos los días del año, además de unas cuantas de sobra (378 para ser exactos, 49 de las cuales están habitadas).",
    price: 'Precio estimado: $170',
  },
  {
    id: 4,
    image: destino4,
    location: 'Boquete',
    descripcion: "Es un pequeño pueblo situado en las faldas del Volcán Barú, en las tierras altas de Chiriquí. Hay senderismo, rafting y escalada en roca justo en la puerta y 500 de 972 especies de aves de Panamá se encuentran en la provincia, incluyendo la muy buscada Quetzal.",
    price: 'Precio estimado: $230',
  },
];

function Products() {
  const { addFavorite } = useFavorites();

  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Sitios recomendados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {ProductsPage.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={product.image} alt={`Imagen de ${product.location}`} />
              <div className="p-4">
                <p className="text-lg font-semibold mb-2">{product.location}</p>
                <p className="text-gray-500">{product.descripcion}</p>
                <p className="text-blue-600 font-bold">{product.price}</p>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                  onClick={() => {
                    addFavorite(product);
                    alert(`Añadido a favoritos: ${product.location}`);
                  }}
                >
                  Añadir a Favoritos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
