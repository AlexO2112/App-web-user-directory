/**
 * Componente de detalle de usuario
 * Este componente muestra informacion detallada de un usuario especifico.
 * Maneja diferentes estados: carga, error y visualización de datos.
 * @component
 */
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserById } from '../../services/api';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';

/**
 * @returns {JSX.Element} Elemento JSX que contiene los detalles del usuario o mensajes de estado
 */
const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getUserById(id);
        setUser(data);
      } catch (err) {
        setError('Error al cargar los detalles del usuario. Por favor, intenta de nuevo más tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!user) {
    return <ErrorMessage message="Usuario no encontrado" />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{user.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Información de contacto</h2>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <span className="font-medium">Username:</span> {user.username}
            </li>
            <li className="text-gray-600">
              <span className="font-medium">Email:</span> {user.email}
            </li>
            <li className="text-gray-600">
              <span className="font-medium">Teléfono:</span> {user.phone}
            </li>
            <li className="text-gray-600">
              <span className="font-medium">Sitio web:</span>{' '}
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {user.website}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Dirección</h2>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <span className="font-medium">Calle:</span> {user.address.street}
            </li>
            <li className="text-gray-600">
              <span className="font-medium">Suite:</span> {user.address.suite}
            </li>
            <li className="text-gray-600">
              <span className="font-medium">Ciudad:</span> {user.address.city}
            </li>
            <li className="text-gray-600">
              <span className="font-medium">Código postal:</span> {user.address.zipcode}
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Empresa</h2>
        <ul className="space-y-2">
          <li className="text-gray-600">
            <span className="font-medium">Nombre:</span> {user.company.name}
          </li>
          <li className="text-gray-600">
            <span className="font-medium">Eslogan:</span> {user.company.catchPhrase}
          </li>
          <li className="text-gray-600">
            <span className="font-medium">Sector:</span> {user.company.bs}
          </li>
        </ul>
      </div>

      <Link
        to="/"
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Volver al listado
      </Link>
    </div>
  );
};

export default UserDetail;
