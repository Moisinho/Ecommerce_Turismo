import React from 'react';

function Nosotros() {
  return (
    <div className="w-full min-h-screen bg-gray-100 px-4 mb-10">
      <h2 className="text-3xl font-semibold text-center pt-8 mb-10">Conoce a Nuestro Equipo</h2>

      <div className="flex justify-between space-x-6">
        {}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 w-1/3 flex flex-col items-center">
            <img 
                className="w-52 h-30 object-cover mb-4"
                src={require('../assets/img/moiso.png')} 
                alt="Integrante 1"
            />
            <div className="p-4 h-32 text-center w-full"> {}
                <h3 className="text-xl font-bold mb-2">Moisés Betancourt</h3>
                <p className="text-gray-700">
                    Estudiante de la carrera de Licenciatura en Desarrollo de Software en la Universidad Tecnológica de Panamá
                </p>
            </div>

            <div className='overflow-y-auto max-h-96 list-none'>
                <div className="p-4">
                        <h4 className="text-lg font-bold mb-2">Contacto</h4>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Teléfono: +507 6935-3940</li>
                            <li>Correo: moisos695@gmail.com</li>
                            <li>GitHub: https://github.com/Moisinho</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h4 className="text-lg font-bold mb-2">Conocimientos</h4>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Desarrollo de aplicaciones web utilizando
                            HTML, CSS y JavaScript,</li>
                            <li>SQL y modelado de bases de datos en entornos como Microsoft SQL Server, MySQL, MariaDB,</li>
                            <li>Experiencia en Backend con Java creando APIs para
                            conectar bases de datos a aplicaciones
                            web.</li>
                            <li>Uso de GitHub para el control de
                            versiones y la colaboración en proyectos.</li>
                            <li>Familiaridad con frameworks CSS como
                            Tailwind para crear interfaces modernas y
                            responsivas.</li>
                            <li>Graduado como 10mo puesto del Samsung Innovation Campus de Análisis de Datos e Inteligencia Artificial con Python.</li>
                        </ul>
                    </div>

                    <div className="p-4">
                        <h4 className="text-lg font-bold mb-2">Habilidades</h4>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Puntualidad</li>
                            <li>Adaptabilidad</li>
                            <li>Responsabilidad</li>
                            <li>Liderazgo</li>
                            <li>Disciplina</li>
                        </ul>
                    </div>
           </div>
        </div>
        {}
        <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 items-center flex flex-col">
            <img 
                className="w-40 h-30 object-cover mb-4 rounded-full" 
                src={require('../assets/img/odeth.png')} 
                alt="Integrante 1"
            />
            <div className="p-4 h-32 text-center">
                <h3 className="text-xl font-bold mb-2">Odeth Arevalo</h3>
                <p className="text-gray-700">
                    Cursando tercer año en la carrera de Licenciatura en Desarrollo de Software - Universidad Tecnológica de Panamá
                </p>
            </div>
        
            <div className='overflow-y-auto max-h-96'>
                <div className="p-4">
                    <h4 className="text-lg font-bold mb-2">Contacto</h4>
                    <ul className="text-gray-700">
                        <li>Teléfono: 6639-7778</li>
                        <li>Correo: odetharevalo26@gmail.com</li>
                    </ul>
                </div>
                <div className="p-4">
                    <h4 className="text-lg font-bold mb-2">Conocimientos</h4>
                    <ul className="text-gray-700">
                        <li>Nivel intermedio en programación orientada a objetos con Java.</li>
                        <li>Nivel avanzado en el Framework Tailwind CSS.</li>
                        <li>Desarrollo web Front-end y Back-end intermedio.</li>
                        <li>Manejo de Microsoft Office (Word, Excel, PowerPoint).</li>
                        <li>Inglés de negocios básico.</li>
                        <li>Diseño, creación y mantenimiento de bases de datos.</li>
                        <li>Desarrollo de aplicaciones Android con Kotlin.</li>
                    </ul>
                </div>

                <div className="p-4">
                    <h4 className="text-lg font-bold mb-2">Habilidades</h4>
                    <ul className="text-gray-700">
                        <li>Puntualidad</li>
                        <li>Adaptabilidad</li>
                        <li>Responsabilidad</li>
                        <li>Iniciativa</li>
                        <li>Disciplina</li>
                        <li>Pensamiento crítico</li>
                        <li>Resolución de problemas</li>
                    </ul>
                </div>
            </div>
        </div>

        {}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 w-1/3 flex flex-col items-center">
            <img 
                className="w-52 h-48 object-cover mb-8" 
                src={require('../assets/img/nadim.png')} 
                alt="Integrante 3"
            />
            <div className="p-4 h-32 text-center w-full"> {}
                <h3 className="text-xl font-bold mb-2">Nadim García</h3>
                <p className="text-gray-700">
                    Breve descripción del integrante 3, su rol en el equipo y cualquier otra información relevante.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
