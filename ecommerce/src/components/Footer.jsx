import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="text-center">
        © {new Date().getFullYear()}. Página web de comercio electrónico orientado al Turismo - Polymorphers. Todos los derechos reservados.
      </div>
    </footer>
  );
}
