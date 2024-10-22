import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from '../src/context/contexto.jsx'; 
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import Products from './pages/products.jsx';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Nosotros from './pages/nosotros.jsx';
import FavoritosButton from './components/FavoritosButton'; // Importa el botón de favoritos

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
              <FavoritosButton /> {/* Agrega el botón de favoritos */}
            </>
          } />
          <Route path="/products" element={
            <>
              <Navbar />
              <Products />
              <Footer />
              <FavoritosButton /> {/* Agrega el botón de favoritos */}
            </>
          } />
          <Route path="/nosotros" element={
            <>
              <Navbar />
              <Nosotros />
              <Footer />
              <FavoritosButton /> {/* Agrega el botón de favoritos */}
            </>
          } />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
