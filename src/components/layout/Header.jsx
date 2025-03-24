// Componente de encabezado
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
          Directorio de Usuarios
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200 transition-colors">
                Inicio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
