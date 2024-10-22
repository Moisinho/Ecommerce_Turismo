import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fondo from '../assets/img/fondo_login.png';

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem('user'));

    if (registeredUser && 
        (registeredUser.email === emailOrUsername || registeredUser.username === emailOrUsername) && 
        registeredUser.password === password) {
      alert('Inicio de sesión exitoso!');
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {}
      <div className="w-1/3 shadow-xl flex flex-col items-center justify-center p-8 h-4/5 bg-gradient-to-b from-blue-400 to-blue-900">
        <h2 className="text-3xl text-white font-bold mb-4">Crea una nueva aventura</h2>
        <img src={fondo} alt="Imagen decorativa" className="rounded-lg w-full h-auto" />
      </div>

      {}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 h-4/5 flex flex-col justify-between">
        <h1 className="text-3xl font-bold mb-4">Iniciar Sesión</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Correo o Nombre de Usuario</label>
          <input
            type="text"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu correo o nombre de usuario"
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
          Iniciar Sesión
        </button>
        
        <div className="mt-4 text-center">
          <p>
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
