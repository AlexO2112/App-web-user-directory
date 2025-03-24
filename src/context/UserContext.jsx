// Context API para manejar el estado global de usuarios
import { createContext, useState, useContext, useEffect } from 'react';
import { getUsers } from '../services/api';

// Creamos el contexto
const UserContext = createContext();

// Hook personalizado para usar el contexto
export const useUserContext = () => useContext(UserContext);

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  // Estado para almacenar la lista de usuarios
  const [users, setUsers] = useState([]);
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para manejar la carga
  const [loading, setLoading] = useState(true);
  // Estado para manejar errores
  const [error, setError] = useState(null);

  // Función para cargar los usuarios
  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError('Error al cargar los usuarios. Por favor, intenta de nuevo más tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar usuarios al montar el componente
  useEffect(() => {
    loadUsers();
  }, []);

  // Función para filtrar usuarios según el término de búsqueda
  const filteredUsers = users.filter((user) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchTermLower) ||
      user.email.toLowerCase().includes(searchTermLower) ||
      user.company.name.toLowerCase().includes(searchTermLower)
    );
  });

  // Valores y funciones que expondremos en el contexto
  const value = {
    users: filteredUsers,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    refreshUsers: loadUsers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
