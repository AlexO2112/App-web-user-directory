/**
 * Componente de tarjeta de usuario
 * 
 * Este componente muestra la información básica de un usuario en formato de tarjeta.
 * Incluye el nombre, email y empresa del usuario, así como un enlace para ver más detalles.
 * 
 * @component
 */
import { Link } from 'react-router-dom';

/**
 * Componente funcional que renderiza una tarjeta con información básica de un usuario
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.user - Objeto con la información del usuario
 * @param {number} props.user.id - ID único del usuario
 * @param {string} props.user.name - Nombre completo del usuario
 * @param {string} props.user.email - Correo electrónico del usuario
 * @param {Object} props.user.company - Información de la empresa del usuario
 * @param {string} props.user.company.name - Nombre de la empresa
 * @returns {JSX.Element} Elemento JSX que contiene la tarjeta del usuario
 */
const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Empresa:</span> {user.company.name}
        </p>
        <Link
          to={`/usuario/${user.id}`}
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
