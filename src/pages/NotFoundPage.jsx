// Página 404 para rutas no encontradas
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Página no encontrada</h2>
      <p className="text-xl text-gray-600 mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
