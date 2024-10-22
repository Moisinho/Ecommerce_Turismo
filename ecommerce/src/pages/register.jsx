import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fondito from '../assets/img/fondo_login.png';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      username,
      password,
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Registro exitoso! Ahora puedes iniciar sesión.');
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {}
      <div className="w-1/3 shadow-xl flex flex-col items-center justify-center p-8 h-4/5 bg-gradient-to-b from-blue-400 to-blue-900">
        <h2 className="text-3xl text-white font-bold mb-4">Únete a nuestra aventura</h2>
        <img src={fondito} alt="Imagen decorativa" className="rounded-lg w-full h-auto" />
      </div>

      {}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 h-4/5 flex flex-col justify-between">
        <h1 className="text-3xl font-bold mb-4">Registro</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Correo</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu correo"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nombre de Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu nombre de usuario"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Registrarse
        </button>
        
        <div className="mt-4 text-center">
          <p>
            ¿Ya tienes cuenta?{' '}
            <Link to="/" className="text-blue-500 hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
