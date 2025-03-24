/**
 * Componente de lista de usuarios
 * 
 * Este componente muestra la lista de usuarios filtrada según el término de búsqueda.
 * Maneja diferentes estados: carga, error y lista vacía.
 * Renderiza un UserCard por cada usuario en la lista filtrada.
 * 
 * @component
 */
import { useUserContext } from '../../context/UserContext';
import UserCard from './UserCard';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';

/**
 * Componente funcional que renderiza la lista de usuarios
 * @returns {JSX.Element} Elemento JSX que contiene la lista de usuarios o mensajes de estado
 */
const UserList = () => {
  const { users, loading, error } = useUserContext();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (users.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-100 rounded-lg">
        <p className="text-lg text-gray-600">No se encontraron usuarios con esos criterios de búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
