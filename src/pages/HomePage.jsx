// Página de inicio con listado de usuarios
import SearchBar from '../components/common/SearchBar';
import UserList from '../components/users/UserList';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Directorio de Usuarios</h1>
      <SearchBar />
      <UserList />
    </div>
  );
};

export default HomePage;
