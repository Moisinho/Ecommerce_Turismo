import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between px-12">

      {}
      <main className="flex flex-col md:flex-row items-center text-center md:text-left py-20 px-4">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-800 leading-snug">
            ¡Bienvenido a nuestro sitio web E-Commerce!
          </h1>
          <h2 className="text-xl font-bold text-blue-900 leading-snug">
            Equipo Polymorphers
          </h2>
          
          <p className="mt-4 text-gray-500 text-lg">
            Esperamos inspirar a los viajeros a descubrir la magia de nuestros hermosos paisajes, abriendo puertas a nuevas oportunidades para el comercio turístico local y dejar una huella positiva en la economía regional. Invitamos a los aventureros del mundo a sumergirse en las maravillas de nuestra tierra. ¡Ven y descubre todo lo que te espera en este paraíso tropical!
          </p>

          {}
          <div className="mt-10 bg-white p-6 rounded-full shadow-lg flex space-x-4">
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm">Destino</label>
              <input
                type="text"
                placeholder="Buscar destinos"
                className="focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm">Fecha</label>
              <input
                type="text"
                placeholder="22 de Octubre"
                className="focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm">Tipo de viaje</label>
              <input
                type="text"
                placeholder="Todos"
                className="focus:outline-none"
              />
            </div>
          </div>
        </div>

        {}
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <img src={require('../assets/img/Group.png')} alt="Descripción de la imagen" />
        </div>
      </main>


    </div>
  );
}

export default HomePage;
