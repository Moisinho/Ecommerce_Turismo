import React from 'react';

function Nosotros() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 px-4">
      <h2 className="text-4xl font-semibold text-center text-white pt-8 mb-10">Conoce a Nuestro Equipo</h2>

      <div className="flex justify-between space-x-6">
        {/* Miembro 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 w-1/3 flex flex-col items-center mb-6">
          <img 
            className="w-52 h-30 object-cover mb-4 rounded-full border-4 border-blue-400"
            src={require('../assets/img/moiso.png')} 
            alt="Moisés Betancourt"
          />
          <div className="p-4 h-32 text-center w-full">
            <h3 className="text-2xl font-bold mb-2 text-blue-600">Moisés Betancourt</h3>
            <p className="text-gray-600">
              Estudiante de la carrera de Licenciatura en Desarrollo de Software en la Universidad Tecnológica de Panamá.
            </p>
          </div>

          {/* Detalles con overflow-y */}
          <div className="overflow-y-auto max-h-96 w-full px-4">
            <div className="p-4">
              <h4 className="text-lg font-bold mb-2 text-blue-600">Contacto</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Teléfono: +507 6935-3940</li>
                <li>Correo: moisos695@gmail.com</li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Moisinho" className="text-blue-500 underline">GitHub: Moisinho</a></li>
              </ul>
            </div>

            <div className="p-4">
              <h4 className="text-lg font-bold mb-2 text-blue-600">Conocimientos</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Desarrollo de aplicaciones web utilizando HTML, CSS y JavaScript</li>
                <li>SQL y modelado de bases de datos (Microsoft SQL Server, MySQL, MariaDB)</li>
                <li>Experiencia en Backend con Java creando APIs para conectar bases de datos</li>
                <li>Uso de GitHub para control de versiones</li>
                <li>Familiaridad con Tailwind CSS</li>
                <li>Graduado del Samsung Innovation Campus en Análisis de Datos e IA</li>
              </ul>
            </div>

            <div className="p-4">
              <h4 className="text-lg font-bold mb-2 text-blue-600">Habilidades</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Puntualidad</li>
                <li>Adaptabilidad</li>
                <li>Responsabilidad</li>
                <li>Liderazgo</li>
                <li>Disciplina</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Miembro 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 items-center flex flex-col mb-6">
          <img 
            className="w-40 h-30 object-cover mb-4 rounded-full border-4 border-purple-400" 
            src={require('../assets/img/odeth.png')} 
            alt="Odeth Arevalo"
          />
          <div className="p-4 h-32 text-center">
                <h3 className="text-2xl font-bold mb-2 text-purple-600">Odeth Arevalo</h3>
                <p className="text-gray-600">
                Cursando tercer año en la carrera de Licenciatura en Desarrollo de Software - Universidad Tecnológica de Panamá.
                </p>
          </div>
          
          <div className="overflow-y-auto max-h-96 w-full px-4">
                <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-purple-600">Contacto</h4>
                <ul className="text-gray-600">
                    <li>Teléfono: 6639-7778</li>
                    <li>Correo: odetharevalo26@gmail.com</li>
                </ul>
                </div>

                <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-purple-600">Conocimientos</h4>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Nivel intermedio en programación orientada a objetos con Java</li>
                    <li>Nivel avanzado en Tailwind CSS</li>
                    <li>Desarrollo web Front-end y Back-end</li>
                    <li>Manejo de Microsoft Office (Word, Excel, PowerPoint)</li>
                    <li>Inglés de negocios básico</li>
                    <li>Desarrollo de aplicaciones Android con Kotlin</li>
                </ul>
                </div>

                <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-purple-600">Habilidades</h4>
                <ul className="list-disc list-inside text-gray-600">
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

        {/* Miembro 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 w-1/3 flex flex-col items-center mb-6">
          <img 
            className="w-52 h-48 object-cover mb-8 rounded-full border-4 border-green-400" 
            src={require('../assets/img/nadim.png')} 
            alt="Nadim García"
          />
          <div className="p-4 h-32 text-center w-full">
            <h3 className="text-2xl font-bold mb-2 text-green-600">Nadim García</h3>
            <p className="text-gray-600">
              Estudiante de Licenciatura en Desarrollo de Software en la Universidad Tecnológica de Panamá.
            </p>
          </div>

          <div className="overflow-y-auto max-h-96 w-full px-4">
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-green-600">Contacto</h4>
                <ul className="text-gray-600">
                  <li>Teléfono: +507 6508-8531</li>
                  <li>Correo: nadim.garcia@utp.ac.pa</li>
                </ul>
              </div>

              <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-green-600">Conocimientos</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Nivel avanzado en JavaScript y frameworks modernos</li>
                  <li>Experiencia en diseño responsivo con Tailwind CSS</li>
                  <li>Desarrollo web Full Stack con React y Node.js</li>
                  <li>Uso avanzado de herramientas de control de versiones como Git</li>
                  <li>Inglés técnico intermedio</li>
                  <li>Desarrollo de aplicaciones móviles con Flutter</li>
                </ul>
              </div>

              <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-green-600">Habilidades</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Organización y gestión de tareas</li>
                  <li>Trabajo en equipo multidisciplinario</li>
                  <li>Comunicación efectiva</li>
                  <li>Innovación y creatividad</li>
                  <li>Capacidad de aprendizaje autónomo</li>
                  <li>Resolución de conflictos</li>
                  <li>Trabajo bajo presión</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
