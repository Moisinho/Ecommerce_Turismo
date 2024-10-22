import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
      <div style={{ color: '#f97316', fontWeight: 'bold', fontSize: '1.25rem' }}>E-Commerce Turismo</div>
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link 
          to="/home"
          className="font-bold mr-4 text-lg"
          style={{ color: '#4a5568', textDecoration: 'none' }} 
          onMouseOver={(e) => e.currentTarget.style.color = '#f97316'} 
          onMouseOut={(e) => e.currentTarget.style.color = '#4a5568'}
        >
          Inicio
        </Link>
        <Link
          to="/nosotros"
          className="font-bold mr-4 text-lg"
          style={{ color: '#4a5568', textDecoration: 'none' }}
          onMouseOver={(e) => e.currentTarget.style.color = '#f97316'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a5568'}
        >
          Nosotros
        </Link>
        <Link
          to="/products"
          className="font-bold mr-4 text-lg"
          style={{ color: '#4a5568', textDecoration: 'none' }}
          onMouseOver={(e) => e.currentTarget.style.color = '#f97316'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a5568'}
        >
          Comercio
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
